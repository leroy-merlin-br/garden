export default (fn, timer) => {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, timer);
  };
};
