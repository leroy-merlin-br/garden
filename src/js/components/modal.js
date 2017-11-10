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
  /**
   * Create a new Modal instance.
   *
   * @param {Element} element Element to be used as the modal window.
   * @param {Object}  options Options used to customize the component.
   */
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }

    this.hide = this.hide.bind(this)
    this.onEscKeyPressed = this.onEscKeyPressed.bind(this)
    this.onTriggerOpenClick = this.onTriggerOpenClick.bind(this)
    this.onModalClick = this.onModalClick.bind(this)
  }

  /**
   * Initialize the component by setting required elements and listeners.
   *
   * @return {Modal} Instance for the Modal component.
   */
  init () {
    this.container = document.querySelector(this.options.container)

    this.createModal()
    this.registerComponent()

    return this
  }

  /**
   * Show modal window and bind listeners to close it.
   */
  show () {
    this.bindListeners()
    this.showModal()
  }

  /**
   * Hide modal window and unbind listeners registered on it.
   */
  hide () {
    this.unbindListeners()
    this.hideModal()
  }

  /**
   * Remove data-modal attribute and the modal window from element instance.
   */
  destroy () {
    this.element.removeAttribute(`data-${NAME}`)
    this.modal.remove()
  }

  /**
   * Bind listeners for closing actions either via keyboard, click event, and
   * back button.
   */
  bindListeners () {
    const { triggerClose, history } = this.options

    if (triggerClose) {
      const triggerCloseElement = this.modal.querySelector(triggerClose)

      triggerCloseElement.addEventListener('click', this.hide)
    }

    this.close.addEventListener('click', this.hide)

    this.bindKeyboardListener()

    if (history) {
      this.bindModalShowListener()
      this.bindHashChangeListener()
      this.bindModalHideListener()
    }
  }

  /**
   * Hide modal window if key pressed has the same code as the key code
   * registered for the modal instance.
   *
   * @param {Event} event The event object with the code for key pressed.
   */
  onEscKeyPressed (event) {
    const { esc } = this.options.keys
    const key = event.which

    if (key === esc) {
      this.hide()
    }
  }

  /**
   * Bind listener for `keyup` event when the instance `keyboard` option is true.
   */
  bindKeyboardListener () {
    if (this.options.keyboard) {
      window.addEventListener('keyup', this.onEscKeyPressed)
    }
  }

  /**
   * Bind listener to the `modal:show` event in order to update current hash in
   * `window.location` object.
   */
  bindModalShowListener () {
    emitter.on('modal:show', () => {
      window.location.hash = HASH
    })
  }

  /**
   * Bind listener to `hashchange` event in order to hide modal when there is no
   * hash content in `window.location` object.
   */
  bindHashChangeListener () {
    window.addEventListener('hashchange', () => {
      if (window.location.hash) {
        return
      }

      this.hide()
    })
  }

  /**
   * Bind listener to `modal:hide` event in order to navigate back in browser
   * history. This is necessary due to the `history` option available for this
   * component, which relies on the browser history.
   */
  bindModalHideListener () {
    emitter.on('modal:hide', () => {
      history.back()
    })
  }

  /**
   * Remove listeners for closing actions on modal window.
   */
  unbindListeners () {
    if (this.options.triggerClose) {
      const triggerClose = this.modal.querySelector(this.options.triggerClose)

      triggerClose.removeEventListener('click', this.hide)
    }

    this.close.removeEventListener('click', this.hide)
    window.removeEventListener('keyup', this.onEscKeyPressed)
  }

  /**
   * Trigger the oppening action for modal window.
   */
  bindTrigger () {
    if (this.options.triggerOpen) {
      document.querySelector(this.options.triggerOpen)
        .addEventListener(
          'click',
          this.onTriggerOpenClick
        )
    }
  }

  /**
   * Callback for the oppening action on modal window.
   *
   * @param {Event} event The click event object.
   */
  onTriggerOpenClick (event) {
    event.preventDefault()
    this.show()
  }

  /**
   * Show modal window, emit the `modal:show` event, and add listener for clicks
   * on the element.
   */
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

    this.modal.addEventListener('click', this.onModalClick)
  }

  /**
   * Hide modal, emit the `modal:hide` event in case there is a hash in
   * `window.location` object, and remove all listeners for that event.
   */
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

  /**
   * Check the target for the click event and hide modal in case the click was
   * outside modal window and it is not a static modal.
   *
   * @param {Event} event The click event object.
   */
  onModalClick (event) {
    if (!this.isStaticModal() && this.modal === event.target) {
      this.hideModal()
    }
  }

  /**
   * Append a modal body to element contents.
   */
  fillModal () {
    const modalBody = this.content.querySelector('.modal-body')

    modalBody.appendChild(this.element)
  }

  /**
   * Set up HTML markup for modal content and bind listeners for triggering the
   * modal oppening.
   */
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

  /**
   * Check whether the modal instance is static or not.
   *
   * @return {Boolean} The value registered for the instance `static` option.
   */
  isStaticModal () {
    return this.options.static
  }

  /**
   * Set up size for modal instance.
   *
   * @param  {String} size Option of modal size configured for the instance.
   * @return {String} The selector used for the corresponding modal size.
   */
  setupSizeModal (size) {
    var sizes = {
      'small': 'modal-content-sm',
      'medium': 'modal-content-md',
      'large': 'modal-content-lg'
    }

    return sizes[size]
  }

  /**
   * Add Modal instance to the element attributes object.
   */
  registerComponent () {
    this.element.attributes.component = new Modal(this, this.options)
  }
}

export default Modal
