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
  constructor (callback, options) {
    this.options = { ...DEFAULTS, ...options }
    this.callback = callback
  }

  init () {
    this.setupConfirm()
    this.setupElements()
    this.bindListeners()
    this.registerComponent()
    this.showConfirm()
  }

  setupConfirm () {
    this.element = domParser(this.buildHtml(this.options))

    this.modal = new Modal(this.element, this.options).init()
    this.modal.element.setAttribute('data-modal', '')
  }

  setupElements () {
    const { content } = this.modal
    const { triggerConfirm, triggerCancel } = this.options

    this.confirmButton = content.querySelector(triggerConfirm)
    this.cancelButton = content.querySelector(triggerCancel)
  }

  bindListeners () {
    this.confirmButton.addEventListener('click', this.onConfirmClick.bind(this))
    this.cancelButton.addEventListener('click', this.onCancelClick.bind(this))
  }

  onConfirmClick () {
    this.callback(true)
    this.hideConfirm()
  }

  onCancelClick () {
    this.callback(false)
    this.hideConfirm()
  }

  showConfirm () {
    this.modal.show()
    this.confirmButton.focus()
  }

  hideConfirm () {
    this.modal.hide()
  }

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

  registerComponent () {
    this.element.attributes.component = new Confirm(this.callback, this.options)
  }
}

/* istanbul ignore next */
export default (callback, options) => new Confirm(callback, options).init()
export { Confirm }
