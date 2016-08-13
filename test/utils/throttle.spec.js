import throttle from '../../src/js/utils/throttle'

describe('throttle spec', () => {
  it('should execute the throttled function based on the provided timer', sinon.test(function() {
    let spy = this.spy()
    let timer = 100
    let ref = throttle(spy, timer)
    let interval = setInterval(ref, 50)

    this.clock.tick(150)

    clearInterval(interval)

    expect(spy.calledOnce).to.be.true
  }))

  it('should executed the throttled function with the provided arguments', sinon.test(function() {
    let spy = this.spy()
    let timer = 100

    throttle(spy, timer)('foo')

    this.clock.tick(timer)

    expect(spy.calledWith('foo')).to.be.true
  }))
})
