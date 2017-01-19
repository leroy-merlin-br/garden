import $ from 'jquery'
import { Alert } from '../../src/js/components/alert'

describe('Alert component', () => {
  let instance

  beforeEach(() => {
    instance = new Alert($('<div />'))
  })

  describe('@init', () => {
    it('should call @setupAlert', sinon.test(function () {
      const stub = this.stub(instance, 'setupAlert')
      this.stub(instance, 'showAlert')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))

    it('should call @showAlert', sinon.test(function () {
      const stub = this.stub(instance, 'showAlert')
      this.stub(instance, 'setupAlert')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@setupAlert', () => {
    it('should properly assign $element', () => {
      instance.$element = undefined

      instance.setupAlert()

      expect(instance.$element).to.not.be.undefined
    })

    it('should properly assign modal', () => {
      instance.modal = undefined

      instance.setupAlert()

      expect(instance.modal).to.not.be.undefined
    })
  })

  describe('@showAlert', () => {
    it('should show the alert component', sinon.test(function () {
      instance.modal = { show () {} }
      const stub = this.stub(instance.modal, 'show')

      instance.showAlert()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@hideAlert', () => {
    it('should hide the alert component', sinon.test(function () {
      instance.modal = { hide () {} }
      const stub = this.stub(instance.modal, 'hide')

      instance.hideAlert()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@buildHtml', () => {
    it('should have the data-alert-text', () => {
      const html = instance.buildHtml('string', 'string')

      expect($(html).find('[data-alert-text]')).to.not.be.undefined
    })

    it('should have the data-alert-button', () => {
      const html = instance.buildHtml('string', 'string')

      expect($(html).find('[data-alert-button]')).to.not.be.undefined
    })
  })
})
