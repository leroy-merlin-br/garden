import Popper from 'popper.js'

const DEFAULTS = {
  placement: 'top'
}

class Tooltip {
  /**
   * Create a new Tooltip instance.
   *
   * @param {Element} element The reference used to position the tooltip.
   * @param {Object}  options Options used to customize the tooltip element.
   */
  constructor (element, options = {}) {
    this.element = element
    this.target = this.getTarget()
    this.options = { ...DEFAULTS, ...options }
  }

  /**
   * Initialize component by creating a new Popper instance.
   *
   * @return {Tooltip} An instance for the Tooltip component.
   */
  init () {
    this.registerComponent()

    return this
  }

  /**
   * Get element that will be used as the tooltip element.
   *
   * @return {NodeList} The tooltip element.
   */
  getTarget () {
    const targetName = this.element.getAttribute('data-tooltip')

    return this.element.querySelectorAll(targetName)
  }

  /**
   * Create a new Popper instance.
   *
   * @return {Popper} The Popper instance created with the propper elements.
   */
  buildPopper () {
    return new Popper(this.element, this.target[0], this.options)
  }

  /**
   * Add Tooltip instance to the element attributes object.
   */
  registerComponent () {
    const popper = this.buildPopper()

    this.element.attributes.component = popper
  }
}

export default Tooltip
