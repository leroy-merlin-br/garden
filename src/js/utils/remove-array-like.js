export default (arr, item) => {
  Array.prototype.splice.call(arr, Array.prototype.indexOf.call(arr, item));
};
