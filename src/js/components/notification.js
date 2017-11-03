import transitionEnd from '../utils/transitionend'
import domParser from '../utils/dom-parser'

const NAME = 'notification'

const DEFAULTS = {
  autoHide: false,
  closeButton: `.${NAME}-close`,
  dynamic: true,
  hideIn: 3000,
  message: null,
  showIn: 1000,
  type: 'primary'
}

const classNames = {
  hide: `${NAME}-hide`,
  show: `${NAME}-show`,
  enter: `${NAME}-enter`,
  leave: `${NAME}-leave`,
  close: `${NAME}-close`
}

const templates = {
  box: `<div class="${NAME} ${classNames.enter}"></div>`,
  close: `<i class="${classNames.close} glyph glyph-x"></i>`
}

/** Class representing the Notification component. */
class Notification {
  /**
   * Create a notification.
   *
   * @param {object} element The element designated to be the notification.
   * @param {object} options Options used to customize the component.
   */
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }
    this.hideEvent = this.hide.bind(this)
  }

  /**
   * Initialize notification by inserting it into DOM, binding listeners,
   * and setting the time to show if it is a dynamic notification.
   *
   * @return {Notification} The notification component.
   */
  init () {
    const { dynamic, showIn } = this.options

    this.createNotification()
    this.bindListeners()
    this.registerComponent()

    if (dynamic) {
      window.setTimeout(this.show.bind(this), showIn)
    }

    return this
  }

  /**
   * Bind listener for click event in close button.
   */
  bindListeners () {
    if (this.close) {
      this.close.addEventListener('click', this.hideEvent)
    }
  }

  /**
   * Show notification and set time to close it if the autoHide option is true.
   */
  show () {
    const { show, hide } = classNames
    const { autoHide, hideIn } = this.options

    this.box.classList.add(show)
    this.box.classList.remove(hide)

    if (autoHide) {
      window.setTimeout(this.hideEvent, hideIn)
    }
  }

  /**
   * Hide notification by setting `none` to its display property after animation
   * has finished.
   */
  hide () {
    const { show, hide, enter, leave } = classNames

    this.box.classList.remove(show)
    this.box.classList.add(leave)

    this.box.addEventListener(transitionEnd(), () => {
      this.box.classList.add(hide)
      this.box.classList.remove(enter, leave)
    })
  }

  /**
   * Destroy notification by removing its data-notification attribute, the click
   * listener and the instance box element from DOM.
   */
  destroy () {
    this.element.removeAttribute(`data-${NAME}`)

    if (this.close) {
      this.close.removeEventListener('click', this.hideEvent)
    }

    this.box.remove()
  }

  /**
   * Add notification class, append close button and message.
   */
  createNotification () {
    const { dynamic, message, type } = this.options

    if (!dynamic) {
      this.box = this.element
      return this.createCloseButton()
    }

    if (message) {
      this.box = domParser(templates.box)
      this.box.classList.add(`${NAME}-${type}`)
      this.box.innerHTML = message

      this.createCloseButton()
      this.element.appendChild(this.box)
    }
  }

  /**
   * Create close button and append it to the instance box element if the dynamic
   * option is true.
   */
  createCloseButton () {
    const { dynamic, closeButton } = this.options

    if (!dynamic) {
      this.close = this.box.querySelector(closeButton)
      return this.close
    }

    this.close = domParser(templates.close)
    this.box.appendChild(this.close)
  }

  /**
   * Add Notification instance to the element attributes object.
   */
  registerComponent () {
    this.element.attributes.component = new Notification(this, this.options)
  }
}

export default Notification
