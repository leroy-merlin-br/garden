export default (elements, events, handler) => {
  Array.from(elements).forEach(element => {
    events.forEach(event => {
      element.addEventListener(event, handler)
    })
  })
}
