import emitter from '../utils/emitter'
import registerEvents from '../utils/register-events'

import rules from './validation/defaults'

const NAME = 'validation'
const DEFAULTS = {
  events: 'blur',
  selector: '[data-required]'
}

class Validation {
  /**
   * Create a new Validation component.
   *
   * @param {Element} element Element to be used as the form component.
   * @param {Object}  options Options used to customize the component.
   */
  constructor (element, options) {
    this.element = element

    this.options = { ...DEFAULTS, ...options }
  }

  /**
   * Initialize validation element by binding listeners on registered events.
   *
   * @return {Validation} An instance for the validation component.
   */
  init () {
    this.fields = this.element.querySelectorAll(this.options.selector)
    this.events = this.options.events.replace(/\s/g, '').split(',')

    this.bindListeners()
    this.registerComponent()

    return this
  }

  /**
   * Bind required listeners based on events registered on instance.
   */
  bindListeners () {
    this.handler = (e) => {
      this.validate(e.target)
    }

    registerEvents(this.fields, this.events, this.handler)
  }

  /**
   * Emit `validation:pristine` event passing the correspondent field.
   * Usually used to clean/reset form values and validations.
   */
  setPristine (field) {
    emitter.emit('validation:pristine', field)
  }

  /**
   * Validate individual field according to rule(s) associated with it.
   *
   * @return {Boolean} True if some error has occurred, false otherwise.
   */
  validate (field) {
    let rules = field.getAttribute('data-validate')

    if (!rules) {
      return
    }

    rules = rules.split(' ').reduce((errors, rule) => {
      if (!this.rules[rule].call(this, field, this.element)) {
        errors.push(rule)
      }

      return errors
    }, [])

    emitter.emit(`validation:${!rules.length ? 'success' : 'error'}`, field, rules)

    return !rules.length
  }

  /**
   * Validate filtered inputs.
   *
   * @return {Array} Array of validated inputs.
   */
  validateAll () {
    return Array.from(this.getFilteredInputs())
      .map(this.validate, this)
      .every(validation => validation)
  }

  /**
   * Filter inputs based on which ones should be validate.
   *
   * @return {Array} Array of elements to be validated.
   */
  getFilteredInputs () {
    return Array.from(
      this.element.querySelectorAll(this.options.selector)
    ).filter(this.shouldValidateInput)
  }

  /**
   * Checker whether the input passed should be validated or not based on the
   * `data-validate` attribute.
   *
   * @return {Boolean} Set to true if the input has the data-validate, false
   *                   otherwise.
   */
  shouldValidateInput (input) {
    return input.hasAttribute('data-validate')
  }

  /**
   * Add Validation instance to the element attributes object.
   */
  registerComponent () {
    this.element.attributes.component = new Validation(this, this.options)
  }
}

Validation.prototype.rules = rules

export default Validation
