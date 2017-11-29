const throttle = (fn, timer) => {
  let wait = true

  return function (...args) {
    if (wait) {
      fn.apply(this, args)

      wait = false

      setTimeout(() => {
        wait = true
        return wait
      }, timer)
    }
  }
}

/* istanbul ignore next */
export default throttle
export { throttle }
