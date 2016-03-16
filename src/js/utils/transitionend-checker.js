export default () => {
  const eventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  let el = document.createElement('div'),
    transition;

  for (transition in eventNames) {
    if (el.style[transition] !== undefined) {
      return eventNames[transition];
    }
  }
};
