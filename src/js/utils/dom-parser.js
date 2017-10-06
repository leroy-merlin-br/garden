export default (str) => {
  const templateString = str.trim()
  const pattern = /<(.|\n)*?>/g

  if (!pattern.test(templateString)) {
    throw new Error('invalid parameters')
  }

  let domElement = document.createElement('div')
  domElement.innerHTML = templateString

  return domElement
}
