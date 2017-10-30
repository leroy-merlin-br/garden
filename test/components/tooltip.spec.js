import Tooltip from '../../src/js/components/tooltip'
import Popper from 'popper.js'
import $ from 'jquery'

describe('Tooltip component', () => {
  let instance, $fixture, options

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    $fixture = fixture.load('tooltip.html')[0]
    instance = new Tooltip($fixture)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('@init', () => {
    it('should return the instance itself', () => {
      expect(instance.init()).to.be.equal(instance)
    })

    it('should call @registerComponent', sinon.test(function () {
      const stub = this.stub(instance, 'registerComponent')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@getTarget', () => {
    it('should return the target element described in data-tooltip', () => {
      const result = instance.getTarget()
      expect(result[0].innerText).to.have.string('Sample tooltip')
    })
  })

  describe('@buildPopper', () => {
    it('should create and return a new Popper instance', () => {
      const popperInstance = instance.buildPopper()

      expect(popperInstance).to.be.an.instanceof(Popper)
    })
  })

  describe('@registerComponent', () => {
    it('should save popper instance in instance.element.attributes', () => {
      instance
        .init()
        .registerComponent()

      const { component } = instance.element.attributes

      expect(component).to.be.an.instanceof(Popper)
    })
  })
})
