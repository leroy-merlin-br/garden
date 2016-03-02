import Validation from '../../src/js/components/validation';
import emitter from '../../src/js/utils/emitter';

describe('Validation spec', () => {
  var validation, $fixture;

  before(() => {
    fixture.setBase('test/fixture');
  });

  beforeEach(() => {
    $fixture = $(fixture.load('validation.html')[0]);

    validation = new Validation($fixture);
  });

  afterEach(() => {
    fixture.cleanup();
  });

  describe('init spec', () => {
    it('should call bindListeners', sinon.test(function() {
      let spy = this.spy(validation, 'bindListeners');

      validation.init();

      expect(spy.calledOnce).to.be.true;
    }));
  });

  describe('bindListeners', () => {
    it('should set validate as a handler for options.events', sinon.test(function() {
      let spy = this.spy(validation, 'validate');

      validation.init();
      validation._fields.first().trigger('blur');

      expect(spy.calledOnce).to.be.true;
    }));
  });

  describe('validate', () => {
    it('should return false if the field has no validations', () => {
      let field = $('<input />')[0];

      expect(Validation.prototype.validate(field)).to.not.be.ok;
    });

    it('should return false if the field has validations, but does not pass on them', () => {
      let field = $('<input data-validate="text" />')[0];

      expect(Validation.prototype.validate(field)).to.not.be.ok;
    });

    it('should return true if the field has one validation, and pass on it', () => {
      let field = $('<input data-validate="text" value="foo"/>')[0];

      expect(Validation.prototype.validate(field)).to.be.ok;
    });

    it('should trigger an emitter event validation:error with validation errors', sinon.test(function() {
      let spy   =  this.spy(emitter, 'emit');
      let field = $('<input data-validate="text minlength" data-minlength="5"/>')[0];

      Validation.prototype.validate(field);

      expect(spy.calledWith('validation:error', field, ['text', 'minlength'])).to.be.true;
    }));

    it('should trigger an emitter event validation:success with no validation errors', sinon.test(function() {
      let spy   =  this.spy(emitter, 'emit');
      let field = $('<input data-validate="text" value="foo"/>')[0];

      Validation.prototype.validate(field);

      expect(spy.calledWith('validation:success', field, [])).to.be.true;
    }));
  });
});
