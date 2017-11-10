import maxlength from '../../../src/js/components/validation/maxlength'

describe('Validation@maxlength', () => {
  let field

  beforeEach(() => {
    field = document.createElement('input')
    field.setAttribute('value', 'foo')
  })

  it('should return true if the field has maxlength lower than the required', () => {
    field.setAttribute('maxlength', 4)

    expect(maxlength(field)).to.be.true
  })

  it('should return true if the field has maxlength equal than the required', () => {
    field.setAttribute('maxlength', 3)

    expect(maxlength(field)).to.be.true
  })

  it('should return false if the field has maxlength greater than the required', () => {
    field.setAttribute('maxlength', 2)

    expect(maxlength(field)).to.be.false
  })
})
