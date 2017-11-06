import Jump from 'jump.js'
import { Scroll } from '../../src/js/components/scroll'

describe('Scroll component', () => {
  let instance, $fixture

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    $fixture = fixture.load('scroll.html')[0]
    instance = new Scroll($fixture)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  beforeEach(() => {
    instance = new Scroll($fixture)
  })

  describe('@init', () => {
    it('should call instance.jumpElement', sinon.test(function () {
      const stub = this.stub(instance, 'jumpElement')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))

    it('should call instance.registerComponent', sinon.test(function () {
      const stub = this.stub(instance, 'registerComponent')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@jumpElement', () => {
    it('should instance Jump.js', () => {
      instance.jumpElement()

      const { scroll } = instance

      expect(scroll).to.be.instanceof(Jump)
    })
  })
})
