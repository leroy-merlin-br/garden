import jump from 'jump.js'

const NAME = 'scroll'
const DEFAULTS = {
  duration: 500,
  offset: -30
}

class Scroll {
  /**
   * Instantiate a new Scroll component.
   *
   * @param {Element} element Element to be used as the scrolling reference.
   * @param {Object}  options Options used to customize the component.
   */
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }
  }

  /**
  * Initialize the component and automatically perform the scrolling action.
  */
  init () {
    this.scrollToElement()
    this.registerComponent()
  }

  /**
  * Scroll page to the specified element position.
  */
  scrollToElement () {
    this.scroll = jump(this.element, this.options)
  }

  /**
  * Add Scroll instance to the element attributes object.
  */
  registerComponent () {
    this.element.attributes.component = new Scroll(this.element, this.options)
  }
}

/* istanbul ignore next */
export default Scroll
export { Scroll }
