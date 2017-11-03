import Jump from 'jump.js'

const NAME = 'scroll'
const DEFAULTS = {
  duration: 500,
  offset: -30
}

class Scroll {
  constructor (element, options) {
    this.element = element
    this.options = { ...DEFAULTS, ...options }
  }

  init () {
    this.jumpElement()
    this.registerComponent()
  }

  jumpElement () {
    this.scroll = new Jump(this.element, this.options)
  }

  registerComponent () {
    this.element.attributes.component = new Scroll(this.element, this.options)
  }
}

export default (element, options) => new Scroll(element, options).init()
export { Scroll }
