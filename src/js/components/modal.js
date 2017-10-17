import $ from 'jquery'

import emitter from '../utils/emitter'
import domParser from '../utils/dom-parser'

const NAME = 'modal'
const HASH = '#modal-open'

const templates = {
  modal: '<div class="modal"></div>',
  close: '<i class="modal-close glyph glyph-x"></i>',
  content: '<div class="modal-content"><div class="modal-body"></div></div>'
}

const DEFAULTS = {
  container: 'body',
  size: 'medium',
  triggerClose: null,
  static: false,
  keyboard: true,
  history: false,
  keys: { esc: 27 },
  triggerOpen: null
}

class Modal {
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }
  }

  init () {
    this.container = document.querySelector(this.options.container)

    this.createModal()

    return this
  }

  show () {
    this.bindListeners()
    this.showModal()
  }

  hide () {
    this.unbindListeners()
    this.hideModal()
  }

  destroy () {
    this.element.removeAttribute(`data-${NAME}`)
    this.modal.remove()
  }

  bindListeners () {
    if (this.options.triggerClose) {
      const triggerClose = this.modal.querySelector(this.options.triggerClose)

      triggerClose.addEventListener('click', this.hide.bind(this))
    }

    this.close.addEventListener('click', this.hide.bind(this))

    this.bindKeyboardListener()

    if (this.options.history) {
      this.bindModalShowListener()
      this.bindHashChangeListener()
      this.bindModalHideListener()
    }
  }

  onEscKeyPressed (e) {
    const { esc } = this.options.keys
    const key = e.which

    if (key === esc) {
      this.hide()
    }
  }

  bindKeyboardListener () {
    if (this.options.keyboard) {
      window.addEventListener('keyup', this.onEscKeyPressed.bind(this))
    }
  }

  bindModalShowListener () {
    emitter.on('modal:show', () => {
      window.location.hash = HASH
    })
  }

  bindHashChangeListener () {
    window.addEventListener('hashchange', () => {
      if (window.location.hash) {
        return
      }

      this.hide()
    })
  }

  bindModalHideListener () {
    emitter.on('modal:hide', () => {
      history.back()
    })
  }

  unbindListeners () {
    if (this.options.triggerClose) {
      const triggerClose = this.modal.querySelector(this.options.triggerClose)

      triggerClose.removeEventListener('click', this.hide.bind(this))
    }

    this.close.removeEventListener('click', this.hide.bind(this))
    window.removeEventListener('keyup', this.onEscKeyPressed.bind(this))
  }

  bindTrigger () {
    if (this.options.triggerOpen) {
      document.querySelector(this.options.triggerOpen)
        .addEventListener(
          'click',
          this.onTriggerOpenClick.bind(this)
        )
    }
  }

  onTriggerOpenClick (event) {
    event.preventDefault()
    this.show()
  }

  showModal () {
    emitter.emit('modal:show')
    emitter.removeAllListeners('modal:show')

    this.modal.classList.add('modal-enter')
    this.content.classList.add('modal-content-enter')
    this.container.classList.add('no-scroll')

    window.setTimeout(() => {
      this.modal.classList.add('modal-show')
      this.content.classList.add('modal-content-show')
    }, 200)

    this.modal.addEventListener('click', this.onModalClick.bind(this))
  }

  hideModal () {
    if (window.location.hash) {
      emitter.emit('modal:hide')
    }
    emitter.removeAllListeners('modal:hide')

    this.content.classList.remove('modal-content-show')
    this.content.classList.add('modal-content-leave')

    this.modal.classList.remove('modal-show')
    this.modal.classList.add('modal-leave')

    this.container.classList.remove('no-scroll')

    window.setTimeout(() => {
      this.modal.classList.remove('modal-enter', 'modal-leave')
      this.content.classList.remove('modal-content-enter', 'modal-content-leave')
    }, 200)
  }

  onModalClick (event) {
    if (!this.isStaticModal() && this.modal === event.target) {
      this.hideModal()
    }
  }

  fillModal () {
    const modalBody = this.content.querySelector('.modal-body')

    modalBody.appendChild(this.element)
  }

  createModal () {
    this.modal = domParser(templates.modal)
    this.content = domParser(templates.content)
    this.close = domParser(templates.close)

    this.content.classList.add(this.setupSizeModal(this.options.size))

    if (!this.isStaticModal()) {
      this.content.appendChild(this.close)
    }

    this.modal.appendChild(this.content)

    this.container.appendChild(this.modal)

    this.bindTrigger()
    this.fillModal()
  }

  isStaticModal () {
    return this.options.static
  }

  setupSizeModal (size) {
    var sizes = {
      'small': 'modal-content-sm',
      'medium': 'modal-content-md',
      'large': 'modal-content-lg'
    }

    return sizes[size]
  }
}

/* istanbul ignore next */
$.fn[NAME] = function (options) {
  options = options || {}

  return this.each(function () {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Modal(this, options).init())
    }
  })
}

export default Modal
