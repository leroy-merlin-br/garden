import $ from 'jquery'
import Modal from './modal'

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
  constructor (callback, options = {}) {
    this.options = $.extend({}, DEFAULTS, options)
    this.callback = callback
  }

  init () {
    this.setupConfirm()
    this.setupElements()
    this.bindListeners()
    this.showConfirm()
  }

  setupConfirm () {
    this.$element = $(this.buildHtml(this.options))

    this.modal = this.$element.modal(this.options).data('modal')
  }

  setupElements () {
    const { $content } = this.modal
    this.$confirmButton = $content.find(this.options.triggerConfirm)
    this.$cancelButton = $content.find(this.options.triggerCancel)
  }

  bindListeners () {
    this.$confirmButton.on('click', this.onConfirmClick.bind(this))
    this.$cancelButton.on('click', this.onCancelClick.bind(this))
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
    this.$confirmButton.focus()
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
}

/* istanbul ignore next */
$.fn[NAME] = function (callback, options) {
  return $.data(this, NAME, new Confirm(callback, options).init())
}

/* istanbul ignore next */
export default (callback, options) => new Confirm(callback, options).init()
export { Confirm }
