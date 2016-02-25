export default (fn, timer) => {
  let wait = true;

  return function(...args) {
    if (wait) {
      fn.apply(this, args);

      wait = false;

      setTimeout(() => wait = true, timer);
    }
  };
};
