import Modal from './modal'

import domParser from '../utils/dom-parser'

const NAME = 'alert'

const DEFAULTS = {
  textMessage: 'This is an example message',
  textButton: 'Ok',
  size: 'medium',
  triggerClose: '[data-alert-button]'
}

export default class Alert {
  /**
   * Create an Alert component
   *
   * @param {Object} options Options used to customize the component.
   */
  constructor (options) {
    this.options = { ...DEFAULTS, ...options }
  }

  /**
   * Initiliaze alert element by setting up required elements and showing it to user.
   */
  init () {
    this.setupElement()
    this.show()
    this.registerComponent()
  }

  /**
   * Set up Modal element, since the Alert component depends on it.
   */
  setupElement () {
    const { textMessage, textButton, size, triggerClose } = this.options

    this.element = domParser(this.buildHtml(textMessage, textButton))

    this.modal = new Modal(this.element, { triggerClose, size }).init()
    this.modal.element.setAttribute('data-modal', '')
  }

  /**
   * Show alert window to user and add element that triggers the close action in the modal instance.
   */
  show () {
    const { triggerClose } = this.options

    this.modal.show()
    this.modal.content.querySelector(triggerClose).focus()
  }

  /**
   * Hide alert window.
   */
  hide () {
    this.modal.hide()
  }

  /**
   * Build the HTML markup that will be used to create the alert element.
   *
   * @param  {String} textMessage  Text content for the alert window.
   * @param  {String} textButton   Text content for the alert button.
   * @return {String}              The Alert HTML markup with the provided text included.
   */
  buildHtml (textMessage, textButton) {
    return (`
      <div>
        <div class="container-fluid align-center">
          <div class="row">
            <div class="col-xs-12">
              <p data-alert-text>${textMessage}</p>
            </div>
            <div class="row">
              <div class="col-xs-offset-2 col-xs-8 col-md-offset-4 col-md-4">
                <button class="button button-primary button-full" data-alert-button>
                  ${textButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `)
  }

  /**
   * Add Alert instance to the element attributes object.
   */
  registerComponent () {
    this.element.attributes.component = new Alert(this.options)
  }
}

/* istanbul ignore next */
export { Alert }
