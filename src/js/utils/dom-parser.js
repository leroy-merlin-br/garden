export default (str) => {
  const templateString = str.trim()
  const pattern = /<(.|\n)*?>/g

  if (!pattern.test(templateString)) {
    throw new Error('invalid parameters')
  }

  const container = document.createElement('div')
  container.innerHTML = templateString
  const domElement = container.firstElementChild

  return domElement
}
