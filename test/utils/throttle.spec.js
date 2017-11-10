import throttle from '../../src/js/utils/throttle'

describe('throttle util', () => {
  it('should execute the throttled function based on the provided timer', sinon.test(function () {
    const spy = this.spy()
    const timer = 100
    const ref = throttle(spy, timer)
    const interval = setInterval(ref, 50)

    this.clock.tick(150)

    clearInterval(interval)

    expect(spy.calledOnce).to.be.true
  }))

  it('should executed the throttled function with the provided arguments', sinon.test(function () {
    const spy = this.spy()
    const timer = 100

    throttle(spy, timer)('foo')

    this.clock.tick(timer)

    expect(spy.calledWith('foo')).to.be.true
  }))
})
