import $ from 'jquery';

const NAME = 'collapse';
const DEFAULTS  = {
  selector: 'data-target',
  listener: 'click',
  activeClass: 'active',
  visibleClass: 'visible'
};

class Collapse {
  constructor(element, options) {
    this.$element = $(element);

    this.options = $.extend({}, DEFAULTS, (options || {}));
  }

  init() {
    this.$toggle = $(this.$element.attr(this.options.selector));
    this.toggle = this.$toggle[0];

    this.setInitialState();
    this.bindListeners();

    return this;
  }

  setInitialState () {
    this.isCollapsed = !this.$toggle.hasClass(this.options.visibleClass);
    this.toggleHeight = this.toggle.scrollHeight;
  }

  bindListeners() {
    this.$element.on(this.options.listener, this.onElementClick.bind(this));
  }

  onElementClick() {
    this.isCollapsed ? this.showContent() : this.hideContent();
  }

  hideContent() {
    this.isCollapsed = true;

    this.toggle.style.maxHeight = '';
    this.$toggle.removeClass(this.options.visibleClass);
    this.$element.removeClass(this.options.activeClass);
  }

  showContent() {
    this.isCollapsed = false;

    this.toggle.style.maxHeight = `${this.toggleHeight}px`;
    this.$toggle.addClass(this.options.visibleClass);
    this.$element.addClass(this.options.activeClass);
  }
}

/* istanbul ignore next */
$.fn[NAME] = function(options) {
  options = options || {};

  return this.each(function() {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Collapse(this, options).init());
    }
  });
};

export default Collapse;
