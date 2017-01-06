import $ from 'jquery'
import Modal from './modal'

const NAME = 'alert'

const templates = {
  wrapper: '<div></div>',
  content: '<div class="container-fluid align-center"></div>',
  wrapperText: '<div class="row"><div class="col-xs-12"><p data-alert-text></p></div></div>',
  button: '<div class="row"><div class="col-xs-offset-2 col-xs-8 col-md-offset-4 col-md-4"><button class="button button-primary button-full" data-alert-button>Ok</button></div></div>'
}

class Alert extends Modal {
  constructor (message) {
    const { content, wrapperText, button, wrapper } = templates
    const $alert = $(content).append(wrapperText, button)
    const $element = $(wrapper).append($alert)

    $element.find('[data-alert-text]').append(message)

    super($element, {
      triggerClose: '[data-alert-button]'
    })
  }
}

/* istanbul ignore next */
$.fn[NAME] = function (message) {
  return $.data(this, NAME, new Alert(message).init().show())
}

export default (message) => new Alert(message).init()
