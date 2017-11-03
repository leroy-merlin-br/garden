import $ from 'jquery'

import throttle from '../utils/throttle'
import removeFromArray from '../utils/remove-array-like'

const NAME = 'lazyload'
const DEFAULTS = {
  throttle: 1000,
  offset: 200,
  selector: 'data-lazy'
}

class LazyLoad {
  /**
   * Create a lazy load component
   * Set base methods references and props (element and options)
   *
   * @param  {[DOM]} element
   * @param  {[Object]} options
   */
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }

    this.onScrollHandler = this.onScrollHandler.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.checkPlaceholder = this.checkPlaceholder.bind(this)
  }

  /**
   * Set event listeners and check placeholder visibility
   *
   * @return {[Class]}
   */
  init () {
    this.bindListeners()
    this.checkVisiblePlaceholders()

    return this
  }

  /**
   * Add scroll event to window and attach @onScrollHandler to event
   */
  bindListeners () {
    window.addEventListener('scroll', this.onScrollHandler)
  }

  /**
   * Prevent @onScroll to be called multiple times using throttle
   */
  onScrollHandler () {
    throttle(this.onScroll, this.options.throttle)
  }


  /**
   * Check if exist at least on [data-lazy] and check visibility
   * If don't have any [data-lazy] remove scroll event to prevent
   * handler been called unnecessarily
   */
  onScroll () {
    if (this.element.length) {
      return this.checkVisiblePlaceholders()
    }

    return window.removeEventListener('scroll', this.onScrollHandler)
  }

  /**
   * Set body offsetHeight and offsetWidth as props
   * and check placeholder visibility
   */
  checkVisiblePlaceholders () {
    const { offsetHeight, offsetWidth } = document.body

    this.windowHeight = offsetHeight
    this.windowWidth = offsetWidth

    Array.from(this.element).forEach(this.checkPlaceholder)
  }

  /**
   * Check if placeholder is visible, if it's true render imagem
   * and remove this element from this.element Array
   *
   * @param  {[DOM]} placeholder
   */
  checkPlaceholder (placeholder) {
    if (this.isPlaceholderVisible(placeholder)) {
      this.renderImage(placeholder)
      removeFromArray(this.element, placeholder)
    }
  }

  /**
   * Check if placeholder position in window
   *
   * @param  {[DOM]}  placeholder
   * @return {Boolean}
   */
  isPlaceholderVisible (placeholder) {
    if (typeof placeholder !== 'object') {
      return false
    }

    return placeholder.getBoundingClientRect().top <= (this.windowHeight + this.options.offset)
  }

  /**
   * Replace placeholder to created image
   *
   * @param  {[DOM]} placeholder
   */
  renderImage (placeholder) {
    placeholder.parentNode.replaceChild(this.createImage(placeholder), placeholder)
  }

  /**
   * Create a image base on [data-lazy] options
   *
   * @param  {[DOM]} placeholder
   * @return {[DOM]} - imagem with src based on lazy-load options
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
   * Parse all data-attr from [data-lazy] to <image />
   * but prevent [data-lazy], [data-srcset] and [data-src] to be setted in img
   *
   * @param  {[DOM]} image
   * @param  {[NamedNodeMap]} attributes - any html attribute from [data-lazy]
   * @return {[DOM]} image with attributes from [data-lazy]
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
   * Check if string has any of data-attr
   *
   * @param  {[String]} name
   * @return {Boolean}
   */
  isDefaultAttribute (name) {
    return name.match(/^data-(lazy|srcset|src)$/)
  }

  /**
   * Check breakpoints variation and return an imagem with source
   * based on breakpoints
   *
   * @param  {[DOM]} image
   * @param  {[String]} breakpoints
   * @return {[DOM]}
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
   * Parse string with breakpoint size and image sorce
   * convert each breakpoint into an object.
   *
   * @param  {[String]} breakpoints [breakpoints separated by comma]
   * @return {[Array]}             [description]
   */
  parseBreakpoints (breakpoints) {
    return breakpoints.split(/,\s+/g).map(breakpoint => {
      const [ src, width ] = breakpoint.trim().split(/\s+/)

      return { src, width }
    })
  }

  /**
   * Sort breakpoint array to greater to lower
   *
   * @param  {[Array]} breakpoints [Array of objects. Ex: [{ src: '', width: ''}]]
   * @return {[Array]}             [Sorted array of objects]
   */
  sortBreakpoints (breakpoints) {
    return breakpoints.sort((a, b) => b.width - a.width)
  }

  /**
   * Remove scroll event from window
   */
  destroy () {
    window.removeEventListener('scroll', this.onScrollHandler)
  }
}

/* istanbul ignore next */
$.fn[NAME] = function (options = {}) {
  return this.each(function () {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new LazyLoad(this, options).init())
    }
  })
}

export default LazyLoad
