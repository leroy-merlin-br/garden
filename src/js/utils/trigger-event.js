export default (element, type) => {
  const event = document.createEvent('HTMLEvents')
  event.initEvent(type, false, true)

  return element.dispatchEvent(event)
}
