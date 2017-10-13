import $ from 'jquery'

import emitter from '../utils/emitter'
import registerEvents from '../utils/register-events'

import rules from './validation/defaults'

const NAME = 'validation'
const DEFAULTS = {
  events: 'blur',
  selector: '[data-required]'
}

class Validation {
  constructor (element, options) {
    this.element = element

    this.options = { ...DEFAULTS, ...options }
  }

  init () {
    this._fields = this.element.querySelectorAll(this.options.selector)
    this._events = this.options.events.replace(/\s/g, '').split(',')

    this.bindListeners()

    return this
  }

  bindListeners () {
    this.handler = (e) => {
      this.validate(e.target)
    }

    registerEvents(this._fields, this._events, this.handler)
  }

  setPristine (field) {
    emitter.emit('validation:pristine', field)
  }

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

  validateAll () {
    return Array.prototype.map.call(
      this.getFilteredInputs(), this.validate, this
    ).every(validation => validation)
  }

  getFilteredInputs () {
    return Array.prototype.filter.call(
      this.element.querySelectorAll(this.options.selector), this.getValidInputs
    )
  }

  getValidInputs (input) {
    return input.hasAttribute('data-validate')
  }
}

Validation.prototype.rules = rules

/* istanbul ignore next */
$.fn[NAME] = function (options) {
  options = options || {}

  return this.each(function () {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Validation(this, options).init())
    }
  })
}

export default Validation
