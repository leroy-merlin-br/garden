import Popper from 'popper.js'
import $ from 'jquery'

const NAME = 'tooltip'

const DEFAULTS = {
  placement: 'top'
}

class Tooltip {
  constructor (element, options = {}) {
    this.element = element
    this.target = this._getTarget()
    this.options = { ...DEFAULTS, ...options }
  }

  init () {
    this._registerPopper()

    return this
  }

  _getTarget () {
    const targetName = this.element.getAttribute('data-tooltip')

    return this.element.querySelectorAll(targetName)
  }

  _buildPopper () {
    return new Popper(this.element, this.target[0], this.options)
  }

  _registerPopper () {
    const popper = this._buildPopper()

    $(this.element).data('popper', popper)
  }
}

/* istanbul ignore next */
$.fn[NAME] = function (options) {
  options = options || {}

  return this.each(function () {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Tooltip(this, options).init())
    }
  })
}

export default Tooltip
