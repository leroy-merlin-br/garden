/**
 * Scroll component. There is no need to create a new instance to it, since it won't listen to events,
 * nor anything dynamic.
 */
import $ from 'jquery'
import scroll from '../utils/scroll'

const NAME = 'scroll'

const DEFAULTS = {
  duration: 500,
  offset: -30
}

/* istanbul ignore next */
$.fn[NAME] = function (options) {
  options = options || {}

  return this.each(function () {
    scroll(
      this,
      $.extend({}, DEFAULTS, (options || {}))
    )
  })
}
