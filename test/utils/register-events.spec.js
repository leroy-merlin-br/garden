import registerEvents from '../../src/js/utils/register-events'

describe('registerEvents util', () => {
  it('should add events to given elements', sinon.test(function () {
    const spy = this.spy()
    const eventsArray = ['click']
    const elementsArray = [document.createElement('div')]
    const event = document.createEvent('HTMLEvents')

    event.initEvent(eventsArray[0], false, true)

    registerEvents(elementsArray, eventsArray, spy)

    elementsArray[0].dispatchEvent(event)

    expect(spy.called).to.be.true
  }))
})
