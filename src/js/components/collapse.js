import emitter from '../utils/emitter'

const NAME = 'collapse'
const DEFAULTS = {
  selector: 'data-target',
  event: 'click',
  activeClass: 'active',
  visibleClass: 'visible',
  timing: 300
}

export default class Collapse {
  /**
   * Create a new Collapse instance.
   *
   * @param  {Element} element Element to be used as the collapse component.
   * @param  {Object}  options Options used to customize the component.
   */
  constructor (element, options) {
    this.element = element

    this.options = { ...DEFAULTS, ...options }
  }

  /**
   * Set initial component state, listeners and target.
   *
   * @return {Collapse} An instance of the Collapse class
   */
  init () {
    const dataTarget = this.element.getAttribute(this.options.selector)

    this.toggle = document.querySelectorAll(dataTarget)[0]
    this.toggleTarget = this.toggleTarget.bind(this)

    this.setInitialState()
    this.bindListeners()
    this.registerComponent()

    return this
  }

  /**
   * Check if component is opened or closed by default and set `isCollapsed` flag,
   * get target `scrollHeight` and set as `toggleHeight` property and
   * if `isCollapsed` flag is false, set target `maxHeight` based on `toggleHeight`.
   */
  setInitialState () {
    this.isCollapsed = !this.toggle.classList.contains(this.options.visibleClass)

    setTimeout(() => {
      this.toggleHeight = this.toggle.scrollHeight
    }, this.options.timing)

    if (!this.isCollapsed) {
      this.toggle.style.maxHeight = `${this.toggleHeight}px`
    }
  }

  /**
   * Add @toggleTarget as listener for the events registered in options.
   */
  bindListeners () {
    this.element.addEventListener(this.options.event, this.toggleTarget)
  }

  /**
   * Toggle component state to hidden or visible.
   */
  toggleTarget () {
    if (this.isCollapsed) {
      this.showTarget()
    } else {
      this.hideTarget()
    }
  }

  /**
   * Set `isCollapsed` flag to true, set target `maxHeight` to 0,
   * remove visible and active class from target and element and
   * emit `collapse:hide` event.
   */
  hideTarget () {
    const { visibleClass, activeClass } = this.options

    this.isCollapsed = true

    this.toggle.style.maxHeight = ''
    this.toggle.classList.remove(visibleClass)
    this.element.classList.remove(activeClass)

    emitter.emit('collapse:hide', this.element, this.toggle)
  }

  /**
   * Set `isCollapsed` flag to false,
   * set `maxHeight` to component based on `toggleHeight` property and
   * add visible and active class to Elements and emit `collapse:show` event.
   */
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

/* istanbul ignore next */
export { Collapse }
