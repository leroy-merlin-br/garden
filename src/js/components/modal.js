import $ from 'jquery'
import emitter from '../utils/emitter'

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
    this.$element = (element instanceof $) ? element : $(element)
    this.options = $.extend({}, DEFAULTS, (options || {}))
  }

  init () {
    this.$container = $(this.options.container)
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
    this.$element.removeData(NAME)
    this.$modal.remove()
  }

  bindListeners () {
    if (this.options.triggerClose) {
      this.$modal.on('click', this.options.triggerClose, this.hide.bind(this))
    }

    this.$close.on('click', this.hide.bind(this))

    this.bindKeyboardListener()

    if (this.options.history) {
      this.bindModalShowListener()
      this.bindHashChangeListener()
      this.bindModalHideListener()
    }
  }

  bindKeyboardListener () {
    if (this.options.keyboard) {
      $(window).on('keyup', (e) => {
        const { esc } = this.options.keys
        const key = e.which

        if (key === esc) {
          this.hide()
        }
      })
    }
  }

  bindModalShowListener () {
    emitter.on('modal:show', () => {
      window.location.hash = HASH
    })
  }

  bindHashChangeListener () {
    $(window).on('hashchange', () => {
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
      this.$modal.off('click', this.options.triggerClose, this.hide.bind(this))
    }

    this.$close.off('click')
    $(window).off('keyup', this.handler)
  }

  bindTrigger () {
    if (this.options.triggerOpen) {
      $(this.options.triggerOpen).on(
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

    this.$modal.addClass('modal-enter')
    this.$content.addClass('modal-content-enter')
    this.$container.addClass('no-scroll')

    window.setTimeout(() => {
      this.$modal.addClass('modal-show')
      this.$content.addClass('modal-content-show')
    }, 200)

    this.$modal.on('click', this.onModalClick.bind(this))
  }

  hideModal () {
    if (window.location.hash) {
      emitter.emit('modal:hide')
    }
    emitter.removeAllListeners('modal:hide')

    this.$content
      .removeClass('modal-content-show')
      .addClass('modal-content-leave')

    this.$modal
      .removeClass('modal-show')
      .addClass('modal-leave')

    this.$container.removeClass('no-scroll')

    window.setTimeout(() => {
      this.$modal.removeClass('modal-enter modal-leave')
      this.$content.removeClass('modal-content-enter modal-content-leave')
    }, 200)
  }

  onModalClick (event) {
    if (!this.isStaticModal() && this.$modal.is(event.target)) {
      this.hideModal()
    }
  }

  fillModal () {
    this.$content.find('.modal-body').append(this.$element.html())
  }

  createModal () {
    this.$modal = $(templates.modal)
    this.$content = $(templates.content)
    this.$close = $(templates.close)

    this.$content.addClass(this.setupSizeModal(this.options.size))

    if (!this.isStaticModal()) {
      this.$content.append(this.$close)
    }

    this.$modal.append(this.$content)

    this.$container.append(this.$modal)

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
