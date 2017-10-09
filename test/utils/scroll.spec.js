import scroll from '../../src/js/utils/scroll'
import Jump from 'jump.js'

describe('scroll spec', () => {
  let element, instance

  beforeEach(() => {
    element = document.createElement('div')
    instance = scroll(element, { duration: 500, offset: -30 })
  })

  it('should be an instance of Jump', () => {
    expect(instance).to.be.an.instanceof(Jump)
  })
})
