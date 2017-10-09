/**
 * Util responsible to handle animated scroll with the usage of a third party plugin called Jump.js.
 */
import Jump from 'jump.js'

const DEFAULTS = {
  duration: 500,
  offset: -30
}

/**
 * Default scroll method
 * @param  {element} element The element to scroll to.
 * @param  {object}  options The options available on Jump.js @method jump. Will extend from the DEFAULTS const.
 */
export default (element, options) => new Jump(element, { ...DEFAULTS, ...options })
