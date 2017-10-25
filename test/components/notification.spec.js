import Notification from '../../src/js/components/notification'
import transitionEnd from '../../src/js/utils/transitionend'
import triggerEvent from '../../src/js/utils/trigger-event'

describe('Notification spec', () => {
  let instance, fixtureElement, options

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    fixtureElement = fixture.load('notification.html')[0]

    options = {
      message: 'foo'
    }

    instance = new Notification(fixtureElement, options)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('@init', () => {
    it('should call @createNotification', sinon.test(function () {
      const spy = this.spy(instance, 'createNotification')

      instance.init()

      expect(spy.calledOnce).to.be.true
    }))

    it('should call @bindListeners', sinon.test(function () {
      const spy = this.spy(instance, 'bindListeners')

      instance.init()

      expect(spy.calledOnce).to.be.true
    }))

    context('when the dynamic option is set to true', () => {
      it('should call @show after duration specified in showIn option',
        sinon.test(function () {
          const spy = this.spy(instance, 'show')
          instance.options.dynamic = true

          instance.init()

          this.clock.tick(instance.options.showIn)

          expect(spy.calledOnce).to.be.true
        })
      )
    })

    context('when the dynamic option is set to false', () => {
      it('should not call @show', sinon.test(function () {
        const spy = this.spy(instance, 'show')
        instance.options.dynamic = false

        instance.init()

        this.clock.tick(instance.options.showIn)

        expect(spy.called).to.be.false
      }))
    })
  })

  describe('@bindListeners', () => {
    it('should bind close button', sinon.test(function () {
      const spy = this.spy(instance, 'hideEvent')

      instance.createNotification()
      instance.bindListeners()

      triggerEvent(instance.close, 'click')

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('@show', () => {
    it('should show notification', () => {
      instance.createNotification()
      instance.show()

      expect(instance.box.classList.contains('notification-show')).to.be.true
    })

    it('should hide if autoHide config is true', sinon.test(function () {
      options.autoHide = true

      const newInstance = new Notification(fixtureElement, options),
        spy = this.spy(newInstance, 'hideEvent')

      newInstance.createNotification()
      newInstance.show()

      this.clock.tick(newInstance.options.hideIn)

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('@hide', () => {
    it('should hide notification', sinon.test(function () {

      instance.createNotification()
      instance.show()
      instance.hide()

      triggerEvent(instance.box, transitionEnd())

      expect(instance.box.classList.contains('notification-hide')).to.be.true
    }))
  })

  describe('@destroy', () => {
    it('should remove close bind', sinon.test(function () {
      const spy = this.spy(instance, 'hide')

      instance.init()
      instance.destroy()

      triggerEvent(instance.close, 'click')

      expect(spy.calledOnce).to.be.false
    }))

    it('should remove data from instance.element and remove box from DOM', () => {
      instance.init()
      instance.destroy()

      expect(fixtureElement.querySelectorAll('.notification').length).to.equal(0)
      expect(fixtureElement.querySelectorAll('[data-notification]').length).to.equal(0)
    })
  })

  describe('@createNotification', () => {
    it('should create notification in DOM', () => {
      instance.createNotification()

      expect(fixtureElement.querySelector('.notification')).to.exist
    })

    it('should not create notification in DOM, if dynamic is false', () => {
      options.dynamic = false
      const newInstance = new Notification(fixtureElement, options)

      newInstance.createNotification()

      expect(newInstance.box === newInstance.element).to.be.true
    })

    it('should not create notification in DOM, if message is empty', () => {
      options.message = null

      const newInstance = new Notification(fixtureElement, options)

      newInstance.createNotification()

      expect(fixtureElement.querySelectorAll('.notification').length).to.equal(0)
    })

    it('should add type class if declared', () => {
      options.type = 'warning'

      const newInstance = new Notification(fixtureElement, options)

      newInstance.createNotification()

      expect(fixtureElement.querySelector('.notification-warning')).to.exist
    })
  })

  describe('@createCloseButton', () => {
    it('should not create close element, if dynamic is false', sinon.test(function () {
      options.dynamic = false

      const newInstance = new Notification(fixtureElement, options)

      newInstance.init()

      expect(newInstance.close).to.be.null
    }))

    it('should create close element', () => {
      instance.init()

      expect(instance.box.querySelector('.notification-close')).to.exist
    })
  })
})
