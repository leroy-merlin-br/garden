import $ from 'jquery'

import LazyLoad from 'scripts/components/lazy-load'

describe('LazyLoad spec', () => {
  let instance, $fixture

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    $fixture = $(fixture.load('lazy-load.html')[0])

    instance = new LazyLoad($fixture.find('[data-lazy]'))
  })

  afterEach(() => {
    fixture.cleanup()
    instance.destroy()
  })

  describe('constructor', () => {
    it('should call bindListeners and checkVisiblePlaceholders on init', sinon.test(function() {
      this.spy(instance, 'bindListeners')
      this.spy(instance, 'checkVisiblePlaceholders')

      instance.init()

      expect(instance.bindListeners.calledOnce).to.be.true
      expect(instance.checkVisiblePlaceholders.calledOnce).to.be.true
    }))
  })

  describe('bindListeners', () => {
    it('should create onScrollHandler and bind to $(window).on(scroll)', sinon.test(function() {
      instance.init()

      expect(instance.onScrollHandler).to.be.defined
      expect($._data(window).events.scroll.length).to.equal(1)
    }))
  })

  describe('onScroll', () => {
    it('should call checkVisiblePlaceholders if there are elements to check', sinon.test(function() {
      this.spy(instance, 'checkVisiblePlaceholders')

      instance.$element.length = 1

      instance.onScroll()

      expect(instance.checkVisiblePlaceholders.calledOnce).to.be.true
    }))

    it('should not call checkVisiblePlaceholders if there are no elements to check', sinon.test(function() {
      this.spy(instance, 'checkVisiblePlaceholders')

      delete instance.$element.length

      instance.onScroll()

      expect(instance.checkVisiblePlaceholders.notCalled).to.be.true
      expect($._data(window).events).to.not.be.defined
    }))
  })

  describe('checkPlaceholder', () => {
    it('should call renderImage and if placeholder is visible', sinon.test(function() {
      this.stub(instance, 'isPlaceholderVisible').returns(true)
      this.spy(instance, 'renderImage')

      instance.checkPlaceholder(instance.$element[0])

      expect(instance.renderImage.calledOnce).to.be.true
    }))

    it('should not call renderImage and if placeholder is not visible', sinon.test(function() {
      this.stub(instance, 'isPlaceholderVisible').returns(false)
      this.spy(instance, 'renderImage')

      instance.checkPlaceholder()

      expect(instance.renderImage.notCalled).to.be.true
    }))
  })

  describe('renderImage', () => {
    it ('should call parseBreakpoints if the image is a srcset image', sinon.test(function() {
      this.stub(instance, 'isPlaceholderVisible').returns(true)
      this.spy(instance, 'parseBreakpoints')

      instance.checkPlaceholder(instance.$element[1])

      expect(instance.parseBreakpoints.calledOnce).to.be.true
    }))
  })

  describe('parseBreakpoints', () => {
    it ('should set the [src] attr based on the window width', sinon.test(function() {
      instance.windowWidth = 1000

      expect(instance.parseBreakpoints(document.createElement('div'), 'src/0 0, src/100 100, src/1000 1000').src)
        .to.contain('1000')
    }))
  })
})
