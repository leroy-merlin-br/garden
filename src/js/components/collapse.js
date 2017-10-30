import emitter from '../utils/emitter'

const NAME = 'collapse'
const DEFAULTS = {
  selector: 'data-target',
  event: 'click',
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
    const dataTarget = this.element.getAttribute(this.options.selector)

    this.toggle = document.querySelectorAll(dataTarget)[0]

    this.setInitialState()
    this.bindListeners()
    this.registerComponent()

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
    this.element.addEventListener(this.options.event, this.toggleTarget.bind(this))
  }

  toggleTarget () {
    if (this.isCollapsed) {
      this.showTarget()
    } else {
      this.hideTarget()
    }
  }

  hideTarget () {
    const { visibleClass, activeClass } = this.options

    this.isCollapsed = true

    this.toggle.style.maxHeight = ''
    this.toggle.classList.remove(visibleClass)
    this.element.classList.remove(activeClass)

    emitter.emit('collapse:hide', this.element, this.toggle)
  }

  showTarget () {
    this.isCollapsed = false

    this.toggle.style.maxHeight = `${this.toggleHeight}px`
    this.toggle.classList.add(this.options.visibleClass)
    this.element.classList.add(this.options.activeClass)

    emitter.emit('collapse:show', this.element, this.toggle)
  }

  registerComponent () {
    this.element.attributes.component = new Collapse(this, this.options)
  }
}

export default Collapse
