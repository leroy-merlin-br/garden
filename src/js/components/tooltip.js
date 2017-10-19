import Popper from 'popper.js'

const DEFAULTS = {
  placement: 'top'
}

class Tooltip {
  constructor (element, options = {}) {
    this.element = element
    this.target = this.getTarget()
    this.options = { ...DEFAULTS, ...options }
  }

  init () {
    this.registerComponent()

    return this
  }

  getTarget () {
    const targetName = this.element.getAttribute('data-tooltip')

    return this.element.querySelectorAll(targetName)
  }

  buildPopper () {
    return new Popper(this.element, this.target[0], this.options)
  }

  registerComponent () {
    const popper = this.buildPopper()

    this.element.attributes.component = popper
  }
}

export default Tooltip
