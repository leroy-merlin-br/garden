import $ from 'jquery';

import throttle from '../utils/throttle';
import removeFromArray from '../utils/remove-array-like';

const NAME     = 'lazyload';
const DEFAULTS = {
  throttle: 1000,
  offset: 200,
  selector: 'data-lazy'
};

class LazyLoad {
  constructor(element, options) {
    options = $.extend({}, DEFAULTS, options || {});

    this._element = $(element);
    this._options = options;
  }

  init() {
    this.bindListeners();
    this.checkVisiblePlaceholders();

    return this;
  }

  bindListeners() {
    this.onScrollHandler = throttle(this.onScroll.bind(this), this._options.throttle);
    $(window).on('scroll', this.onScrollHandler);
  }

  onScroll() {
    return this._element.length ? this.checkVisiblePlaceholders() : $(window).off('scroll', this.onScrollHandler);
  }

  checkVisiblePlaceholders() {
    this.windowHeight = $(window).height();
    this.windowWidth  = $(window).width();

    Array.prototype.forEach.call(this._element, this.checkPlaceholder.bind(this));
  }

  checkPlaceholder(placeholder) {
    if (this.isPlaceholderVisible(placeholder)) {
      this.renderImage(placeholder);
      removeFromArray(this._element, placeholder);
    }
  }

  isPlaceholderVisible(placeholder) {
    return placeholder.getBoundingClientRect().top <= (this.windowHeight + this._options.offset);
  }

  renderImage(placeholder) {
    placeholder.parentNode.replaceChild(this.createImage(placeholder), placeholder);
  }

  createImage(placeholder) {
    let image = document.createElement('img');

    this.parseAttributes(image, placeholder.attributes);

    image.removeAttribute('data-lazy');

    if (placeholder.getAttribute('data-srcset')) {
      this.parseBreakpoints(image, placeholder.getAttribute('data-srcset'));

      return image;
    }

    image.src = placeholder.getAttribute('data-src');

    return image;
  }

  parseAttributes(image, attributes) {
    Array.prototype.forEach.call(attributes, (attr) => {
      if (attr.name !== this._options.selector || attr.name !== 'data-srcset' || attr.name !== 'data-src') {
        image.setAttribute(attr.name, attr.value);
      }
    });

    return image;
  }

  parseBreakpoints(image, breakpoints) {
    image.removeAttribute('data-srcset');

    breakpoints = breakpoints.split(',').map(breakpoint => {
      breakpoint = breakpoint.trim().split(' ');

      return {
        src: breakpoint[0],
        width: breakpoint[1]
      };
    })
    .sort((a, b) => b.width - a.width);

    for (let i = 0; i < breakpoints.length; i++) {
      let breakpoint = breakpoints[i];

      if (breakpoint.width <= this.windowWidth) {
        image.src = breakpoint.src;
        break;
      }
    }

    return image;
  }

  destroy() {
    $(window).off('scroll', this.onScrollHandler);
  }
}

/* istanbul ignore next */
$.fn[NAME] = function(options) {
  options = options || {};

  return this.each(function() {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new LazyLoad(this, options).init());
    }
  });
};

export default LazyLoad;
