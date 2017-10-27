import { Confirm } from '../../src/js/components/confirm'

import triggerEvent from '../../src/js/utils/trigger-event'

describe('Confirm component', () => {
  let instance

  beforeEach(() => {
    instance = new Confirm(() => {})
  })

  describe('@init', () => {
    it('should call @setupConfirm', sinon.test(function () {
      const stub = this.stub(instance, 'setupConfirm')
      this.stub(instance, 'setupElements')
      this.stub(instance, 'bindListeners')
      this.stub(instance, 'showConfirm')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))

    it('should call @setupElements', sinon.test(function () {
      const stub = this.stub(instance, 'setupElements')
      this.stub(instance, 'setupConfirm')
      this.stub(instance, 'bindListeners')
      this.stub(instance, 'showConfirm')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))

    it('should call @bindListeners', sinon.test(function () {
      const stub = this.stub(instance, 'bindListeners')
      this.stub(instance, 'setupConfirm')
      this.stub(instance, 'setupElements')
      this.stub(instance, 'showConfirm')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))

    it('should call @showConfirm', sinon.test(function () {
      const stub = this.stub(instance, 'showConfirm')
      this.stub(instance, 'setupConfirm')
      this.stub(instance, 'setupElements')
      this.stub(instance, 'bindListeners')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@setupConfirm', () => {
    it('should properly assign instance.element', () => {
      instance.element = undefined

      instance.setupConfirm()

      expect(instance.element).to.exist
    })

    it('should properly assign modal', () => {
      instance.modal = undefined

      instance.setupConfirm()

      expect(instance.modal).to.exist
    })
  })

  describe('@setupElements', () => {
    beforeEach(() => {
      instance.setupConfirm()
    })

    it('should properly assign confirmButton element', () => {
      instance.confirmButton = undefined

      instance.setupElements()

      expect(instance.confirmButton).to.exist
    })

    it('should properly assign cancelButton element', () => {
      instance.cancelButton = undefined

      instance.setupElements()

      expect(instance.cancelButton).to.exist
    })
  })

  describe('@bindListeners', () => {
    beforeEach(() => {
      instance.setupConfirm()
      instance.setupElements()
    })

    it('should bind @onConfirmClick as a handler to confirmButton click event',
      sinon.test(function() {
        const stub = this.stub(instance, 'onConfirmClick')

        instance.bindListeners()
        triggerEvent(instance.confirmButton, 'click')

        expect(stub.calledOnce).to.be.true
      })
    )

    it('should bind @onCancelClick as a handler to cancelButton click event',
      sinon.test(function() {
        const stub = this.stub(instance, 'onCancelClick')

        instance.bindListeners()
        triggerEvent(instance.cancelButton, 'click')

        expect(stub.calledOnce).to.be.true
      })
    )
  })

  describe('@onConfirmClick', () => {
    it('should properly call the callback', sinon.test(function () {
      const stub = this.stub(instance, 'callback')
      this.stub(instance, 'hideConfirm')

      instance.onConfirmClick()

      expect(stub.calledWith(true)).to.be.true
    }))

    it('should call @hideConfirm', sinon.test(function () {
      const stub = this.stub(instance, 'hideConfirm')
      this.stub(instance, 'callback')

      instance.onConfirmClick()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@onCancelClick', () => {
    it('should properly call the callback', sinon.test(function () {
      const stub = this.stub(instance, 'callback')
      this.stub(instance, 'hideConfirm')

      instance.onCancelClick()

      expect(stub.calledWith(false)).to.be.true
    }))

    it('should call @hideConfirm', sinon.test(function () {
      const stub = this.stub(instance, 'hideConfirm')
      this.stub(instance, 'callback')

      instance.onCancelClick()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@showConfirm', () => {
    beforeEach(() => {
      instance.modal = { show () {} }
      instance.confirmButton = { focus () {} }
    })

    it('should show the confirm component', sinon.test(function () {
      const stub = this.stub(instance.modal, 'show')

      instance.showConfirm()

      expect(stub.calledOnce).to.be.true
    }))

    it('should focus on the confirm button', sinon.test(function () {
      const spy = this.spy(instance.confirmButton, 'focus')

      instance.showConfirm()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('@hideConfirm', () => {
    it('should hide the confirm component', sinon.test(function () {
      instance.modal = { hide () {} }
      const stub = this.stub(instance.modal, 'hide')

      instance.hideConfirm()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@buildHtml', () => {
    it('should have the data-confirm-text attribute', () => {
      const html = instance.buildHtml('string', 'string')

      expect($(html).find('[data-confirm-text]')).to.exist
    })

    it('should have the data-confirm-button attribute', () => {
      const html = instance.buildHtml('string', 'string')

      expect($(html).find('[data-confirm-button]')).to.exist
    })

    it('should have the data-cancel-button attribute', () => {
      const html = instance.buildHtml('string', 'string')

      expect($(html).find('[data-cancel-button]')).to.exist
    })
  })
})
