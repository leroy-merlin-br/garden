export default (elements, events, handler) => {
  Array.prototype.forEach.call(elements, element => {
    events.forEach(event => {
      element.addEventListener(event, handler)
    })
  })
}
