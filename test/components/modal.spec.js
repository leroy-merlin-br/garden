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

  describe('init', () => {
    it('should append modal into body', () => {
      modalInstance.init();

      expect($fixture.find('.modal')).to.exist;
    });

    it('should call _fillModal', sinon.test(function() {
      this.spy(modalInstance, '_fillModal');

      modalInstance.init();

      expect(modalInstance._fillModal.calledOnce).to.be.true;
    }));
  });

  describe('show', () => {
    it('should call _showModal', sinon.test(function() {
      this.spy(modalInstance, '_showModal');

      modalInstance.show();

      expect(modalInstance._showModal.calledOnce).to.be.true;
    }));

    it('should call bindListeners', sinon.test(function() {
      this.spy(modalInstance, 'bindListeners');

      modalInstance.show();

      expect(modalInstance.bindListeners.calledOnce).to.be.true;
    }));
  });

  describe('hide', () => {
    it('should call _hideModal', sinon.test(function() {
      this.spy(modalInstance, '_hideModal');

      modalInstance.hide();

      expect(modalInstance._hideModal.calledOnce).to.be.true;
    }));

    it('should call unbindListeners', sinon.test(function() {
      this.spy(modalInstance, 'unbindListeners');

      modalInstance.hide();

      expect(modalInstance.unbindListeners.calledOnce).to.be.true;
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
      this.spy(modalInstance, 'hide');

      modalInstance.bindListeners();

      $(window).trigger({
        type: 'keypress',
        which: 27
      });

      expect(modalInstance.hide.calledOnce).to.be.true;
    }));

    it('should hide modal when click in _close', () => {
      modalInstance.init();
      modalInstance.show();

      modalInstance._close.trigger('click');

      expect(modalInstance._modal.hasClass('modal-show')).to.be.false;
    });

    it('should not call hide with user press other key instead of escape',
      sinon.test(function() {
        this.spy(modalInstance, 'hide');

        modalInstance.bindListeners();

        $(window).trigger({
          type: 'keypress',
          which: 22
        });

        expect(modalInstance.hide.notCalled).to.be.true;
      })
    );
  });

  describe('unbindListeners', () => {
    it('should not call hide if _close is clicked', sinon.test(function(){
      this.spy(modalInstance, 'hide');

      modalInstance.init();
      modalInstance.show();
      modalInstance.unbindListeners();

      modalInstance._close.trigger('click');

      expect(modalInstance.hide.notCalled).to.be.true;
    }));

    it('should not call hide if escape key is clicked', sinon.test(function(){
      this.spy(modalInstance, 'hide');

      modalInstance.init();
      modalInstance.show();
      modalInstance.unbindListeners();

      $(window).trigger({
        type: 'keypress',
        which: 27
      });

      expect(modalInstance.hide.notCalled).to.be.true;
    }));
  });

  describe('_showModal', () => {
    it('should addClass to _modal and _content to show enter animation', sinon.test(function(){
      modalInstance._showModal();

      this.clock.tick(200);

      expect(modalInstance._modal.hasClass('modal-enter modal-show')).to.be.true;
      expect(modalInstance._content.hasClass('modal-content-enter modal-content-show')).to.be.true;
    }));
  });

  describe('_hideModal', () => {
    it('should addClass to _modal and _content to show leave animation', sinon.test(function(){
      modalInstance._showModal();
      modalInstance._hideModal();

      expect(modalInstance._modal.hasClass('modal-leave')).to.be.true;
      expect(modalInstance._content.hasClass('modal-content-leave')).to.be.true;
    }));

    it('should remove animation class from _modal and _content', sinon.test(function() {
      modalInstance.show();
      modalInstance.hide();

      this.clock.tick(200);

      expect(!modalInstance._modal.hasClass('modal-leave')).to.be.true;
      expect(!modalInstance._modal.hasClass('modal-content-leave')).to.be.true;
    }));
  });
});
