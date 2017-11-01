import LazyLoad from '../../src/js/components/lazy-load'
import * as throttle from '../../src/js/utils/throttle'
import triggerEvent from '../../src/js/utils/trigger-event'

describe('LazyLoad spec', () => {
  let instance, fixtureElement

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    fixtureElement = fixture.load('lazy-load.html')[0]
    instance = new LazyLoad(fixtureElement.querySelectorAll('[data-lazy]'))
  })

  afterEach(() => {
    fixture.cleanup()
    instance.destroy()
  })

  describe('constructor', () => {
    it('should create instance.element', () => {
      expect(instance.element).to.exist
    })

    it('should create instance.options', () => {
      expect(instance.options).to.exist
    })
  })

  describe('@init', () => {
    it('should call @bindListeners', sinon.test(function () {
      const stub = this.stub(instance, 'bindListeners')
      this.stub(instance, 'checkVisiblePlaceholders')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))

    it('shoudl call @checkVisiblePlaceholders', sinon.test(function () {
      const stub = this.stub(instance, 'checkVisiblePlaceholders')
      this.stub(instance, 'bindListeners')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@onScrollHandler', () => {
    it('should call throttle util', sinon.test(function () {
      const stub = this.stub(throttle, 'default')

      instance.onScrollHandler()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@bindListeners', () => {
    it('should call window.addEventListener', sinon.test(function () {
      const stub = this.stub(window, 'addEventListener')

      instance.bindListeners()

      expect(stub.calledOnce).to.be.true
    }))

    context('when scroll event is triggered', () => {
      it('should call @onScrollHandler', sinon.test(function () {
        const stub = this.stub(instance, 'onScrollHandler')

        instance.bindListeners()
        triggerEvent(window, 'scroll')

        expect(stub.calledOnce).to.be.true
      }))
    })
  })

  describe('@onScroll', () => {
    context('when element has length', () => {
      it('should call @checkVisiblePlaceholders', sinon.test(function () {
        const stub = this.stub(instance, 'checkVisiblePlaceholders')

        instance.onScroll()

        expect(stub.calledOnce).to.be.true
      }))
    })

    context('when element does not have length', () => {
      it('should remove scroll event from window', sinon.test(function () {
        const stub = this.stub(instance, 'onScrollHandler')

        instance.element = ''
        instance.onScroll()

        triggerEvent(window, 'scroll')

        expect(stub.calledOnce).to.be.not.true
      }))
    })
  })

  describe('@checkVisiblePlaceholders', () => {
    it('should add a windowHeight property to instance object', () => {
      instance.checkVisiblePlaceholders()

      expect(instance).to.have.property('windowHeight')
    })

    it('should add a windowWidth property to instance object', () => {
      instance.checkVisiblePlaceholders()

      expect(instance).to.have.property('windowWidth')
    })

    it('should call @checkPlaceholder', sinon.test(function () {
      const stub = this.stub(instance, 'checkPlaceholder')

      instance.checkVisiblePlaceholders()

      expect(stub.called).to.be.true
    }))
  })

  describe('@isPlaceholderVisible', () => {
    context('when placeholder parameter is valid', () => {
      it('should call placeholder.getBoundingClientRect', sinon.test(function () {
        const placeholder = instance.element[0]
        const stub = this.stub(placeholder, 'getBoundingClientRect').returns({ top: 1 })

        instance.isPlaceholderVisible(placeholder)

        expect(stub.called).to.be.true
      }))
    })

    context('when placeholder parameter is not valid', () => {
      it('should return false', sinon.test(function () {
        expect(instance.isPlaceholderVisible('abc123')).to.be.false
      }))
    })
  })

  describe('@renderImage', () => {
    it('should call @createImage', sinon.test(function () {
      const spy =  this.spy(instance, 'createImage')
      instance.renderImage(instance.element[0])

      expect(spy.calledOnce).to.be.true
    }))
  })
})
