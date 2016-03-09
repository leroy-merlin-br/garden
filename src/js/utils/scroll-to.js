import animationFrame from './animation-frame';

export default (el) => {
  const easing   = (pos) => Math.sin(pos * (Math.PI / 2));
  let position = el.getBoundingClientRect().top;
  let distance = position > 0 ? position : window.scrollY + position;
  let time     = Math.max(.1, Math.min(Math.abs(window.scrollY - distance) / 2000, .8));
  let current  = 0;

  (function tick() {
    current += 1 / 60;

    let elapsed = current / time;

    if (elapsed > 1) {
      return window.scrollTo(0, distance);
    }

    animationFrame(tick);
    window.scrollTo(0, scrollY + ((distance - window.scrollY) * easing(elapsed)));
  })();

};
