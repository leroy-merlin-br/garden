/**
 * Util responsible to handle animated scroll with the usage of a third party plugin called Jump.js.
 */
import $ from 'jquery'
import Jump from 'jump.js'

/**
 * Default scroll method
 * @param  {element} el      The element to scroll to. Accepts both vanilla and $ selector
 * @param  {object}  options The options available on Jump.js @method jump. Will extend from the DEFAULTS const.
 */
export default (el, options) => {
  return new Jump(
    el instanceof $ ? el[0] : el,
    options
  )
}
