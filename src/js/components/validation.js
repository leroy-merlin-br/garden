import emitter from '../utils/emitter';

import rules from './validation/defaults';

export default (($) => {
  const NAME     = 'validation';
  const DEFAULTS = {
    events: 'blur',
    selector: '[data-required]'
  };

  class Validation {
    constructor(element, options) {
      this._element = element;
      this._options = $.extend({}, DEFAULTS, (options || {}));
    }

    init() {
      this._fields = this._element.find(this._options.selector);

      this.bindListeners();
    }

    bindListeners() {
      this.handler = (e) => {
        this.validate(e.target);
      };

      this._fields.off(this._options.events, this.handler);
      this._fields.on(this._options.events, this.handler);
    }

    validate(field) {
      let rules  = field.getAttribute('data-validate');

      if (!rules) {
        return;
      }

      rules = rules.split(' ').reduce((errors, rule) => {
        if (!this.rules[rule].call(this, field, this._element)) {
          errors.push(rule);
        }

        return errors;
      }, []);

      emitter.emit(`validation:${!rules.length ? 'success' : 'error'}`, field, rules);

      return !rules.length;
    }

    validateAll() {
      return Array.prototype.map.call(this._fields, this.validate, this).every(validation => validation);
    }
  }

  Validation.prototype.rules = rules;

  /* istanbul ignore next */
  $.fn[NAME] = function(options) {
    options = options || {};

    return this.each(function() {
      if (!$.data(this, NAME)) {
        $.data(this, NAME, new Validation(this, options).init());
      }
    });
  };

  return Validation;

})(jQuery);
