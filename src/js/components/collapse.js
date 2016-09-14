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
    this.$element = $(element)

    this.options = $.extend({}, DEFAULTS, (options || {}))
  }

  init () {
    this.$toggle = $(this.$element.attr(this.options.selector))
    this.toggle = this.$toggle[0]

    this.setInitialState()
    this.bindListeners()

    return this
  }

  setInitialState () {
    this.isCollapsed = !this.$toggle.hasClass(this.options.visibleClass)

    setTimeout(() => {
      this.toggleHeight = this.toggle.scrollHeight
    }, this.options.timing)

    if (!this.isCollapsed) {
      this.toggle.style.maxHeight = `${this.toggleHeight}px`
    }
  }

  bindListeners () {
    this.$element.on(this.options.listener, this.toggleTarget.bind(this))
  }

  toggleTarget () {
    this.isCollapsed ? this.showTarget() : this.hideTarget()
  }

  hideTarget () {
    this.isCollapsed = true

    this.toggle.style.maxHeight = ''
    this.$toggle.removeClass(this.options.visibleClass)
    this.$element.removeClass(this.options.activeClass)

    emitter.emit('collapse:hide', this.$element, this.$toggle)
  }

  showTarget () {
    this.isCollapsed = false

    this.toggle.style.maxHeight = `${this.toggleHeight}px`
    this.$toggle.addClass(this.options.visibleClass)
    this.$element.addClass(this.options.activeClass)

    emitter.emit('collapse:show', this.$element, this.$toggle)
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
