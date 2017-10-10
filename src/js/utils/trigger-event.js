export default (el, type) => {
  if ('createEvent' in document) {
    // modern browsers, IE9+
    const e = document.createEvent('HTMLEvents')
    e.initEvent(type, false, true)
    el.dispatchEvent(e)
  } else {
    // IE 8
    const e = document.createEventObject()
    e.eventType = type
    el.fireEvent(`on${e.eventType}`, e)
  }
}
