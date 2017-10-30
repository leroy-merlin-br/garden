import registerEvents from '../utils/register-events'

const NAME = 'form'
const DEFAULTS = {
  events: 'change',
  selectors: '.input, select, .select, .textarea'
}

class Form {
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }
  }

  init () {
    this.bindListeners()
    this.toggleFieldsActiveClass()
    this.registerComponent()
  }

  bindListeners () {
    const events = this.options.events.replace(/\s/g, '').split(',')
    this.elements = this.element.querySelectorAll(this.options.selectors)

    registerEvents(this.elements, events, ({ target }) => this.toggleActiveClass(target))
  }

  shouldInputBeActive (element) {
    let value = element.value

    if (element.options) {
      value = element.options[element.selectedIndex].text
    }

    return !!value.trim()
  }

  toggleActiveClass (element) {
    const field = element.closest('.field')

    if (field) {
      field.classList.toggle('active', this.shouldInputBeActive(element))
    }
  }

  toggleFieldsActiveClass () {
    Array.prototype.forEach.call(this.elements, this.toggleActiveClass.bind(this))
  }

  registerComponent () {
    this.element.attributes.component = new Form(this, this.options)
  }
}

export default Form
