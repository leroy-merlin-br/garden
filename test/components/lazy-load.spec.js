import LazyLoad from '../../src/js/components/lazy-load'
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

  // describe('@onScrollHandler', () => {
  //   it('should call @onScroll', sinon.test(function () {
  //     const stub = this.spy(instance, 'onScroll')

  //     instance.onScrollHandler()
  //     this.clock.tick(instance.options.throttle)

  //     console.log(instance.options.throttle)

  //     expect(stub.calledOnce).to.be.true
  //   }))
  // })

  describe('@onScroll', () => {
    context('if element has length', () => {
      it('should call @checkVisiblePlaceholders', sinon.test(function (){
        const stub = this.stub(instance, 'checkVisiblePlaceholders')

        instance.onScroll()

        expect(stub.calledOnce).to.be.true
      }))
    })
    context('if element dont have length', () => {
      it('should remove scroll event from of window', sinon.test(function () {
        const stub = this.stub(instance, 'onScrollHandler')

        instance.element = ''
        instance.onScroll()

        triggerEvent(window, 'scroll')

        expect(stub.calledOnce).to.be.not.true
      }))
    })
  })

  describe('@checkVisiblePlaceholders', () => {

    it('should have a windowHeight property', () => {

      instance.checkVisiblePlaceholders()

      expect(instance).to.have.property('windowHeight')

    })

    it('should have a windowWidth property', () => {

      instance.checkVisiblePlaceholders()

      expect(instance).to.have.property('windowWidth')

    })

    it('should call @checkPlaceholder', sinon.test(function() {

      const spy = this.spy(instance, 'isPlaceholderVisible')

      instance.checkVisiblePlaceholders()

      expect(spy.calledWith(instance.element[0])).to.be.true

    }))

  })

  describe('@isPlaceholderVisible', () =>{
    context('when placeholder parameter', () =>{
      it('is valid', sinon.test(function(){

        const spy = this.spy(instance, 'isPlaceholderVisible')

        expect(spy.calledWith(instance.element[0])).to.be.truthy

      }))

      it('if not valid', sinon.test(function() {

        const spy = this.stub(instance, 'isPlaceholderVisible')

        expect(spy.calledWith('not valid value')).to.equal(false)
      }))

    })
  })

  describe('@renderImage', () => {

    context('when call @renderImage', () => {

      it('if don\'t send placeholder parameter', sinon.test(function(){
        const spy = this.spy(instance, 'renderImage')

        expect(spy.calledOnce).to.be.false
      }))

      it('should call @createImage', sinon.test(function() {
        const spy =  this.spy(instance, 'createImage')

        instance.renderImage(instance.element[0])

        expect(spy.calledOnce).to.be.true
      }))

    })
  })

})
