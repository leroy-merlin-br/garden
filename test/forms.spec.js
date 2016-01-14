import Forms from '../src/js/forms';

describe('forms spec', () => {
  var formInstance, $fixture;

  before(() => {
    fixture.setBase('test/fixture');
  });

  beforeEach(() => {
    $fixture = $(fixture.load('forms.html')[0]);

    formInstance = new Forms($fixture);
  });

  afterEach(() => {
    fixture.cleanup();
  });

  describe('shouldInputBeActive', () => {
    let input;

    beforeEach(() => {
      input = {};
    });

    it('should return true if the input has no value/placeholder', () => {
      expect(Forms.prototype.shouldInputBeActive(input)).to.be.false;
    });

    it('should return true if the input has value', () => {
      input.value = true;

      expect(Forms.prototype.shouldInputBeActive(input)).to.be.true;
    });

    it('should return true if the input has a placeholder', () => {
      input.placeholder = true;

      expect(Forms.prototype.shouldInputBeActive(input)).to.be.true;
    });
  });

  describe('toggleActiveClass', () => {
    let $field, $input;

    beforeEach(() => {
      $field = $fixture.find('.field');
      $input = $field.find('.input');
    });

    it('should not add the active class on the $field if the $input returns false for @shouldInputBeActive', () => {
      Forms.prototype.toggleActiveClass($input[0]);

      expect($field.hasClass('active')).to.be.false;
    });

    it('should add the active class on the $field if the $input returns true for @shouldInputBeActive', () => {
      $input.val('foo');

      Forms.prototype.toggleActiveClass($input[0]);

      expect($field.hasClass('active')).to.be.true;
    });

    it('should remove the active class on the $field if the $input has the active class and returns false for @shouldInputBeActive', () => {
      $field.addClass('active');

      Forms.prototype.toggleActiveClass($input[0]);

      expect($field.hasClass('active')).to.be.false;
    });
  });

  describe('onFieldChange', () => {
    let $field, $input, customEvent;

    beforeEach(() => {
      $field = $fixture.find('.field');
      $input = $field.find('.input');

      customEvent = {
        target: $input[0]
      };
    });

    it('should call @toggleActiveClass onChange event', sinon.test(function() {
      this.spy(Forms.prototype, 'toggleActiveClass');

      Forms.prototype.onFieldChange(customEvent);

      expect(Forms.prototype.toggleActiveClass.calledOnce).to.be.true;
    }));
  });

  describe('toggleFieldsActiveClass', () => {

    it('should call @toggleActiveClass on each $field', sinon.test(function() {
      this.spy(Forms.prototype, 'toggleActiveClass');

      formInstance.toggleFieldsActiveClass();

      expect(Forms.prototype.toggleActiveClass.called).to.be.true;
    }));
  });
});
