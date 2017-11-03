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
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }

    this.onScrollHandler = this.onScrollHandler.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.checkPlaceholder = this.checkPlaceholder.bind(this)
  }

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

  onScrollHandler () {
    throttle(this.onScroll, this.options.throttle)
  }

  onScroll () {
    if (this.element.length) {
      return this.checkVisiblePlaceholders()
    }

    return window.removeEventListener('scroll', this.onScrollHandler)
  }

  checkVisiblePlaceholders () {
    const { offsetHeight, offsetWidth } = document.body

    this.windowHeight = offsetHeight
    this.windowWidth = offsetWidth

    Array.prototype.forEach.call(this.element, this.checkPlaceholder)
  }

  checkPlaceholder (placeholder) {
    if (this.isPlaceholderVisible(placeholder)) {
      this.renderImage(placeholder)
      removeFromArray(this.element, placeholder)
    }
  }

  isPlaceholderVisible (placeholder) {
    if (typeof placeholder !== 'object') {
      return false
    }

    return placeholder.getBoundingClientRect().top <= (this.windowHeight + this.options.offset)
  }

  renderImage (placeholder) {
    placeholder.parentNode.replaceChild(this.createImage(placeholder), placeholder)
  }

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
   * [parseAttributes description]
   *
   * @param  {[Node]} image      [description]
   * @param  {[type]} attributes [description]
   * @return {[type]}            [description]
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
   * [isDefaultAttribute description]
   *
   * @param  {[String]}  name [description]
   * @return {Boolean}      [description]
   */
  isDefaultAttribute (name) {
    return name.match(/^(data-lazy|data-srcset|data-src)$/)
  }

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
   * [parseBreakpoints description]
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
