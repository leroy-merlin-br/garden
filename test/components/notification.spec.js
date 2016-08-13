import Notification from '../../src/js/components/notification'
import transitionEnd from '../../src/js/utils/transitionend'

describe('Notification spec', () => {
  let instance, $fixture, options

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    $fixture = $(fixture.load('notification.html')[0])

    options = {
      message: 'foo'
    }

    instance = new Notification($fixture.find('[data-notification]'), options)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('consutructor', () => {
    it('should return a instanceof $ if param element isn\'t', () => {
      let newIstance = new Notification(fixture.load('notification.html')[0], options)

      expect(newIstance.$element).to.be.instanceof($)
    })
  })

  describe('init', () => {
    it('should create notification in DOM', sinon.test(function() {
      let spy = this.spy(instance, '_createNotification')

      instance.init()

      expect(spy.calledOnce).to.be.true
    }))

    it('should call bindListeners', sinon.test(function() {
      let spy = this.spy(instance, 'bindListeners')

      instance.init()

      expect(spy.calledOnce).to.be.true
    }))

    it('should show notification when init, based on showIn timer', sinon.test(function() {
      let spy = this.spy(instance, 'show')

      instance.init()

      this.clock.tick(instance.options.showIn)

      expect(spy.calledOnce).to.be.true
    }))

    it('should show notification when init, based on showIn config', sinon.test(function() {
      options.showIn = 3000

      let newIstance = new Notification(fixture.load('notification.html')[0], options),
        spy = this.spy(newIstance, 'show')

      newIstance.init()

      this.clock.tick(newIstance.options.showIn)

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('bindListeners', () => {
    it('should bind close button', sinon.test(function() {
      let spy = this.spy(instance, 'hide')

      instance._createNotification()
      instance.bindListeners()

      instance.$close.trigger('click')

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('show', () => {
    it('should show notification', () => {
      instance._createNotification()
      instance.show()

      expect(instance.$box.hasClass('notification-show')).to.be.true
    })

    it('should hide if autoHide config is true', sinon.test(function() {
      options.autoHide = true

      let newIstance = new Notification(fixture.load('notification.html')[0], options),
        spy = this.spy(newIstance, 'hide')

      newIstance._createNotification()
      newIstance.show()

      this.clock.tick(newIstance.options.hideIn)

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('hide', () => {
    it('should hide notification', sinon.test(function() {

      instance._createNotification()
      instance.show()
      instance.hide()

      instance.$box.trigger(transitionEnd())

      expect(instance.$box.hasClass('notification-hide')).to.be.true
    }))
  })

  describe('destroy', () => {
    it('should remove close bind', sinon.test(function() {
      let spy = this.spy(instance, 'hide')

      instance.init()
      instance.destroy()

      instance.$close.trigger('click')

      expect(spy.calledOnce).to.be.false
    }))

    it('should removeData from $element and remove $box from DOM', () => {
      instance.init()
      instance.destroy()

      expect($fixture.find('.notification').length).to.equal(0)
      expect(
        $fixture.find('[data-notification]').data('notification')
      ).to.be.undefined
    })
  })

  describe('_createNotification', () => {
    it('should create notification in DOM', () => {
      instance._createNotification()

      expect($fixture.find('.notification')).to.exist
    })

    it('should not create notification in DOM, if dynamic is false', () => {
      options.dynamic = false
      let newIstance = new Notification(fixture.load('notification.html')[0], options)

      newIstance._createNotification()

      expect(newIstance.$box === newIstance.$element).to.be.true
    })

    it('should not create notification in DOM, if message is empty', () => {
      options.message = null

      let newIstance = new Notification(fixture.load('notification.html')[0], options)

      newIstance._createNotification()

      expect($fixture.find('.notification').length).to.equal(0)
    })

    it('should add type class if declared', () => {
      options.type = 'warning'

      let newIstance = new Notification(fixture.load('notification.html')[0], options)

      newIstance._createNotification()

      expect($fixture.find('.notification-warning')).to.exist
    })
  })

  describe('_createCloseButton', () => {
    it('should not create close element, if dynamic is false', sinon.test(function() {
      let spy = this.spy($.fn, 'append')

      options.dynamic = false

      let newIstance = new Notification(fixture.load('notification.html')[0], options)

      newIstance.init()

      expect(spy.notCalled).to.be.true
    }))

    it('should create close element', () => {

      instance.init()

      expect(instance.$box.find('.notification-close')).to.exist
    })
  })
})
