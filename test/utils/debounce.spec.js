import debounce from '../../src/js/utils/debounce'

describe('debounce util', () => {
  it('should execute the provided function only once', sinon.test(function () {
    const spy = this.spy()
    const timer = 700

    debounce(spy, timer)()

    this.clock.tick(timer)

    expect(spy.calledOnce).to.be.true
  }))

  it('should execute the provided function only once, even if called more than that', sinon.test(function () {
    const spy = this.spy()
    const timer = 700
    const ref = debounce(spy, timer)

    ref()
    ref()

    this.clock.tick(timer)

    expect(spy.calledOnce).to.be.true
  }))

  it('should executed with the provided arguments', sinon.test(function () {
    const spy = this.spy()
    const timer = 700

    debounce(spy, timer)('foo')

    this.clock.tick(timer)

    expect(spy.calledWith('foo')).to.be.true
  }))
})
