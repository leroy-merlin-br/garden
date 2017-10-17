export default (element, type, options = {}) => {
  const event = new Event(type, options)

  return element.dispatchEvent(event)
}
