const transitionEnd = () => {
  const eventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    msTransition: 'MsTransitionEnd',
    transition: 'transitionend'
  }

  const el = document.createElement('div')

  for (let transition in eventNames) {
    if (el.style[transition] !== undefined) {
      return eventNames[transition]
    }
  }
}

/* istanbul ignore next */
export default transitionEnd
export { transitionEnd }
