import $ from 'jquery'
import Validation from '../../src/js/components/validation'

import emitter from '../../src/js/utils/emitter'
import triggerEvent from '../../src/js/utils/trigger-event'

describe('Validation spec', () => {
  var instance, fixtureElement

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    fixtureElement = fixture.load('validation.html')[0]

    instance = new Validation(fixtureElement)
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

      triggerEvent(instance._fields[0], 'blur')

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
    let field

    beforeEach(() => {
      field = document.createElement('input')
    })

    it('should return false if the field has no validations', () => {
      expect(Validation.prototype.validate(field)).to.be.falsy
    })

    it('should return false if the field has validations, but does not pass on them', () => {
      field.setAttribute('data-validate', 'required')

      expect(Validation.prototype.validate(field)).to.be.falsy
    })

    it('should return true if the field has one validation, and pass on it', () => {
      field.setAttribute('data-validate', 'required')
      field.setAttribute('value', 'foo')

      expect(Validation.prototype.validate(field)).to.be.ok
    })

    it('should trigger an emitter event validation:error with validation errors', sinon.test(function () {
      let spy = this.spy(emitter, 'emit')

      field.setAttribute('data-validate', 'required minlength')
      field.setAttribute('data-minlength', '5')

      Validation.prototype.validate(field)

      expect(spy.calledWith('validation:error', field, ['required', 'minlength'])).to.be.true
    }))

    it('should trigger an emitter event validation:success with no validation errors', sinon.test(function () {
      let spy = this.spy(emitter, 'emit')

      field.setAttribute('data-validate', 'required')
      field.setAttribute('value', 'foo')

      Validation.prototype.validate(field)

      expect(spy.calledWith('validation:success', field, [])).to.be.true
    }))
  })

  describe('validateAll', () => {
    beforeEach(() => {
      instance.init()
    })

    it('should validate all fields and return false if there is an invalid field', () => {
      const targetField = instance._fields[0]

      targetField.setAttribute('data-validate', 'required')
      targetField.setAttribute('value', '')

      expect(instance.validateAll()).to.be.false
    })

    it('should validate all fields and return true if there is no invalid field', () => {
      Array.prototype.forEach.call(instance._fields, field => {
        field.setAttribute('value', 'foo')
      })

      expect(instance.validateAll()).to.be.true
    })
  })

  describe('@getFilteredInputs', () => {
    context('when there are inputs without the data-validate attribute', () => {
      it('should remove them from the object returned', () => {
        const targetInput = instance.element.querySelectorAll('#foo')[0]
        let inputs, invalidInputs

        targetInput.removeAttribute('data-validate')

        inputs = instance.getFilteredInputs()

        invalidInputs = inputs.filter((input) => !input.hasAttribute('data-validate'))

        expect(invalidInputs).to.be.empty
      })
    })

    context('when there are inputs with the data-validate attribute', () => {
      it('should include them in the object returned', () => {
        const targetId = 'foo'
        const targetInput = instance.element.querySelectorAll(`#${targetId}`)[0]
        let inputs, hasTargetInput

        targetInput.setAttribute('data-validate')

        inputs = instance.getFilteredInputs()

        inputs.forEach(input => {
          if (input.getAttribute('id') === targetInput) {
            hasTargetInput = true
          }
        })

        expect(hasTargetInput).to.be.truthy
      })
    })
  })
})
