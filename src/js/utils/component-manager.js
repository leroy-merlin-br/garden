class ComponentManager {
  constructor (domElement, component) {
    if (this.isNodeElement(domElement)) {
      this.componentMap = new WeakMap()
      this.domElement = domElement
      this.component = component
    }
  }

  createComponent () {
    this.componentMap.set(this.domElement, Object.getPrototypeOf(this.component))
    return this.componentMap.get(this.domElement)
  }

  isNodeElement (element) {
    if (!element.nodeName) {
      throw new Error(`${element} isn't a DOM node`)
    }
    return true
  }

  destroy () {
    this.domElement.parentNode.removeChild(this.domElement)
    this.domElement = null
  }
}

export default ComponentManager
