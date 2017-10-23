import $ from 'jquery'
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

class Notification {
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }
    this.hideEvent = this.hide.bind(this)
  }

  /**
   * Init notification, insert notifiction into DOM, bind close button and
   * show notifiction based on showIn config
   */
  init () {
    const { dynamic, showIn } = this.options

    this.createNotification()
    this.bindListeners()

    if (dynamic) {
      window.setTimeout(this.show.bind(this), showIn)
    }

    return this
  }

  /**
   * Bind close button
   */
  bindListeners () {
    if (this.close) {
      this.close.addEventListener('click', this.hideEvent)
    }
  }

  /**
   * show notification, if autoHide is true, hide box after hideIn timing config
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
   * hide notification and after hide animation finish, add display: none to element
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
   * Remove data from $element, unbind close button and remove box from DOM
   */
  destroy () {
    this.element.removeAttribute(`data-${NAME}`)

    if (this.close) {
      this.close.removeEventListener('click', this.hideEvent)
    }

    this.box.remove()
  }

  /**
   * Add notification class, append close button and message
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

  createCloseButton () {
    const { dynamic, closeButton } = this.options

    if (!dynamic) {
      this.close = this.box.querySelector(closeButton)
      return this.close
    }

    this.close = domParser(templates.close)
    this.box.appendChild(this.close)
  }
}

/* istanbul ignore next */
$.fn[NAME] = function (options) {
  options = options || {}

  return this.each(function () {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Notification(this, options).init())
    }
  })
}

export default Notification
