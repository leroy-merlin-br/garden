import Modal from './modal'

import domParser from '../utils/dom-parser'

const NAME = 'confirm'

const DEFAULTS = {
  textMessage: 'This is an example message',
  textConfirmButton: 'Ok',
  textCancelButton: 'Cancel',
  size: 'medium',
  static: true,
  triggerCancel: '[data-cancel-button]',
  triggerConfirm: '[data-confirm-button]'
}

class Confirm {
  /**
   * Instantiate a new Confirm component passing a callback of type described
   * below.
   *
   * @callback confirmCallback
   * @param {Boolean} option Set to true if the confirm button is clicked and
   *                         false if the cancel button is clicked.
   *
   * @param {confirmCallback} callback Function to report user's choice.
   * @param {Object}          options  Options used to customize the component.
   */
  constructor (callback, options) {
    this.options = { ...DEFAULTS, ...options }
    this.callback = callback
  }

  /**
   * Initialize the component by setting up its required elements, adding
   * propper listeners, and showing it to user.
   */
  init () {
    this.setupConfirm()
    this.setupElements()
    this.bindListeners()
    this.registerComponent()
    this.showConfirm()
  }

  /**
   * Set up Modal element since Confirm depends on it.
   */
  setupConfirm () {
    this.element = domParser(this.buildHtml(this.options))

    this.modal = new Modal(this.element, this.options).init()
    this.modal.element.setAttribute('data-modal', '')
  }

  /**
   * Set up the confirm and cancel buttons for the component.
   */
  setupElements () {
    const { content } = this.modal
    const { triggerConfirm, triggerCancel } = this.options

    this.confirmButton = content.querySelector(triggerConfirm)
    this.cancelButton = content.querySelector(triggerCancel)
  }

  /**
   * Add listeners for click actions on confirm and cancel buttons.
   */
  bindListeners () {
    this.confirmButton.addEventListener('click', this.onConfirmClick.bind(this))
    this.cancelButton.addEventListener('click', this.onCancelClick.bind(this))
  }

  /**
   * Trigger instance callback passing true as parameter and hide the confirm window.
   */
  onConfirmClick () {
    this.callback(true)
    this.hideConfirm()
  }

  /**
   * Trigger instance callback passing false as parameter and hide the confirm window.
   */
  onCancelClick () {
    this.callback(false)
    this.hideConfirm()
  }

  /**
   * Show confirm window and focus actions on the confirm button.
   */
  showConfirm () {
    this.modal.show()
    this.confirmButton.focus()
  }

  /**
   * Hide the confirm window.
   */
  hideConfirm () {
    this.modal.hide()
  }

  /**
   * Build the HTML markup that will be used to create the confirm element.
   *
   * @param {Object} object                   Object containing the text content
   *                                          for the confirm element.
   * @param {String} object.textMessage       Message for confirm window.
   * @param {String} object.textConfirmButton Text for the confirm button.
   * @param {String} object.textCancelButton  Text for the cancel button.
   */
  buildHtml ({ textMessage, textConfirmButton, textCancelButton }) {
    return (`
      <div>
        <div class="container-fluid align-center">
          <div class="row">
            <div class="col-xs-12">
              <p data-confirm-text>${textMessage}</p>
            </div>
            <div class="row">
              <div class="col-xs-6 col-sm-push-1 col-sm-5 col-lg-push-2 col-lg-4">
                <button class="button button-primary button-full" data-confirm-button>
                  ${textConfirmButton}
                </button>
              </div>
              <div class="col-xs-6 col-sm-push-1 col-sm-5 col-lg-push-2 col-lg-4">
                <button class="button button-full" data-cancel-button>
                  ${textCancelButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `)
  }

  /**
   * Add Confirm instance to the element attributes object.
   */
  registerComponent () {
    this.element.attributes.component = new Confirm(this.callback, this.options)
  }
}

/* istanbul ignore next */
export default (callback, options) => new Confirm(callback, options).init()
export { Confirm }
