import Notification from '../../src/js/components/notification';
import transitionEnd from '../../src/js/utils/transitionend';

describe('Notification spec', () => {
  let notification, $fixture, options;

  before(() => {
    fixture.setBase('test/fixture');
  });

  beforeEach(() => {
    $fixture = $(fixture.load('notification.html')[0]);

    options = {
      message: 'foo'
    }

    notification = new Notification($fixture.find('[data-notification]'), options);
  });

  afterEach(() => {
    fixture.cleanup();
  });

  describe('consutructor', () => {
    it('should return a instanceof $ if param element isn\'t', () => {
      let newNotification = new Notification(fixture.load('notification.html')[0], options);

      expect(newNotification.$element).to.be.instanceof($);
    });
  });

  describe('init', () => {
    it('should create notification in DOM', sinon.test(function() {
      let spy = this.spy(notification, '_createNotification');

      notification.init();

      expect(spy.calledOnce).to.be.true;
    }));

    it('should call bindListeners', sinon.test(function() {
      let spy = this.spy(notification, 'bindListeners');

      notification.init();

      expect(spy.calledOnce).to.be.true;
    }));

    it('should show notification when init, based on showIn timer', sinon.test(function() {
      let spy = this.spy(notification, 'show');

      notification.init();

      this.clock.tick(notification._options.showIn);

      expect(spy.calledOnce).to.be.true;
    }));

    it('should show notification when init, based on showIn config', sinon.test(function() {
      options.showIn = 3000;

      let newNotification = new Notification(fixture.load('notification.html')[0], options),
          spy = this.spy(newNotification, 'show');

      newNotification.init();

      this.clock.tick(newNotification._options.showIn);

      expect(spy.calledOnce).to.be.true;
    }));
  });

  describe('bindListeners', () => {
    it('should bind close button', sinon.test(function() {
      let spy = this.spy(notification, 'hide');

      notification._createNotification();
      notification.bindListeners();

      notification.close.trigger('click');

      expect(spy.calledOnce).to.be.true;
    }));
  });

  describe('show', () => {
    it('should show notification', () => {
      notification._createNotification();
      notification.show();

      expect(notification.box.hasClass('notification-show')).to.be.true;
    });

    it('should hide if autoHide config is true', sinon.test(function() {
      options.autoHide = true;

      let newNotification = new Notification(fixture.load('notification.html')[0], options),
          spy = this.spy(newNotification, 'hide');

      newNotification._createNotification();
      newNotification.show();

      this.clock.tick(newNotification._options.hideIn);

      expect(spy.calledOnce).to.be.true;
    }));
  });

  describe('hide', () => {
    it('should hide notification', sinon.test(function() {

      notification._createNotification();
      notification.show();
      notification.hide();

      notification.box.trigger(transitionEnd());

      expect(notification.box.hasClass('notification-hide')).to.be.true;
    }));
  });

  describe('destroy', () => {
    it('should remove close bind', sinon.test(function() {
      let spy = this.spy(notification, 'hide');

      notification.init();
      notification.destroy();

      notification.close.trigger('click');

      expect(spy.calledOnce).to.be.false;
    }));

    it('should removeData from $element and remove box from DOM', () => {
      notification.init();
      notification.destroy();

      expect($fixture.find('.notification').length).to.equal(0);
      expect(
        $fixture.find('[data-notification]').data('notification')
      ).to.be.undefined;
    });
  });

  describe('_createNotification', () => {
    it('should create notification in DOM', () => {
      notification._createNotification();

      expect($fixture.find('.notification')).to.exist;
    });

    it('should not create notification in DOM, if dynamic is false', () => {
      options.dynamic = false;
      let newNotification = new Notification(fixture.load('notification.html')[0], options);

      newNotification._createNotification();

      expect(newNotification.box === newNotification.$element).to.be.true;
    });

    it('should not create notification in DOM, if message is empty', () => {
      options.message = null;

      let newNotification = new Notification(fixture.load('notification.html')[0], options);

      newNotification._createNotification();

      expect($fixture.find('.notification').length).to.equal(0);
    });

    it('should add type class if declared', () => {
      options.type = 'warning';

      let newNotification = new Notification(fixture.load('notification.html')[0], options);

      newNotification._createNotification();

      expect($fixture.find('.notification-warning')).to.exist;
    });
  });

  describe('_createCloseButton', () => {
    it('should not create close element, if dynamic is false', sinon.test(function() {
      let spy = this.spy($.fn, 'append');

      options.dynamic = false;

      let newNotification = new Notification(fixture.load('notification.html')[0], options);

      newNotification.init();

      expect(spy.notCalled).to.be.true;
    }));

    it('shoudl create close element', () => {

      notification.init();

      expect(notification.box.find('.notification-close')).to.exist;
    });
  });
});
