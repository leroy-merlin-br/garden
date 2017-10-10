import Tooltip from '../../src/js/components/tooltip'
import Popper from 'popper.js'
import $ from 'jquery'

describe('Tooltip spec', () => {
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

  describe('init', () => {
    it('should return the instance itself', () => {
      expect(instance.init()).to.be.equal(instance)
    })

    it('should register the popper instance on the element', () => {
      instance.init()

      expect($(instance.element).data('popper')).to.be.an.instanceof(Popper)
    })
  })

  describe('_getTarget', () => {
    it('should return the target element described in data-tooltip', () => {
      const result = instance._getTarget()
      expect(result[0].innerText).to.have.string('Sample tooltip')
    })
  })

  describe('_buildPopper', () => {
    it('should create and return a new Popper instance', () => {
      const result = instance._buildPopper()
      expect(result).to.be.an.instanceof(Popper)
    })
  })
})
