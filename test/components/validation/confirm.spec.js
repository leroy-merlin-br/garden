import confirm from '../../../src/js/components/validation/confirm'

describe('Validation@confirm', () => {
  it('should return true if the field value matches the confirm field value', () => {
    let field = {
      value: 'foo',
      getAttribute: () => {}
    }

    let form = {
      find: () => ({
        val: () => 'foo'
      })
    }

    expect(confirm(field, form)).to.be.true
  })

  it('should return false if the field value does not matches the confirm field value', () => {
    let field = {
      value: '',
      getAttribute: () => {}
    }

    let form = {
      find: () => ({
        val: () => 'bar'
      })
    }

    expect(confirm(field, form)).to.be.false
  })
})
