import domParser from '../../src/js/utils/dom-parser'

describe('domParser util', () => {
  let elementString

  beforeEach(() => {
    elementString = '<span>sample text</span>'
  })

  context('when calling domParser function with correct parameters', () => {
    it('should create a dom element', () => {
      const tempElement = domParser(elementString)

      expect(tempElement).to.be.an.instanceof(Element)
    })
  })

  context('when calling domParser function with incorrect parameters', () => {
    it('should throw a console.error', sinon.test(function () {
      const stub = this.stub(console, 'error')

      domParser('123')

      expect(stub.calledWith('invalid parameters on domParser')).to.be.true
    }))
  })
})
