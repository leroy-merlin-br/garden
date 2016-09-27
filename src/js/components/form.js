import $ from 'jquery'

const NAME = 'form'
const DEFAULTS = {
  events: 'change',
  selectors: '.input, select, .select, .textarea'
}

class Form {
  constructor (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, DEFAULTS, (options || {}))

    this.bindListeners()

    this.toggleFieldsActiveClass()
  }

  bindListeners () {
    $(document).on(
      this.options.events, this.options.selectors,
      this.onFieldChange.bind(this)
    )
  }

  onFieldChange (event) {
    this.toggleActiveClass(event.target)
  }

  shouldInputBeActive ($input) {
    let value = $input.val()

    if ($input.is('select')) {
      value = $input.find('option:selected').text().trim()
    }

    return !!(value)
  }

  toggleActiveClass (input) {
    const $input = $(input)
    const $field = $input.parents('.field')

    if (!$field.length) {
      return
    }

    if (!$field.hasClass('active') && this.shouldInputBeActive($input)) {
      return $field.addClass('active')
    }

    if ($field.hasClass('active') && !this.shouldInputBeActive($input)) {
      return $field.removeClass('active')
    }
  }

  toggleFieldsActiveClass () {
    Array.prototype.forEach.call(
      $(document).find(this.options.selectors),
      this.toggleActiveClass.bind(this)
    )
  }
}

/* istanbul ignore next */
$.fn[NAME] = function (options) {
  options = options || {}

  return this.each(function () {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Form(this, options))
    }
  })
}

export default Form
