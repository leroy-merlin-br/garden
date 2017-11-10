import required from '../../../src/js/components/validation/required'

describe('Validation@required', () => {
  let form, field

  beforeEach(() => {
    form = document.createElement('form')
    field = document.createElement('input')

    form.appendChild(field)
  })

  it('should return true if the field has value', () => {
    field.setAttribute('value', 'foo')

    expect(required(field)).to.be.true
  })

  it('should return false if the field does not have value', () => {
    field.setAttribute('value', '')

    expect(required(field)).to.be.false
  })

  it('should return true if the field is a checkbox and is checked', () => {
    field.setAttribute('type', 'checkbox')
    field.setAttribute('checked', true)

    expect(required(field)).to.be.true
  })

  it('should return false if the field is a checkbox and is not checked', () => {
    field.setAttribute('type', 'checkbox')

    expect(required(field)).to.be.false
  })

  it('should return true if the field is a radio and it is selected', () => {
    field.setAttribute('type', 'radio')
    field.setAttribute('name', 'tests')
    field.setAttribute('checked', true)

    expect(required(field, form)).to.be.true
  })

  it('should return false if the field is a radio and there is no radio selected', () => {
    field.setAttribute('type', 'radio')

    expect(required(field, form)).to.be.false
  })
})
