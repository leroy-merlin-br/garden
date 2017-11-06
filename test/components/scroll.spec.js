import * as jump from 'jump.js'
import { Scroll } from '../../src/js/components/scroll'

describe('Scroll component', () => {
  let instance, fixtureElement

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    fixtureElement = fixture.load('scroll.html')[0]
    instance = new Scroll(fixtureElement)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  beforeEach(() => {
    instance = new Scroll(fixtureElement)
  })

  describe('@init', () => {
    it('should call instance.scrollToElement', sinon.test(function () {
      const stub = this.stub(instance, 'scrollToElement')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))

    it('should call instance.registerComponent', sinon.test(function () {
      const stub = this.stub(instance, 'registerComponent')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@scrollToElement', () => {
    it('should call jump.js plugin', sinon.test(function () {
      const stub = this.stub(jump, 'default')

      instance.scrollToElement()

      expect(stub.calledOnce).to.be.true
    }))

    it('should pass element and options to jump.js', sinon.test(function () {
      const stub = this.stub(jump, 'default')
      const { element, options } = instance

      instance.scrollToElement()

      expect(stub.calledWith(element, options)).to.be.true
    }))
  })
})
