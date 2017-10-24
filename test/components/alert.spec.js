import { Alert } from '../../src/js/components/alert'

import domParser from '../../src/js/utils/dom-parser'

describe('Alert component', () => {
  let instance

  beforeEach(() => {
    instance = new Alert()
  })

  describe('@init', () => {
    it('should call @setupElement', sinon.test(function () {
      const stub = this.stub(instance, 'setupElement')
      this.stub(instance, 'show')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))

    it('should call @show', sinon.test(function () {
      const stub = this.stub(instance, 'show')
      this.stub(instance, 'setupElement')

      instance.init()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@setupElement', () => {
    it('should properly assign instance.element', () => {
      instance.element = undefined

      instance.setupElement()

      expect(instance.element).to.exist
    })

    it('should properly assign instance.modal', () => {
      instance.modal = undefined

      instance.setupElement()

      expect(instance.modal).to.exist
    })
  })

  describe('@show', () => {
    beforeEach(() => {
      const content = document.createElement('div')
      content.innerHTML = '<button data-alert-button>Ok</button>'

      instance.modal = {
        show () {},
        content
      }
    })

    it('should show the alert component', sinon.test(function () {
      const stub = this.stub(instance.modal, 'show')

      instance.show()

      expect(stub.calledOnce).to.be.true
    }))

    it('should focus on the alert button', sinon.test(function () {
      const button = { focus () {} }
      const spy = this.spy(button, 'focus')

      this.stub(instance.modal.content, 'querySelector').returns(button)

      instance.show()

      expect(spy.calledOnce).to.be.true
    }))
  })

  describe('@hide', () => {
    it('should hide the alert component', sinon.test(function () {
      instance.modal = { hide () {} }
      const stub = this.stub(instance.modal, 'hide')

      instance.hide()

      expect(stub.calledOnce).to.be.true
    }))
  })

  describe('@buildHtml', () => {
    let html

    beforeEach(() => {
      html = domParser(instance.buildHtml('string', 'string'))
    })

    it('should have the data-alert-text', () => {
      expect(html.querySelector('[data-alert-text]')).to.exist
    })

    it('should have the data-alert-button', () => {
      expect(html.querySelector('[data-alert-button]')).to.exist
    })
  })
})
