import Modal from '../../src/js/components/modal';

describe('Modal spec', () => {
  let modalInstance, $fixture;

  before(() => {
    fixture.setBase('test/fixture');
  });

  beforeEach(() => {
    $fixture = $(fixture.load('modal.html')[0]);

    modalInstance = new Modal($fixture.find('[data-modal]'));
  });

  afterEach(() => {
    fixture.cleanup();
  });

  describe('constructor', () => {
    it('should return a instanceof $ if param element isn\'t', () => {
      let newModalInstance = new Modal(fixture.load('modal.html')[0]);

      expect(newModalInstance._element).to.be.instanceof($);
    });

    it('should have a different container to append modal', () => {
      let newModalInstance = new Modal(
        $fixture.find('[data-modal]'),
        {
          container: '.bar'
        }
      ),
      newContainer = $fixture.find('.bar');

      expect(newContainer.find('.modal')).to.exist;
    });
  });

  describe('init', () => {
    it('should append modal into body', () => {
      modalInstance.init();

      expect($fixture.find('.modal')).to.exist;
    });

    it('should call createDOM', sinon.test(function() {
      let spy = this.spy(modalInstance, '_createModal');

      modalInstance.init();

      expect(spy.calledOnce).to.be.true;
    }));
  });

  describe('show', () => {
    it('should call _showModal', sinon.test(function() {
      let spy = this.spy(modalInstance, '_showModal');

      modalInstance.init();
      modalInstance.show();

      expect(spy.calledOnce).to.be.true;
    }));

    it('should call bindListeners', sinon.test(function() {
      let spy = this.spy(modalInstance, 'bindListeners');

      modalInstance.init();
      modalInstance.show();

      expect(spy.calledOnce).to.be.true;
    }));
  });

  describe('hide', () => {
    it('should call _hideModal', sinon.test(function() {
      let spy = this.spy(modalInstance, '_hideModal');

      modalInstance.init();
      modalInstance.hide();

      expect(spy.calledOnce).to.be.true;
    }));

    it('should call unbindListeners', sinon.test(function() {
      let spy = this.spy(modalInstance, 'unbindListeners');

      modalInstance.init();
      modalInstance.hide();

      expect(spy.calledOnce).to.be.true;
    }));
  });

  describe('destroy', () => {
    it('should destroy modal from DOM and instance from _element', () => {

      modalInstance.init();
      modalInstance.destroy();

      expect($fixture.find('.modal').length).to.equal(0);
      expect($fixture.find('[data-modal]').data('modal')).to.be.undefined;
    });
  });

  describe('bindListeners', () => {
    it('should call hide if escape key is pressed', sinon.test(function() {
      let spy = this.spy(modalInstance, 'hide');

      modalInstance.init();
      modalInstance.bindListeners();

      $(window).trigger({
        type: 'keyup',
        which: 27
      });

      expect(spy.calledOnce).to.be.true;
    }));

    it('should hide modal when click in close', () => {
      let newModalInstance = new Modal(
        $fixture.find('[data-modal]'),
        {
          container: '.bar'
        }
      );
      modalInstance.init();
      modalInstance.show();

      modalInstance.close.trigger('click');

      expect(modalInstance.modal.hasClass('modal-show')).to.be.false;
    });

    it('should not call hide with user press other key instead of escape',
      sinon.test(function() {
        let spy = this.spy(modalInstance, 'hide');

        modalInstance.init();
        modalInstance.bindListeners();

        $(window).trigger({
          type: 'keyup',
          which: 22
        });

        expect(spy.notCalled).to.be.true;
      })
    );

    it('should bind triggerClose if user passed selector as option',
      sinon.test(function() {

        let newModalInstance = new Modal(
              $fixture.find('[data-modal]'),
              { triggerClose: '[data-trigger="close"]' }
            ),
            spy = this.spy(newModalInstance, 'hide');

        newModalInstance.init();
        newModalInstance.show();

        newModalInstance.modal.find('[data-trigger="close"]').trigger('click');

        expect(newModalInstance.modal.hasClass('modal-show')).to.be.false;
      })
    );
  });

  describe('unbindListeners', () => {
    it('should not call hide if close is clicked', sinon.test(function(){
      let spy = this.spy(modalInstance, 'hide');

      modalInstance.init();
      modalInstance.show();
      modalInstance.unbindListeners();

      modalInstance.close.trigger('click');

      expect(spy.notCalled).to.be.true;
    }));

    it('should not call hide if escape key is clicked', sinon.test(function(){
      let spy = this.spy(modalInstance, 'hide');

      modalInstance.init();
      modalInstance.show();
      modalInstance.unbindListeners();

      $(window).trigger({
        type: 'keyup',
        which: 27
      });

      expect(spy.notCalled).to.be.true;
    }));
  });

  describe('_showModal', () => {
    it('should addClass to modal and content to show enter animation', sinon.test(function(){
      modalInstance.init();
      modalInstance._showModal();

      this.clock.tick(200);

      expect(modalInstance.modal.hasClass('modal-enter modal-show')).to.be.true;
      expect(modalInstance.content.hasClass('modal-content-enter modal-content-show')).to.be.true;
    }));
  });

  describe('_hideModal', () => {
    it('should addClass to modal and content to show leave animation', () => {
      modalInstance.init();
      modalInstance._showModal();
      modalInstance._hideModal();

      expect(modalInstance.modal.hasClass('modal-leave')).to.be.true;
      expect(modalInstance.content.hasClass('modal-content-leave')).to.be.true;
    });

    it('should remove animation class from modal and content', sinon.test(function() {
      modalInstance.init();
      modalInstance.show();
      modalInstance.hide();

      this.clock.tick(200);

      expect(!modalInstance.modal.hasClass('modal-leave')).to.be.true;
      expect(!modalInstance.modal.hasClass('modal-content-leave')).to.be.true;
    }));
  });
});
