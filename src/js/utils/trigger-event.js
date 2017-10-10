export default (el, type) => {
  let e

  if ('createEvent' in document) {
    // modern browsers, IE9+
    e = document.createEvent('HTMLEvents')
    e.initEvent(type, false, true)

    return el.dispatchEvent(e)
  }

  // IE 8
  e = document.createEventObject()
  e.eventType = type

  return el.fireEvent(`on${e.eventType}`, e)
}
