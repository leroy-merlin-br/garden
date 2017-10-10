import $ from 'jquery'
import emitter from '../utils/emitter'

const NAME = 'collapse'
const DEFAULTS = {
  selector: 'data-target',
  listener: 'click',
  activeClass: 'active',
  visibleClass: 'visible',
  timing: 300
}

class Collapse {
  constructor (element, options) {
    this.element = element

    this.options = { ...DEFAULTS, ...options }
  }

  init () {
    this.toggle = document.querySelectorAll(this.element.getAttribute(this.options.selector))[0]

    this.setInitialState()
    this.bindListeners()

    return this
  }

  setInitialState () {
    this.isCollapsed = !this.toggle.classList.contains(this.options.visibleClass)

    setTimeout(() => {
      this.toggleHeight = this.toggle.scrollHeight
    }, this.options.timing)

    if (!this.isCollapsed) {
      this.toggle.style.maxHeight = `${this.toggleHeight}px`
    }
  }

  bindListeners () {
    this.element.addEventListener(this.options.listener, this.toggleTarget.bind(this))
  }

  toggleTarget () {
    if (this.isCollapsed) {
      this.showTarget()
    } else {
      this.hideTarget()
    }
  }

  hideTarget () {
    this.isCollapsed = true

    this.toggle.style.maxHeight = ''
    this.toggle.classList.remove(this.options.visibleClass)
    this.element.classList.remove(this.options.activeClass)

    emitter.emit('collapse:hide', this.element, this.toggle)
  }

  showTarget () {
    this.isCollapsed = false

    this.toggle.style.maxHeight = `${this.toggleHeight}px`
    this.toggle.classList.add(this.options.visibleClass)
    this.element.classList.add(this.options.activeClass)

    emitter.emit('collapse:show', this.element, this.toggle)
  }
}

/* istanbul ignore next */
$.fn[NAME] = function (options) {
  options = options || {}

  return this.each(function () {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Collapse(this, options).init())
    }
  })
}

export default Collapse
