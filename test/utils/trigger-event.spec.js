import triggerEvent from '../../src/js/utils/trigger-event'

describe('triggerEvent util', () => {
  let element

  beforeEach(() => {
    element = document.createElement('div')
  })

  it('should trigger the event passed as parameter', sinon.test(function () {
    const spy = this.spy(element, 'dispatchEvent')
    const eventName = 'click'
    const eventObject = new Event(eventName)

    triggerEvent(element, eventName)

    expect(spy.calledWith(eventObject)).to.be.true
  }))
})
