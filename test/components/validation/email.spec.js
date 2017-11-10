import email from '../../../src/js/components/validation/email'

describe('Validation@email', () => {
  let field

  beforeEach(() => {
    field = document.createElement('input')
  })

  it('should return true if the field value is a valid email', () => {
    field.setAttribute('value', 'foo@foo.com')

    expect(email(field)).to.be.true
  })

  it('should return false if the field is not a valid email', () => {
    field.setAttribute('value', 'foo.com')

    expect(email(field)).to.be.false
  })
})
