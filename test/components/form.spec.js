import Form from '../../src/js/components/form';

describe('form spec', () => {
  var instance, $fixture;

  before(() => {
    fixture.setBase('test/fixture');
  });

  beforeEach(() => {
    $fixture = $(fixture.load('form.html')[0]);

    instance = new Form($fixture);
  });

  afterEach(() => {
    fixture.cleanup();
  });

  describe('shouldInputBeActive', () => {
    let $input;

    beforeEach(() => {
      $input = $fixture.find('.input');
    });

    it('should return false if the input has no value', () => {
      expect(Form.prototype.shouldInputBeActive($input)).to.be.false;
    });

    it('should return true if the input has value', () => {
      $input.val(true);

      expect(Form.prototype.shouldInputBeActive($input)).to.be.true;
    });

    context('when input is select field', () => {
      beforeEach(() => {
        $input = $fixture.find('.select');
      });

      it('should return false if the option selected has no textContent', () => {
        expect(Form.prototype.shouldInputBeActive($input)).to.be.false;
      });

      it('should return true if the option selected has textContent', () => {
        $input.find('option:selected').text('true');

        expect(Form.prototype.shouldInputBeActive($input)).to.be.true;
      });
    });
  });

  describe('toggleActiveClass', () => {
    let $field, $input;

    beforeEach(() => {
      $field = $fixture.find('.field');
      $input = $field.find('.input');
    });

    it('should not @shouldInputBeActive if the parent hasn\'t a .field class ', sinon.test(function() {
      this.spy(Form.prototype, 'shouldInputBeActive');

      $field.removeClass('field');

      Form.prototype.toggleActiveClass($input[0]);

      expect(Form.prototype.shouldInputBeActive.notCalled).to.be.true;
    }));

    it('should not add the active class on the $field if the $input returns false for @shouldInputBeActive', () => {
      Form.prototype.toggleActiveClass($input[0]);

      expect($field.hasClass('active')).to.be.false;
    });

    it('should add the active class on the $field if the $input returns true for @shouldInputBeActive', () => {
      $input.val('foo');

      Form.prototype.toggleActiveClass($input[0]);

      expect($field.hasClass('active')).to.be.true;
    });

    it('should remove the active class on the $field if the $input has the active class and returns false for @shouldInputBeActive', () => {
      $field.addClass('active');

      Form.prototype.toggleActiveClass($input[0]);

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
      this.spy(Form.prototype, 'toggleActiveClass');

      Form.prototype.onFieldChange(customEvent);

      expect(Form.prototype.toggleActiveClass.calledOnce).to.be.true;
    }));
  });

  describe('toggleFieldsActiveClass', () => {

    it('should call @toggleActiveClass on each $field', sinon.test(function() {
      this.spy(Form.prototype, 'toggleActiveClass');

      instance.toggleFieldsActiveClass();

      expect(Form.prototype.toggleActiveClass.called).to.be.true;
    }));
  });
});
