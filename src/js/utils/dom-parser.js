export default (str) => {
  const templateString = str.trim()
  const pattern = /<(.|\n)*?>/g

  if (!pattern.test(templateString)) {
    return console.error('invalid parameters on domParser')
  }

  const container = document.createElement('div')
  container.innerHTML = templateString
  const domElement = container.firstElementChild

  return domElement
}
