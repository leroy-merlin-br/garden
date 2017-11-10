import minlength from '../../../src/js/components/validation/minlength'

describe('Validation@minlength', () => {
  let field

  beforeEach(() => {
    field = document.createElement('input')
    field.setAttribute('value', 'foo')
  })

  it('should return true if the field has minlength greater than the required', () => {
    field.setAttribute('data-minlength', 2)

    expect(minlength(field)).to.be.true
  })

  it('should return true if the field has minlength equal than the required', () => {
    field.setAttribute('data-minlength', 3)

    expect(minlength(field)).to.be.true
  })

  it('should return false if the field has minlength lower than the required', () => {
    field.setAttribute('value', 'f')
    field.setAttribute('data-minlength', 2)

    expect(minlength(field)).to.be.false
  })
})
