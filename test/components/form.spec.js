import Form from '../../src/js/components/form'

describe('Form component', () => {
  var instance, fixtureElement

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    fixtureElement = fixture.load('form.html')[0]

    instance = new Form(fixtureElement)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('@shouldInputBeActive', () => {
    let inputElement

    beforeEach(() => {
      inputElement = fixtureElement.querySelectorAll('.input')[0]
    })

    it('should return false if the input has no value', () => {
      expect(instance.shouldInputBeActive(inputElement)).to.be.false
    })

    it('should return true if the input has value', () => {
      inputElement.value = true

      expect(instance.shouldInputBeActive(inputElement)).to.be.true
    })

    context('when input is select field', () => {
      beforeEach(() => {
        inputElement = fixtureElement.querySelectorAll('.select')[0]
      })

      it('should return false if the option selected has no textContent', () => {
        expect(instance.shouldInputBeActive(inputElement)).to.be.false
      })

      it('should return true if the option selected has textContent', () => {
        inputElement.options[inputElement.selectedIndex].text = true

        expect(instance.shouldInputBeActive(inputElement)).to.be.true
      })
    })
  })

  describe('@toggleActiveClass', () => {
    let fieldElement, inputElement

    beforeEach(() => {
      fieldElement = fixtureElement.querySelectorAll('.field')[0]
      inputElement = fieldElement.querySelectorAll('.input')[0]
    })

    it('should not @shouldInputBeActive if the parent hasn\'t a .field class ', sinon.test(function () {
      this.spy(instance, 'shouldInputBeActive')

      fieldElement.classList.remove('field')

      instance.toggleActiveClass(inputElement)

      expect(instance.shouldInputBeActive.notCalled).to.be.true
    }))

    it('should not add the active class on the fieldElement if the inputElement returns false for @shouldInputBeActive', () => {
      instance.toggleActiveClass(inputElement)

      expect(fieldElement.classList.contains('active')).to.be.false
    })

    it('should add the active class on the fieldElement if the inputElement returns true for @shouldInputBeActive', () => {
      inputElement.value = true

      instance.toggleActiveClass(inputElement)

      expect(fieldElement.classList.contains('active')).to.be.true
    })

    it('should remove the active class on the fieldElement if the inputElement has the active class and returns false for @shouldInputBeActive', () => {
      fieldElement.classList.add('active')

      instance.toggleActiveClass(inputElement)

      expect(fieldElement.classList.contains('active')).to.be.false
    })
  })

  describe('@toggleFieldsActiveClass', () => {
    it('should call @toggleActiveClass on each fieldElement', sinon.test(function () {
      this.spy(instance, 'toggleActiveClass')

      instance.toggleFieldsActiveClass()

      expect(instance.toggleActiveClass.called).to.be.true
    }))
  })
})
