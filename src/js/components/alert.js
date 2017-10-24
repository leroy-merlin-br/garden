import $ from 'jquery'
import Modal from './modal'

import domParser from '../utils/dom-parser'

const NAME = 'alert'

const DEFAULTS = {
  textMessage: 'This is an example message',
  textButton: 'Ok',
  size: 'medium',
  triggerClose: '[data-alert-button]'
}

class Alert {
  constructor (options) {
    this.options = { ...DEFAULTS, ...options }
  }

  init () {
    this.setupElement()
    this.show()
  }

  setupElement () {
    const { textMessage, textButton, size, triggerClose } = this.options

    this.element = domParser(this.buildHtml(textMessage, textButton))

    this.modal = new Modal(this.element, { triggerClose, size }).init()
    this.modal.element.setAttribute('data-modal', '')
  }

  show () {
    const { triggerClose } = this.options

    this.modal.show()
    this.modal.content.querySelector(triggerClose).focus()
  }

  hide () {
    this.modal.hide()
  }

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
}

/* istanbul ignore next */
$.fn[NAME] = function (options) {
  return $.data(this, NAME, new Alert(options).init())
}

/* istanbul ignore next */
export default (options) => new Alert(options).init()
export { Alert }
