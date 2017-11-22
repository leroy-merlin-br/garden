const removeArrayLike = (arr, item) => {
  const newArray = Array.from(arr)
  const itemIndex = newArray.indexOf(item)

  if (itemIndex >= 0) {
    newArray.splice(itemIndex, 1)
  }

  return newArray
}

/* istanbul ignore next */
export default removeArrayLike
export { removeArrayLike }
