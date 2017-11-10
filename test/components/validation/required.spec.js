import required from '../../../src/js/components/validation/required'

describe('Validation@required', () => {
  let form, field

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    form = fixture.load('validation/required.html')[0]
    field = form.querySelector('input')
  })

  afterEach(() => {
    fixture.cleanup()
  })

  it('should return true if the field has value', () => {
    field.value = 'foo'

    expect(required(field)).to.be.true
  })

  it('should return false if the field does not have value', () => {
    field.value = ''

    expect(required(field)).to.be.false
  })

  it('should return true if the field is a checkbox and is checked', () => {
    field.type = 'checkbox'
    field.checked = true

    expect(required(field)).to.be.true
  })

  it('should return false if the field is a checkbox and is not checked', () => {
    field.type = 'checkbox'

    expect(required(field)).to.be.false
  })

  it('should return true if the field is a radio and it is selected', () => {
    field.type = 'radio'
    field.checked = true

    expect(required(field, form)).to.be.true
  })

  it('should return false if the field is a radio and there is no radio selected', () => {
    field.type = 'radio'

    expect(required(field, form)).to.be.false
  })
})
