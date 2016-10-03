import minlength from '../../../src/js/components/validation/minlength'

describe('validation:minlength', () => {
  it('should return true if the field has minlength greater than the required', () => {
    let field = {
      value: 'foo',
      getAttribute: () => 2
    }

    expect(minlength(field)).to.be.true
  })

  it('should return true if the field has minlength equal than the required', () => {
    let field = {
      value: 'foo',
      getAttribute: () => 3
    }

    expect(minlength(field)).to.be.true
  })

  it('should return false if the field has minlength lower than the required', () => {
    let field = {
      value: 'f',
      getAttribute: () => 2
    }

    expect(minlength(field)).to.be.false
  })
})
