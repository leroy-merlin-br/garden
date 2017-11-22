import throttle from '../utils/throttle'
import removeArrayLike from '../utils/remove-array-like'

const NAME = 'lazyload'
const DEFAULTS = {
  throttle: 1000,
  offset: 200,
  selector: 'data-lazy'
}

class LazyLoad {
  /**
   * Create a lazy load component
   * Set base methods references and properties (element and options).
   *
   * @param  {Element}  element
   * @param  {Object}   options
   */
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }

    this.onScrollHandler = this.onScrollHandler.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.checkPlaceholder = this.checkPlaceholder.bind(this)
  }

  /**
   * Set event listeners and check placeholder visibility.
   *
   * @return {LazyLoad}
   */
  init () {
    this.bindListeners()
    this.checkVisiblePlaceholders()

    return this
  }

  /**
   * Add @onScrollHandler as listener for the scroll event in window.
   */
  bindListeners () {
    window.addEventListener('scroll', this.onScrollHandler)
  }

  /**
   * Prevent @onScroll to be called multiple times using throttle.
   */
  onScrollHandler () {
    throttle(this.onScroll, this.options.throttle)
  }

  /**
   * Check placeholders visibility if there is at least
   * one registered in the element instance.
   * If there are not placeholders to be checked,
   * then the scroll event handler will be removed.
   */
  onScroll () {
    if (this.element.length) {
      return this.checkVisiblePlaceholders()
    }

    return window.removeEventListener('scroll', this.onScrollHandler)
  }

  /**
   * Set body offsetHeight and offsetWidth as instance properties
   * and check placeholder visibility.
   */
  checkVisiblePlaceholders () {
    const { offsetHeight, offsetWidth } = document.body

    this.windowHeight = offsetHeight
    this.windowWidth = offsetWidth

    Array.from(this.element).forEach(this.checkPlaceholder)
  }

  /**
   * Check placeholder in order to render linked image
   * if that placeholder is currently visible.
   *
   * @param  {Element} placeholder
   */
  checkPlaceholder (placeholder) {
    if (this.isPlaceholderVisible(placeholder)) {
      this.renderImage(placeholder)
      this.element = removeArrayLike(this.element, placeholder)
    }
  }

  /**
   * Check if placeholder is currently visible
   * by comparing its position with the window position.
   *
   * @param  {Element}  placeholder
   * @return {Boolean}
   */
  isPlaceholderVisible (placeholder) {
    if (typeof placeholder !== 'object') {
      return false
    }

    return placeholder.getBoundingClientRect().top <= (this.windowHeight + this.options.offset)
  }

  /**
   * Replace placeholder with created image.
   *
   * @param  {Element} placeholder
   */
  renderImage (placeholder) {
    placeholder.parentNode.replaceChild(this.createImage(placeholder), placeholder)
  }

  /**
   * Create an image based on [data-lazy] options.
   *
   * @param  {Element} placeholder
   * @return {Element} image with src based on lazy-load options
   */
  createImage (placeholder) {
    let image = document.createElement('img')

    this.parseAttributes(image, placeholder.attributes)

    image.removeAttribute('data-lazy')

    if (placeholder.getAttribute('data-srcset')) {
      this.checkBreakpointsSource(image, placeholder.getAttribute('data-srcset'))
    } else {
      image.src = placeholder.getAttribute('data-src')
    }

    return image
  }

  /**
   * Check the list of attributes passed and add to the image element
   * only those with a name different from data-lazy, data-srcset, and data-src.
   *
   * @param  {Element}      image
   * @param  {NamedNodeMap} attributes any html attribute from [data-lazy]
   * @return {Element} image with attributes from [data-lazy]
   */
  parseAttributes (image, attributes) {
    Array.from(attributes, (attr) => {
      if (!this.isDefaultAttribute(attr.name)) {
        image.setAttribute(attr.name, attr.value)
      }
    })

    return image
  }

  /**
   * Check if string passed as parameter
   * matches any of the default data attributes.
   *
   * @param  {String} name
   * @return {Boolean}
   */
  isDefaultAttribute (name) {
    return name.match(/^data-(lazy|srcset|src)$/)
  }

  /**
   * Check breakpoints variation and return an imagem with source
   * based on breakpoints.
   *
   * @param  {Element}  image
   * @param  {String}   breakpoints
   * @return {Element}
   */
  checkBreakpointsSource (image, breakpoints) {
    breakpoints = this.parseBreakpoints(breakpoints)

    this.sortBreakpoints(breakpoints)

    for (let i = 0; i < breakpoints.length; i++) {
      let breakpoint = breakpoints[i]

      if (breakpoint.width <= this.windowWidth) {
        image.src = breakpoint.src
        break
      }
    }

    return image
  }

  /**
   * Parse string with breakpoint size and image source
   * in order to convert each breakpoint into an object.
   *
   * @param  {String} breakpoints breakpoints separated by comma
   * @return {Array}
   */
  parseBreakpoints (breakpoints) {
    return breakpoints.split(/,\s+/g).map(breakpoint => {
      const [ src, width ] = breakpoint.trim().split(/\s+/)

      return { src, width }
    })
  }

  /**
   * Sort breakpoint array to greater to lower.
   *
   * @param  {Array} breakpoints Array of objects. Ex: [{ src: '', width: ''}]]
   * @return {Array}             Sorted array of objects
   */
  sortBreakpoints (breakpoints) {
    return breakpoints.sort((a, b) => b.width - a.width)
  }

  /**
   * Remove scroll event from window.
   */
  destroy () {
    window.removeEventListener('scroll', this.onScrollHandler)
  }
}

/* istanbul ignore next */
export default LazyLoad
export { LazyLoad }
