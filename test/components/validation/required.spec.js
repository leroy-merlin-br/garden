import required from '../../../src/js/components/validation/required'

describe('Validation@required', () => {
  it('should return true if the field has value', () => {
    let field = {
      value: 'foo'
    }

    expect(required(field)).to.be.true
  })

  it('should return false if the field does not have value', () => {
    let field = {
      value: ''
    }

    expect(required(field)).to.be.false
  })

  it('should return true if the field is a checkbox and is checked', () => {
    let field = {
      type: 'checkbox',
      checked: true
    }

    expect(required(field)).to.be.true
  })

  it('should return false if the field is a checkbox and is not checked', () => {
    let field = {
      type: 'checkbox'
    }

    expect(required(field)).to.be.falsy
  })

  it('should return true if the field is a radio and it is selected', () => {
    let field = {
      type: 'radio'
    }

    let form = {
      find: () => ({
        length: true
      })
    }

    expect(required(field, form)).to.be.true
  })

  it('should return false if the field is a radio and there is no radio selected', () => {
    let field = {
      type: 'radio'
    }

    let form = {
      find: () => ({
        length: 0
      })
    }

    expect(required(field, form)).to.be.falsy
  })
})
