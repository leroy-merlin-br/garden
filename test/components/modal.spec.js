import Modal from '../../src/js/components/modal'

import emitter from '../../src/js/utils/emitter'
import domParser from '../../src/js/utils/dom-parser'
import triggerEvent from '../../src/js/utils/trigger-event'

describe('Modal component', () => {
  let instance, fixtureElement

  before(() => {
    fixture.setBase('test/fixture')
  })

  beforeEach(() => {
    fixtureElement = fixture.load('modal.html')[0]

    instance = new Modal(fixtureElement)
  })

  afterEach(() => {
    fixture.cleanup()
  })

  describe('@init', () => {
    it('should properly set instance.container element', () => {
      instance.container = undefined

      instance.init()

      expect(instance.container).to.exist
    })

    it('should call @createModal', sinon.test(function () {
      let spy = this.spy(instance, 'createModal')

      instance.init()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('@show', () => {
    beforeEach(() => {
      instance.init()
    })

    it('should call @bindListeners', sinon.test(function () {
      let spy = this.spy(instance, 'bindListeners')

      instance.show()

      expect(spy.calledOnce).to.be.true
    }))

    it('should call @showModal', sinon.test(function () {
      let spy = this.spy(instance, 'showModal')

      instance.show()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('@hide', () => {
    beforeEach(() => {
      instance.init()
    })

    it('should call @unbindListeners', sinon.test(function () {
      let spy = this.spy(instance, 'unbindListeners')

      instance.hide()

      expect(spy.calledOnce).to.be.true
    }))

    it('should call @hideModal', sinon.test(function () {
      let spy = this.spy(instance, 'hideModal')

      instance.hide()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('@destroy', () => {
    beforeEach(() => {
      instance.init()
    })

    it('should remove data-modal attribute from instance element', () => {
      const dataAttribute = 'data-modal'

      instance.element.setAttribute(dataAttribute)

      instance.destroy()

      expect(instance.element.hasAttribute(dataAttribute)).to.be.false
    })

    it('should remove modal element from instance', () => {
      const modalClass = 'modal'

      instance.modal = document.createElement('div')
      instance.modal.classList.add(modalClass)

      instance.destroy()

      expect(fixtureElement.querySelectorAll(`.${modalClass}`).length).to.equal(0)
    })
  })

  describe('@bindListeners', () => {
    context('when triggerClose option is not null', () => {
      beforeEach(() => {
        instance.init()
        instance.options.triggerClose = '[data-trigger="close"]'
      })

      it('should register click event on triggerClose option',
        sinon.test(function () {
          const spy = this.spy(instance, 'hide')
          const { triggerClose } = instance.options
          const triggerCloseElement = instance.modal.querySelector(triggerClose)

          instance.bindListeners()

          triggerEvent(triggerCloseElement, 'click')

          expect(spy.called).to.be.true
        })
      )
    })

    it('should register click event on instance.close element',
      sinon.test(function () {
        const spy = this.spy(instance, 'hide')

        instance.init()
        instance.bindListeners()

        triggerEvent(instance.close, 'click')

        expect(spy.calledOnce).to.be.true
      })
    )

    it('should call @bindKeyboardListener', sinon.test(function () {
      const spy = this.spy(instance, 'bindKeyboardListener')

      instance.init()
      instance.bindListeners()

      expect(spy.calledOnce).to.be.true
    }))

    context('when history option is set to true', () => {
      beforeEach(() => {
        instance.init()
        instance.show()
        instance.options.history = true
      })

      it('should call @bindModalShowListener', sinon.test(function () {
        const spy = this.spy(instance, 'bindModalShowListener')

        instance.bindListeners()

        expect(spy.calledOnce).to.be.true
      }))

      it('should call @bindHashChangeListener', sinon.test(function () {
        const spy = this.spy(instance, 'bindHashChangeListener')

        instance.bindListeners()

        expect(spy.calledOnce).to.be.true
      }))

      it('should call @bindModalHideListener', sinon.test(function () {
        const spy = this.spy(instance, 'bindModalHideListener')

        instance.bindListeners()

        expect(spy.calledOnce).to.be.true
      }))
    })
  })

  describe('@onEscKeyPressed', () => {
    let fakeEvent

    beforeEach(() => {
      fakeEvent = {
        which: instance.options.keys.esc
      }
    })

    context('when the event received has the Escape key code', () => {
      it('should call @hide', sinon.test(function () {
        const stub = this.stub(instance, 'hide')

        instance.onEscKeyPressed(fakeEvent)

        expect(stub.calledOnce).to.be.true
      }))
    })
  })

  describe('@bindKeyboardListener', () => {
    context('when keyboard option is set to true', () => {
      beforeEach(() => {
        instance.options.keyboard = true
      })

      it('should register keyup event on window element', sinon.test(function () {
        let spy = this.spy(instance, 'onEscKeyPressed')

        instance.init()
        instance.bindKeyboardListener()

        triggerEvent(window, 'keyup')

        expect(spy.calledOnce).to.be.true
      }))
    })

    context('when keyboard option is set to false', () => {
      beforeEach(() => {
        instance.options.keyboard = false
      })

      it('should not register keyup event on window element',
        sinon.test(function () {
          let spy = this.spy(instance, 'onEscKeyPressed')

          instance.init()
          instance.bindKeyboardListener()

          triggerEvent(window, 'keyup')

          expect(spy.called).to.be.false
        })
      )
    })
  })

  describe('@bindModalShowListener', () => {
    it('should change location hash when `modal:show` is emitted', () => {
      const hash = '#modal-open'
      instance.options.history = true

      emitter.emit('modal:show')

      expect(window.location.hash).to.be.equal(hash)
    })
  })

  describe('@bindHashChangeListener', () => {
    context('when there is not a location hash', () => {
      it('should hide modal', sinon.test(function () {
        const spy = this.spy(instance, 'hide')

        instance.init()
        instance.bindHashChangeListener()

        history.pushState(null, null, window.location.pathname)

        triggerEvent(window, 'hashchange')

        expect(spy.called).to.be.true
      }))
    })

    context('when there is a location hash', () => {
      it('should not hide modal', sinon.test(function () {
        const spy = this.spy(instance, 'hide')
        const hash = '#modal-open'

        instance.init()
        instance.bindHashChangeListener()

        window.location.hash = hash

        triggerEvent(window, 'hashchange')

        expect(spy.called).to.be.false
      }))
    })
  })

  describe('@bindModalHideListener', () => {
    it('should call `history.back` when `modal:hide` is emitted',
      sinon.test(function () {
        const spy = this.spy(history, 'back')
        instance.init()
        instance.options.history = true
        instance.show()

        emitter.emit('modal:hide')

        expect(spy.calledOnce).to.be.true
      })
    )
  })

  describe('@unbindListeners', () => {
    it('should not call @hide if close icon is clicked', sinon.test(function () {
      let spy = this.spy(instance, 'hide')

      instance.init()
      instance.unbindListeners()

      triggerEvent(instance.close, 'click')

      expect(spy.called).to.be.false
    }))

    it('should not call @onEscKeyPressed on keyup event', sinon.test(function () {
      let spy = this.spy(instance, 'onEscKeyPressed')

      instance.init()
      instance.unbindListeners()

      triggerEvent(window, 'keyup')

      expect(spy.called).to.be.false
    }))
  })

  describe('@bindTrigger', () => {
    context('when instance.options.triggerOpen is setted', () => {
      beforeEach(() => {
        instance.init()
        instance.options.triggerOpen = '[data-trigger="open"]'
      })

      it('should call @onTriggerOpenClick if the trigger is clicked',
        sinon.test(function () {
          const stub = this.stub(instance, 'onTriggerOpenClick')
          const { triggerOpen } = instance.options
          const triggerOpenElement = document.querySelector(triggerOpen)

          instance.bindTrigger()

          triggerEvent(triggerOpenElement, 'click')

          expect(stub.called).to.be.true
        })
      )
    })
  })

  describe('@onTriggerOpenClick', () => {
    it('should call @preventDefault on the event', sinon.test(function () {
      const fakeEvent = { preventDefault: () => {} }
      const preventDefault = this.stub(fakeEvent, 'preventDefault')

      instance.init()
      instance.onTriggerOpenClick(fakeEvent)

      expect(preventDefault.calledOnce).to.be.true
    }))

    it('should call @show', sinon.test(function () {
      const fakeEvent = { preventDefault: () => {} }
      const show = this.stub(instance, 'show')

      instance.init()
      instance.onTriggerOpenClick(fakeEvent)

      expect(show.calledOnce).to.be.true
    }))
  })

  describe('@showModal', () => {
    it('should emit modal:show event', sinon.test(function () {
      const stub = this.stub(emitter, 'emit')

      instance.init()
      instance.showModal()

      expect(stub.calledWith('modal:show'))
    }))

    it('should remove modal:show listener from emitter',
      sinon.test(function () {
        const stub = this.stub(emitter, 'removeAllListeners')

        instance.init()
        instance.showModal()

        expect(stub.calledWith('modal:show'))
      })
    )

    it('should addClass to modal and content to show enter animation', sinon.test(function () {
      instance.init()
      instance.showModal()

      this.clock.tick(200)

      expect(instance.modal.classList.contains('modal-enter', 'modal-show')).to.be.true
      expect(instance.content.classList.contains('modal-content-enter', 'modal-content-show')).to.be.true
    }))

    context('when a click is done outside the modal\'s content', () => {
      it('should hide the modal', sinon.test(function () {
        let spy = this.spy(instance, 'hideModal')

        instance.init()
        instance.show()

        triggerEvent(instance.modal, 'click')

        expect(spy.calledOnce).to.be.true
      }))
    })
  })

  describe('@hideModal', () => {
    context('when there is a hash in the location path', () => {
      it('should emit `modal:hide`', sinon.test(function () {
        const spy = this.spy(emitter, 'emit')
        const hash = '#modal-open'

        window.location.hash = hash

        instance.init()
        instance.hideModal()

        expect(spy.calledWith('modal:hide')).to.be.true
      }))
    })

    context('when there is not a hash in the location path', () => {
      it('should not emit `modal:hide`', sinon.test(function () {
        const spy = this.spy(emitter, 'emit')

        window.location.hash = ''

        instance.init()
        instance.hideModal()

        expect(spy.calledWith('modal:hide')).to.be.false
      }))
    })

    it('should remove `modal:hide` listener from emitter',
      sinon.test(function () {
        const spy = this.spy(emitter, 'removeAllListeners')

        instance.init()
        instance.hideModal()

        expect(spy.calledWith('modal:hide'))
      })
    )

    it('should addClass to modal and content to show leave animation', () => {
      instance.init()
      instance.showModal()
      instance.hideModal()

      expect(instance.modal.classList.contains('modal-leave')).to.be.true
      expect(instance.content.classList.contains('modal-content-leave')).to.be.true
    })

    it('should remove animation class from modal and content', sinon.test(function () {
      instance.init()
      instance.show()
      instance.hide()

      this.clock.tick(200)

      expect(!instance.modal.classList.contains('modal-leave')).to.be.true
      expect(!instance.modal.classList.contains('modal-content-leave')).to.be.true
    }))
  })

  describe('@onModalClick', () => {
    let fakeEvent

    beforeEach(() => {
      const modal = document.createElement('div')
      instance.modal = modal

      fakeEvent = {
        target: modal
      }
    })

    context('when event target is the modal on a static modal', () => {
      it('should not hide modal', sinon.test(function () {
        let stub = this.stub(instance, 'hideModal')
        instance.options.static = true

        instance.onModalClick(fakeEvent)

        expect(stub.called).to.be.false
      }))
    })

    context('when event target is the modal on a non static modal', () => {
      it('should hide modal', sinon.test(function () {
        let stub = this.stub(instance, 'hideModal')
        instance.options.static = false

        instance.onModalClick(fakeEvent)

        expect(stub.calledOnce).to.be.true
      }))
    })

    context('when event target is different from modal', () => {
      beforeEach(() => {
        instance.modal = document.createElement('div')

        fakeEvent = {
          target: document.createElement('div')
        }
      })

      it('should not hide modal', sinon.test(function () {
        let stub = this.stub(instance, 'hideModal')

        instance.onModalClick(fakeEvent)

        expect(stub.called).to.be.false
      }))
    })
  })

  describe('@fillModal', () => {
    it('should append html to content element', () => {
      instance.element = document.createElement('div')
      instance.element.innerText = 'Element'
      instance.content = document.createElement('div')
      instance.content.innerHTML = '<div class="modal-body"></div>'

      instance.fillModal()

      expect(
        instance.content.querySelector('.modal-body').innerText
      ).to.equal('Element')
    })
  })

  describe('@createModal', () => {
    beforeEach(() => {
      instance.container = document.createElement('div')
      instance.options.static = false
    })

    it('should set modal', () => {
      instance.modal = undefined

      instance.createModal()

      expect(instance.modal).to.not.be.undefined
    })

    it('should set content', () => {
      instance.content = undefined

      instance.createModal()

      expect(instance.content).to.not.be.undefined
    })

    it('should set close', () => {
      instance.close = undefined

      instance.createModal()

      expect(instance.close).to.not.be.undefined
    })

    it('should add the size class to content', () => {
      const size = instance.setupSizeModal(instance.options.size)

      instance.createModal()

      expect(instance.content.classList.contains(size)).to.be.true
    })

    it('should append close element to content element', () => {
      instance.createModal()

      expect(
        instance.content.innerHTML
      ).to.have.string(instance.close.outerHTML)
    })

    it('should append content element to modal element', () => {
      instance.createModal()

      expect(
        instance.modal.innerHTML
      ).to.have.string(instance.content.outerHTML)
    })

    it('should call @bindTrigger', sinon.test(function () {
      let stub = this.stub(instance, 'bindTrigger')

      instance.createModal()

      expect(stub.calledOnce).to.be.true
    }))

    it('should call @fillModal', sinon.test(function () {
      let stub = this.stub(instance, 'fillModal')

      instance.createModal()

      expect(stub.calledOnce).to.be.true
    }))

    context('when static option is set to true', () => {
      it('should not append close element to content element', () => {
        instance.options.static = true

        instance.createModal()

        expect(
          instance.content.innerHTML
        ).to.not.have.string(instance.close.outerHTML)
      })
    })
  })

  describe('@isStaticModal', () => {
    context('when static option was set to true', () => {
      it('returns true', () => {
        instance.options.static = true

        expect(instance.isStaticModal()).to.be.true
      })
    })

    context('when static option was set to false', () => {
      it('returns false', () => {
        instance.options.static = false

        expect(instance.isStaticModal()).to.be.false
      })
    })
  })

  describe('@setupSizeModal', () => {
    context('when the size is small', () => {
      it('should return the modal-content-sm class ', () => {
        instance.options.size = 'small'
        const classSize = instance.setupSizeModal(instance.options.size)

        expect(classSize).to.be.equal('modal-content-sm')
      })
    })

    context('when the size is medium', () => {
      it('should return the modal-content-md class ', () => {
        const classSize = instance.setupSizeModal(instance.options.size)

        expect(classSize).to.be.equal('modal-content-md')
      })
    })

    context('when the size is large', () => {
      it('should return the modal-content-lg class ', () => {
        instance.options.size = 'large'
        const classSize = instance.setupSizeModal(instance.options.size)

        expect(classSize).to.be.equal('modal-content-lg')
      })
    })
  })
})
