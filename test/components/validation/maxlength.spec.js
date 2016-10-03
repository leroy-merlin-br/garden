import maxlength from '../../../src/js/components/validation/maxlength'

describe('validation:maxlength', () => {
  it('should return true if the field has maxlength lower than the required', () => {
    let field = {
      value: 'foo',
      getAttribute: () => 4
    }

    expect(maxlength(field)).to.be.true
  })

  it('should return true if the field has maxlength equal than the required', () => {
    let field = {
      value: 'foo',
      getAttribute: () => 3
    }

    expect(maxlength(field)).to.be.true
  })

  it('should return false if the field has maxlength greater than the required', () => {
    let field = {
      value: 'foo',
      getAttribute: () => 2
    }

    expect(maxlength(field)).to.be.false
  })
})
