export default () => {
  const eventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    msTransition: 'MsTransitionEnd',
    transition: 'transitionend'
  };

  let el = document.createElement('div');

  for (let transition in eventNames) {
    if (el.style[transition] !== undefined) {
      return eventNames[transition];
    }
  }
};
