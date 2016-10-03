import $ from 'jquery'
import Validation from '../../src/js/components/validation'
import emitter from '../../src/js/utils/emitter'

describe('Validation spec', () => {
  var instance, $fixture

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    $fixture = $(fixture.load('validation.html')[0])

    instance = new Validation($fixture)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('init spec', () => {
    it('should call bindListeners', sinon.test(function () {
      let spy = this.spy(instance, 'bindListeners')

      instance.init()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('bindListeners', () => {
    it('should set validate as a handler for options.events', sinon.test(function () {
      let spy = this.spy(instance, 'validate')

      instance.init()
      instance._fields.first().trigger('blur')

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('@setPristine', () => {
    it('should call emitter validation:pristine', sinon.test(function () {
      const stub = this.stub(emitter, 'emit')

      Validation.prototype.setPristine()

      expect(stub.calledWith('validation:pristine')).to.be.true
    }))
  })

  describe('validate', () => {
    it('should return false if the field has no validations', () => {
      let field = $('<input />')[0]

      expect(Validation.prototype.validate(field)).to.be.falsy
    })

    it('should return false if the field has validations, but does not pass on them', () => {
      let field = $('<input data-validate="required" />')[0]

      expect(Validation.prototype.validate(field)).to.be.falsy
    })

    it('should return true if the field has one validation, and pass on it', () => {
      let field = $('<input data-validate="required" value="foo"/>')[0]

      expect(Validation.prototype.validate(field)).to.be.ok
    })

    it('should trigger an emitter event validation:error with validation errors', sinon.test(function () {
      let spy = this.spy(emitter, 'emit')
      let field = $('<input data-validate="required minlength" data-minlength="5"/>')[0]

      Validation.prototype.validate(field)

      expect(spy.calledWith('validation:error', field, ['required', 'minlength'])).to.be.true
    }))

    it('should trigger an emitter event validation:success with no validation errors', sinon.test(function () {
      let spy = this.spy(emitter, 'emit')
      let field = $('<input data-validate="required" value="foo"/>')[0]

      Validation.prototype.validate(field)

      expect(spy.calledWith('validation:success', field, [])).to.be.true
    }))
  })

  describe('validateAll', () => {
    it('should validate all fields and return false if there is an invalid field', () => {
      instance.init()

      expect(instance.validateAll()).to.be.false
    })

    it('should validate all fields and return true if there is no invalid field', () => {
      instance.init()

      instance._fields.last().val('foo')

      expect(instance.validateAll()).to.be.true
    })
  })
})
