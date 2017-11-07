import registerEvents from '../utils/register-events'

const NAME = 'form'
const DEFAULTS = {
  events: 'change',
  selectors: '.input, select, .select, .textarea'
}

class Form {
  /**
   * Create a new Form instance.
   *
   * @param {Element} element Element to be used as the form component.
   * @param {Object}  options Options used to customize the component.
   */
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }
  }

  /**
   * Initialize component by binding required listeners and checking fields that
   * need to be activated.
   */
  init () {
    this.bindListeners()
    this.toggleFieldsActiveClass()
    this.registerComponent()
  }

  /**
   * Bind listeners for events previously registered in the instance `events`
   * option.
   */
  bindListeners () {
    const events = this.options.events.replace(/\s/g, '').split(',')
    this.elements = this.element.querySelectorAll(this.options.selectors)

    registerEvents(this.elements, events, ({ target }) => this.toggleActiveClass(target))
  }

  /**
   * Check whether input passed should be activated or not by checking its value.
   *
   * @param  {Element} element Input to be checked for its status.
   * @return {Boolean} Set to true if the field should be active, false otherwise.
   */
  shouldInputBeActive (element) {
    let value = element.value

    if (element.options) {
      value = element.options[element.selectedIndex].text
    }

    return !!value.trim()
  }

  /**
   * Toggle `active` class in the element passed according to its current status.
   *
   * @param {Element} element Element in which the class should be toggled.
   */
  toggleActiveClass (element) {
    const field = element.closest('.field')

    if (field) {
      field.classList.toggle('active', this.shouldInputBeActive(element))
    }
  }

  /**
   * Add Modal instance to the element attributes object.
   */
  toggleFieldsActiveClass () {
    Array.prototype.forEach.call(this.elements, this.toggleActiveClass.bind(this))
  }

  /**
   * Add Form instance to the element attributes object.
   */
  registerComponent () {
    this.element.attributes.component = new Form(this, this.options)
  }
}

export default Form
