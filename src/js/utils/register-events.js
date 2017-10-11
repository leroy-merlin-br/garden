export default (elements, events, handler) => {
  elements.forEach(element => {
    events.forEach(event => {
      element.addEventListener(event, handler)
    })
  })
}
