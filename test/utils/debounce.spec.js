import debounce from '../../src/js/utils/debounce'

describe('debounce spec', () => {
  it('should execute the provided function only once', sinon.test(function () {
    let spy = this.spy()
    let timer = 700

    debounce(spy, timer)()

    this.clock.tick(timer)

    expect(spy.calledOnce).to.be.true
  }))

  it('should execute the provided function only once, even if called more than it', sinon.test(function() {
    let spy = this.spy()
    let timer = 700
    let ref = debounce(spy, timer)

    ref()
    ref()

    this.clock.tick(timer)

    expect(spy.calledOnce).to.be.true
  }))

  it('should executed with the provided arguments', sinon.test(function () {
    let spy = this.spy()
    let timer = 700

    debounce(spy, timer)('foo')

    this.clock.tick(timer)

    expect(spy.calledWith('foo')).to.be.true
  }))
})
