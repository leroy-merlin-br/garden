import $ from 'jquery'
import Popper from 'popper.js'

import Tooltip from 'scripts/components/tooltip'

describe('Tooltip spec', () => {
  let instance, $fixture, options

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    $fixture = $(fixture.load('tooltip.html')[0])
    instance = new Tooltip($fixture)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('init', () => {
    it('should return the instance itself', sinon.test(function () {
      const stub = this.stub(instance, '_buildPopper')
      instance.init()
      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('_getTarget', () => {
    it('should return the target element described in data-tooltip', () => {
      const result = instance._getTarget()
      expect(result.text()).to.have.string('Sample tooltip')
    })
  })

  describe('_buildPopper', () => {
    it('should create and return a new Popper instance', () => {
      const result = instance._buildPopper()
      expect(result).to.be.an.instanceof(Popper)
    })
  })
})
