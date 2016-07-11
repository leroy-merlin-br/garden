/**
 * Util responsible to handle animated scroll with the usage of a third party plugin called Jump.js.
 */
import $ from 'jquery'

import Jump from 'jump.js/src/jump'

const SCROLL = new Jump()

/**
 * Default scroll method
 * @param  {element} el      The element to scroll to. Accepts both vanilla and $ selector
 * @param  {object}  options The options available on Jump.js @method jump. Will extend from the DEFAULTS const.
 */
export default (el, options) => {
  return SCROLL.jump(
    el instanceof $ ? el[0] : el,
    options
  )
}

export { SCROLL }
