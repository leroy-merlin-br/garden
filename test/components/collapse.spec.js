import Collapse from '../../src/js/components/collapse';

describe('collapse spec', () => {
  var instance, $fixture;

  before(() => {
    fixture.setBase('test/fixture');
  });

  beforeEach(() => {
    $fixture = $(fixture.load('collapse.html')[0]);

    instance = new Collapse($fixture);
  });

  afterEach(() => {
    fixture.cleanup();
  });

  describe('@init', () => {
    it('should call @bindListeners', sinon.test(function() {
      const stub = this.stub(instance, 'bindListeners');

      instance.init();

      expect(stub.calledOnce).to.be.true;
    }));
  });

  describe('@setInitialState', () => {
    context('instance.$toggle collapsed', () => {
      it('should set the instance.isCollapsed to true', () => {
        instance.$toggle = $('');
        instance.toggle = '';

        instance.setInitialState();

        expect(instance.isCollapsed).to.be.true;
      });
    });

    context('instance.$toggle visible', () => {
      it('should set the instance.isCollapsed to false', () => {
        instance.$toggle = $(`<div class="${instance.options.visibleClass}" />`);
        instance.toggle = '';

        instance.setInitialState();

        expect(instance.isCollapsed).to.be.false;
      });
    });
  });

  describe('@bindListeners', () => {
    it('should bind @onElementClick as a handler to instance.$element click event', sinon.test(function() {
      const stub = this.stub(instance, 'onElementClick');

      instance.bindListeners();
      instance.$element.trigger(instance.options.listener);

      expect(stub.calledOnce).to.be.true;
    }));
  });

  describe('@onElementClick', () => {
    context('instance.$toggle visible', () => {
      it('should call @hide', sinon.test(function() {
        const stub = this.stub(instance, 'hideContent');

        instance.isCollapsed = false;
        instance.onElementClick();

        expect(stub.calledOnce).to.be.true;
      }));
    });

    context('instance.$toggle collapsed', () => {
      it('should call @show', sinon.test(function() {
        const stub = this.stub(instance, 'showContent');

        instance.isCollapsed = true;
        instance.onElementClick();

        expect(stub.calledOnce).to.be.true;
      }));
    });
  });

  describe('@show/hideContent', () => {
    beforeEach(() => {
      instance.$toggle = $('<div />');
      instance.toggle = instance.$toggle[0];
    });

    context('hide', () => {
      it('should remove the visibleClass from instance.$toggle', () => {
        instance.$toggle.addClass(instance.options.visibleClass);

        instance.hideContent();

        expect(instance.$toggle.hasClass(instance.options.visibleClass)).to.be.false;
      });
    });

    context('show', () => {
      it('should add the visibleClass to instance.$toggle', () => {
        instance.showContent();

        expect(instance.$toggle.hasClass(instance.options.visibleClass)).to.be.true;
      });
    });
  });
});
