export default (($) => {
  const NAME      = 'form';
  const SELECTORS = '.input, select, .select, .textarea';

  class Forms {
    constructor(element) {
      this._element = element;

      this.listeners();

      this.toggleFieldsActiveClass();
    }

    listeners() {
      this._element.on('change', SELECTORS, this.onFieldChange.bind(this));
    }

    onFieldChange(event) {
      this.toggleActiveClass(event.target);
    }

    shouldInputBeActive(input) {
      return !!(input.value || input.placeholder);
    }

    toggleActiveClass(input) {
      let $input = $(input),
        $field = $input.parents('.field');

      if (!$field.hasClass('active') && this.shouldInputBeActive(input)) {
        return $field.addClass('active');
      }

      if ($field.hasClass('active') && !this.shouldInputBeActive(input)) {
        return $field.removeClass('active');
      }
    }

    toggleFieldsActiveClass() {
      Array.prototype.forEach.call(
        this._element.find(SELECTORS),
        this.toggleActiveClass.bind(this)
      );
    }
  }

  /* istanbul ignore next */
  $.fn[NAME] = function(options) {
    options = options || {};

    return this.each(function() {
      if (!$.data(this, Forms)) {
        $.data(this, Forms, new Forms(this, options));
      }
    });
  };

  return Forms;
})(jQuery);
