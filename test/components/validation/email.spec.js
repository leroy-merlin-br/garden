import email from '../../../src/js/components/validation/email'

describe('Validation@email', () => {
  it('should return true if the field value is a valid email', () => {
    let field = {
      value: 'foo@foo.com'
    }

    expect(email(field)).to.be.true
  })

  it('should return false if the field is not a valid email', () => {
    let field = {
      value: 'foo.com'
    }

    expect(email(field)).to.be.false
  })
})
