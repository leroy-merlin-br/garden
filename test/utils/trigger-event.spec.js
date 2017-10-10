import triggerEvent from '../../src/js/utils/trigger-event'

describe('triggerEvent util', () => {
  let element

  beforeEach(() => {
    element = document.createElement('div')
  })

  it('should trigger the event passed as parameter', sinon.test(function () {
    const spy = this.stub(element, 'dispatchEvent')
    const eventObject = document.createEvent('HTMLEvents')
    const eventName = 'click'

    eventObject.initEvent(eventName, false, true)

    triggerEvent(element, eventName)

    expect(spy.calledWith(eventObject)).to.be.true
  }))
})
