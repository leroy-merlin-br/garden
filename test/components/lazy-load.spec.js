import LazyLoad from '../../src/js/components/lazy-load';

describe('LazyLoad spec', () => {
  let lazyLoad, $fixture;

  before(() => {
    fixture.setBase('test/fixture');
  });

  beforeEach(() => {
    $fixture = $(fixture.load('lazy-load.html')[0]);

    lazyLoad = new LazyLoad($fixture.find('[data-lazy]'));
  });

  afterEach(() => {
    fixture.cleanup();
    lazyLoad.destroy();
  });

  describe('constructor', () => {
    it('should call bindListeners and checkVisiblePlaceholders on init', sinon.test(function() {
      this.spy(lazyLoad, 'bindListeners');
      this.spy(lazyLoad, 'checkVisiblePlaceholders');

      lazyLoad.init();

      expect(lazyLoad.bindListeners.calledOnce).to.be.true;
      expect(lazyLoad.checkVisiblePlaceholders.calledOnce).to.be.true;
    }));
  });

  describe('bindListeners', () => {
    it('should create onScrollHandler and bind to $(window).on(scroll)', sinon.test(function() {
      lazyLoad.init();

      expect(lazyLoad.onScrollHandler).to.be.defined;
      expect($._data(window).events.scroll.length).to.equal(1);
    }));
  });

  describe('onScroll', () => {
    it('should call checkVisiblePlaceholders if there are elements to check', sinon.test(function() {
      this.spy(lazyLoad, 'checkVisiblePlaceholders');

      lazyLoad._element.length = 1;

      lazyLoad.onScroll();

      expect(lazyLoad.checkVisiblePlaceholders.calledOnce).to.be.true;
    }));

    it('should not call checkVisiblePlaceholders if there are no elements to check', sinon.test(function() {
      this.spy(lazyLoad, 'checkVisiblePlaceholders');

      delete lazyLoad._element.length;

      lazyLoad.onScroll();

      expect(lazyLoad.checkVisiblePlaceholders.notCalled).to.be.true;
      expect($._data(window).events).to.not.be.defined;
    }));
  });

  describe('checkPlaceholder', () => {
    it('should call renderImage and if placeholder is visible', sinon.test(function() {
      this.stub(lazyLoad, 'isPlaceholderVisible').returns(true);
      this.spy(lazyLoad, 'renderImage');

      lazyLoad.checkPlaceholder(lazyLoad._element[0]);

      expect(lazyLoad.renderImage.calledOnce).to.be.true;
    }));

    it('should not call renderImage and if placeholder is not visible', sinon.test(function() {
      this.stub(lazyLoad, 'isPlaceholderVisible').returns(false);
      this.spy(lazyLoad, 'renderImage');

      lazyLoad.checkPlaceholder();

      expect(lazyLoad.renderImage.notCalled).to.be.true;
    }));
  });

  describe('renderImage', () => {
    it ('should call parseBreakpoints if the image is a srcset image', sinon.test(function() {
      this.stub(lazyLoad, 'isPlaceholderVisible').returns(true);
      this.spy(lazyLoad, 'parseBreakpoints');

      lazyLoad.checkPlaceholder(lazyLoad._element[1]);

      expect(lazyLoad.parseBreakpoints.calledOnce).to.be.true;
    }));
  });

  describe('parseBreakpoints', () => {
    it ('should set the [src] attr based on the window width', sinon.test(function() {
      lazyLoad.windowWidth = 1000;

      expect(lazyLoad.parseBreakpoints(document.createElement('div'), 'src/0 0, src/100 100, src/1000 1000').src)
        .to.contain('1000');
    }));
  });
});
