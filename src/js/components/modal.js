import $ from 'jquery'

const NAME = 'modal'

const templates = {
  modal: '<div class="modal"></div>',
  close: '<i class="modal-close glyph glyph-x"></i>',
  content: '<div class="modal-content"><div class="modal-body"></div></div>'
}

const DEFAULTS = {
  container: 'body',
  triggerClose: null
}

class Modal {
  constructor (element, options) {
    this.$element = (element instanceof $) ? element : $(element)
    this.options = $.extend({}, DEFAULTS, (options || {}))
  }

  init () {
    this._createModal()

    return this
  }

  show () {
    this.bindListeners()
    this._showModal()
  }

  hide () {
    this.unbindListeners()
    this._hideModal()
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

    $(window).on('keyup', this.handler = (e) => {
      if (e.which === 27) {
        this.hide()
      }
    })
  }

  unbindListeners () {
    if (this.options.triggerClose) {
      this.$modal.off('click', this.options.triggerClose, this.hide.bind(this))
    }

    this.$close.off('click')
    $(window).off('keyup', this.handler)
  }

  _bindTrigger () {
    if (this.options.triggerOpen) {
      $(this.options.triggerOpen).on('click', this.show.bind(this))
    }
  }

  _showModal () {
    this.$modal.addClass('modal-enter')
    this.$content.addClass('modal-content-enter')

    window.setTimeout(() => {
      this.$modal.addClass('modal-show')
      this.$content.addClass('modal-content-show')
    }, 200)
  }

  _hideModal () {
    this.$content
      .removeClass('modal-content-show')
      .addClass('modal-content-leave')

    this.$modal
      .removeClass('modal-show')
      .addClass('modal-leave')

    window.setTimeout(() => {
      this.$modal.removeClass('modal-enter modal-leave')
      this.$content.removeClass('modal-content-enter modal-content-leave')
    }, 200)
  }

  _fillModal () {
    this.$content.find('.modal-body').append(this.$element.html())
  }

  _createModal () {
    this.$modal = $(templates.modal)
    this.$content = $(templates.content)
    this.$close = $(templates.close)

    this.$content.append(this.$close)
    this.$modal.append(this.$content)

    $(this.options.container).append(this.$modal)

    this._bindTrigger()
    this._fillModal()
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
