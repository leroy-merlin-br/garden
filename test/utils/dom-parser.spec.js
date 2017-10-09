import domParser from '../../src/js/utils/dom-parser'

describe('domParser spec', () => {
  let elementString

  beforeEach(() => {
    elementString = '<span>sample text</span>'
  })

  it('should create a dom element', () => {
    const tempElement = domParser(elementString)
    expect(tempElement).to.be.an.instanceof(Element)
  })

  it('should throw a exception', () => {
    expect(domParser).to.throw(Error)
  })
})
