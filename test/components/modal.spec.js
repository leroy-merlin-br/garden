import Modal from '../../src/js/components/modal'
import emitter from '../../src/js/utils/emitter'
import $ from 'jquery'

describe('Modal spec', () => {
  let instance, $fixture

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    $fixture = $(fixture.load('modal.html')[0])

    instance = new Modal($fixture.find('[data-modal]'))
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('constructor', () => {
    it('should return a instanceof $ if param element isn\'t', () => {
      let newIstance = new Modal(fixture.load('modal.html')[0])

      expect(newIstance.$element).to.be.instanceof($)
    })

    it('should have a different container to append modal', () => {
      let modal = new Modal($fixture.find('[data-modal]'), { container: '.bar' })

      let newContainer = $fixture.find('.bar')

      expect(newContainer.find('.modal')).to.exist
    })
  })

  describe('init', () => {
    it('should append modal into body', () => {
      instance.init()

      expect($fixture.find('.modal')).to.exist
    })

    it('should call createDOM', sinon.test(function () {
      let spy = this.spy(instance, 'createModal')

      instance.init()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('show', () => {
    it('should call showModal', sinon.test(function () {
      let spy = this.spy(instance, 'showModal')

      instance.init()
      instance.show()

      expect(spy.calledOnce).to.be.true
    }))

    it('should call bindListeners', sinon.test(function () {
      let spy = this.spy(instance, 'bindListeners')

      instance.init()
      instance.show()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('hide', () => {
    it('should call hideModal', sinon.test(function () {
      let spy = this.spy(instance, 'hideModal')

      instance.init()
      instance.hide()

      expect(spy.calledOnce).to.be.true
    }))

    it('should call unbindListeners', sinon.test(function () {
      let spy = this.spy(instance, 'unbindListeners')

      instance.init()
      instance.hide()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('destroy', () => {
    it('should destroy modal from DOM and instance from $element', () => {
      instance.init()
      instance.destroy()

      expect($fixture.find('.modal').length).to.equal(0)
      expect($fixture.find('[data-modal]').data('modal')).to.be.undefined
    })
  })

  describe('bindListeners', () => {
    it('should call hide if escape key is pressed', sinon.test(function () {
      let spy = this.spy(instance, 'hide')

      instance.init()
      instance.bindListeners()

      $(window).trigger({
        type: 'keyup',
        which: 27
      })

      expect(spy.calledOnce).to.be.true
    }))

    it('should hide modal when click in close', () => {
      instance.init()
      instance.show()

      instance.$close.trigger('click')

      expect(instance.$modal.hasClass('modal-show')).to.be.false
    })

    it('should not call hide with user press other key instead of escape',
      sinon.test(function () {
        let spy = this.spy(instance, 'hide')

        instance.init()
        instance.bindListeners()

        $(window).trigger({
          type: 'keyup',
          which: 22
        })

        expect(spy.notCalled).to.be.true
      })
    )

    it('should bind triggerClose if user passes the selector as an option',
      sinon.test(function () {
        let newInstance = new Modal($fixture.find('[data-modal]'),
          { triggerClose: '[data-trigger="close"]' }
        )

        newInstance.init()
        newInstance.show()

        newInstance.$modal.find('[data-trigger="close"]').trigger('click')

        expect(newInstance.$modal.hasClass('modal-show')).to.be.false
      })
    )

    it('should bind triggerOpen if user passes the selector as an option', sinon.test(function () {
      let newInstance = new Modal($fixture.find('[data-modal]'),
        { triggerOpen: '[data-trigger="open"]' }
      )
      let spy = this.spy(newInstance, 'show')

      newInstance.init()

      $('[data-trigger="open"]').trigger('click')

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('unbindListeners', () => {
    it('should not call hide if close is clicked', sinon.test(function () {
      let spy = this.spy(instance, 'hide')

      instance.init()
      instance.show()
      instance.unbindListeners()

      instance.$close.trigger('click')

      expect(spy.notCalled).to.be.true
    }))

    it('should not call hide if escape key is clicked', sinon.test(function () {
      let spy = this.spy(instance, 'hide')

      instance.init()
      instance.show()
      instance.unbindListeners()

      $(window).trigger({
        type: 'keyup',
        which: 27
      })

      expect(spy.notCalled).to.be.true
    }))
  })

  describe('bindTrigger', () => {
    context('when instance.options.triggerOpen is setted', () => {
      beforeEach(() => {
        const $triggerOpen = $('[data-trigger="open"]')
        instance.options.triggerOpen = $triggerOpen
      })

      it('should call onTriggerOpenClick if the trigger is clicked', sinon.test(function () {
        const stub = this.stub(instance, 'onTriggerOpenClick')

        instance.init()
        instance.bindTrigger()

        $(instance.options.triggerOpen).trigger('click')

        expect(stub.called).to.be.true
      }))
    })
  })

  describe('onTriggerOpenClick', () => {
    it('should call preventDefault on the event', sinon.test(function () {
      const fakeEvent = { preventDefault: () => {} }
      const preventDefault = sinon.stub(fakeEvent, 'preventDefault')

      instance.init()
      instance.onTriggerOpenClick(fakeEvent)

      expect(preventDefault.calledOnce).to.be.true
    }))

    it('should call instance.show()', sinon.test(function () {
      const fakeEvent = { preventDefault: () => {} }
      const show = sinon.stub(instance, 'show')

      instance.init()
      instance.onTriggerOpenClick(fakeEvent)

      expect(show.calledOnce).to.be.true
    }))
  })

  describe('showModal', () => {
    it('should emit `modal:show`', sinon.test(function () {
      const stub = this.stub(emitter, 'emit')

      instance.init()
      instance.showModal()

      expect(stub.calledWith('modal:show'))
    }))

    it('should addClass to modal and content to show enter animation', sinon.test(function () {
      instance.init()
      instance.showModal()

      this.clock.tick(200)

      expect(instance.$modal.hasClass('modal-enter modal-show')).to.be.true
      expect(instance.$content.hasClass('modal-content-enter modal-content-show')).to.be.true
    }))

    context('when a click is done outside the modal\'s content', () => {
      it('should hide the modal', sinon.test(function () {
        let spy = this.spy(instance, 'hideModal')

        instance.init()
        instance.show()

        instance.$modal.trigger('click')

        expect(spy.calledOnce).to.be.true
      }))
    })
  })

  describe('hideModal', () => {
    it('should emit `modal:hide`', sinon.test(function () {
      const stub = this.stub(emitter, 'emit')

      instance.init()
      instance.hideModal()

      expect(stub.calledWith('modal:hide'))
    }))

    it('should addClass to modal and content to show leave animation', () => {
      instance.init()
      instance.showModal()
      instance.hideModal()

      expect(instance.$modal.hasClass('modal-leave')).to.be.true
      expect(instance.$content.hasClass('modal-content-leave')).to.be.true
    })

    it('should remove animation class from modal and content', sinon.test(function () {
      instance.init()
      instance.show()
      instance.hide()

      this.clock.tick(200)

      expect(!instance.$modal.hasClass('modal-leave')).to.be.true
      expect(!instance.$modal.hasClass('modal-content-leave')).to.be.true
    }))
  })
})
