const debounce = (fn, timer) => {
  let timeout

  return function (...args) {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, timer)
  }
}

/* istanbul ignore next */
export default debounce
export { debounce }
