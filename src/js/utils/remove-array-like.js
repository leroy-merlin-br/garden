export default (arr, item) => {
  Array.from(arr).splice(Array.from(arr).indexOf(item))
}
