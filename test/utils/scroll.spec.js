import $ from 'jquery'
import scroll, { SCROLL as instance } from '../../src/js/utils/scroll'

describe('scroll spec', () => {
  const DEFAULTS = {
    duration: 500,
    offset: -30
  }

  const ELEMENT = document.createElement('div')
  const $ELEMENT = $('<div />')

  it('should call instance.jump with the defaults', sinon.test(function() {
    this.spy(instance, 'jump')

    scroll(ELEMENT)

    expect(instance.jump.calledWith(ELEMENT, DEFAULTS))
  }))

  it('should call unwrap the jQuery instance', sinon.test(function() {
    this.spy(instance, 'jump')

    scroll($ELEMENT)

    expect(instance.jump.calledWith($ELEMENT, DEFAULTS))
  }))
})
