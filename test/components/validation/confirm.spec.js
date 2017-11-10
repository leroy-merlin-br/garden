import confirm from '../../../src/js/components/validation/confirm'

describe('Validation@confirm', () => {
  let form, field

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    form = fixture.load('validation/confirm.html')[0]
    field = form.querySelector('[data-confirm]')
  })

  afterEach(() => {
    fixture.cleanup()
  })

  it('should return true if the field value matches the confirm field value', () => {
    expect(confirm(field, form)).to.be.true
  })

  it('should return false if the field value does not matches the confirm field value', () => {
    field.setAttribute('value', 'foo')

    expect(confirm(field, form)).to.be.false
  })
})
