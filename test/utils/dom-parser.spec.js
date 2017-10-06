import domParser from '../../src/js/utils/dom-parser'

describe.only('dom parser spec', () => {
  let elementString

  beforeEach(() => {
    elementString = '<span>sample text</span>'
  })

  it('should create a dom element', () => {
    const tempElement = domParser(elementString)
    expect(tempElement.firstChild).to.be.an.instanceof(Element)
  })

  it('should not create a dom element', () => {
    expect(domParser).to.throw(Error)
  })
})
