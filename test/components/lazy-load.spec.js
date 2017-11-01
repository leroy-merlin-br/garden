import LazyLoad from '../../src/js/components/lazy-load'
import * as throttle from '../../src/js/utils/throttle'
import triggerEvent from '../../src/js/utils/trigger-event'
import * as removeFromArray from '../../src/js/utils/remove-array-like'

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

  describe('@checkPlaceholder', () => {
    let fakePlaceholder

    beforeEach(() => {
      fakePlaceholder = instance.element[0]
      fakePlaceholder.parentNode.replaceChild = () => {}
    })

    context('when placeholder is visible', () => {
      it('should call @renderImage', sinon.test(function () {
        const spy = this.spy(instance, 'renderImage')
        this.stub(instance, 'isPlaceholderVisible').returns(true)

        instance.checkPlaceholder(fakePlaceholder)

        expect(spy.calledOnce).to.be.true
      }))

      it('should call removeFromArray', sinon.test(function () {
        const spy = this.spy(removeFromArray, 'default')
        this.stub(instance, 'isPlaceholderVisible').returns(true)

        instance.checkPlaceholder(fakePlaceholder)

        expect(spy.calledOnce).to.be.true
      }))
    })

    context('when placeholder is not visible', () => {
      it('should not call @renderImage', sinon.test(function () {
        const spy = this.spy(instance, 'renderImage')
        this.stub(instance, 'isPlaceholderVisible').returns(false)

        instance.checkPlaceholder(fakePlaceholder)

        expect(spy.called).to.be.false
      }))

      it('should not call removeFromArray', sinon.test(function () {
        const spy = this.spy(removeFromArray, 'default')
        this.stub(instance, 'isPlaceholderVisible').returns(false)

        instance.checkPlaceholder(fakePlaceholder)

        expect(spy.called).to.be.false
      }))
    })
  })

  describe('@createImage', () => {
    let fakePlaceholder, fakeImage

    beforeEach(() => {
      fakePlaceholder = document.createElement('div')
      fakeImage = document.createElement('img')
    })

    it('should call @parseAttributes with the placeholder attributes',
      sinon.test(function () {
        const spy = this.spy(instance, 'parseAttributes')

        fakeImage = instance.createImage(fakePlaceholder)

        expect(spy.calledWith(
          fakeImage,
          fakePlaceholder.attributes
        )).to.be.true
      })
    )

    it('should return an image without the data-lazy attribute', () => {
      fakeImage = instance.createImage(fakePlaceholder)

      expect(fakeImage.hasAttribute('data-lazy')).to.be.false
    })

    context('when placeholder has a data-srcset attribute', () => {
      it('should call @parseBreakpoints with the data-srcset attribute value',
        sinon.test(function () {
          const spy = this.spy(instance, 'parseBreakpoints')
          const expectedValue = 'test'

          fakePlaceholder.setAttribute('data-srcset', expectedValue)
          fakeImage = instance.createImage(fakePlaceholder)

          expect(spy.calledWith(
            fakeImage,
            expectedValue
          )).to.be.true
        })
      )
    })

    context('when placeholder does not have a data-srcset attribute', () => {
      it('should not call @parseBreakpoints', sinon.test(function () {
        const spy = this.spy(instance, 'parseBreakpoints')

        fakePlaceholder.removeAttribute('data-srcset')
        fakeImage = instance.createImage(fakePlaceholder)

        expect(spy.called).to.be.false
      }))

      it('should return image with source equal to placeholder data-src attribute value',
        () => {
          const expectedValue = 'test'

          fakePlaceholder.setAttribute('data-src', expectedValue)
          fakeImage = instance.createImage(fakePlaceholder)

          expect(fakeImage.getAttribute('src')).to.equal(expectedValue)
        }
      )
    })
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
    let placeholder

    beforeEach(() => {
      placeholder = instance.element[0]
      placeholder.parentNode.replaceChild = () => {}
    })

    it('should call replaceChild from placeholder.parentNode', sinon.test(function () {
      const stub = this.stub(placeholder.parentNode, 'replaceChild')

      instance.renderImage(placeholder)

      expect(stub.called).to.be.true
    }))

    it('should call @createImage', sinon.test(function () {
      const stub = this.stub(instance, 'createImage')

      instance.renderImage(placeholder)

      expect(stub.called).to.be.true
    }))
  })

  describe('@parseAttributes', () => {
    let image, divAttributes

    beforeEach(() => {
      image = document.createElement('img')
      divAttributes = instance.element[1].attributes
    })

    context('when attribute is equal to one of the default attributes', () => {
      it('should not set [data-lazy] to <image />', () => {
        expect(
          instance.parseAttributes(image, divAttributes).attributes
        ).to.not.have.property('data-lazy')
      })

      it('should not set [data-src] to <image />', () => {
        expect(
          instance.parseAttributes(image, divAttributes).attributes
        ).to.not.have.property('data-src')
      })

      it('should not set [data-srcset] to <image />', () => {
        expect(
          instance.parseAttributes(image, divAttributes).attributes
        ).to.not.have.property('data-srcset')
      })
    })

    context('when attribute is not equal to one of the default attributes', () => {
      it('should set class to <image />', () => {
        expect(
          instance.parseAttributes(image, divAttributes).attributes
        ).to.have.property('class')
      })

      it('should set any attribute to <image /> from <div data-lazy>', () => {
        instance.element[1].setAttribute('data-foo', 'foo')

        expect(
          instance.parseAttributes(image, divAttributes).attributes
        ).to.have.property('data-foo')
      })
    })
  })

  describe('@destroy', () => {
    it('should remove scroll listener from window object',
      sinon.test(function () {
        const spy = this.spy(instance, 'onScrollHandler')

        instance.bindListeners()
        instance.destroy()

        triggerEvent(window, 'scroll')

        expect(spy.called).to.be.false
      })
    )
  })
})
