import $ from 'jquery';
import transitionEnd from '../utils/transitionend-checker';

const NAME = 'notification';

const DEFAULTS = {
  autoHide: false,
  closeButton: `.${NAME}-close`,
  dynamic: true,
  hideIn: 3000,
  message: null,
  showIn: 1000,
  type: 'primary',
};

const classNames = {
  hide: `${NAME}-hide`,
  show: `${NAME}-show`,
  enter: `${NAME}-enter`,
  leave: `${NAME}-leave`,
  close: `${NAME}-close`
};

const templates = {
  box: `<div class="${NAME} ${classNames.enter}"></div>`,
  close: `<i class="${classNames.close} glyph glyph-x"></i>`
};


class Notification {
  constructor(element, options) {
    this._element = (element instanceof $) ? element : $(element);
    this._options = $.extend({}, DEFAULTS, options);
    this.transitionEndEvent = transitionEnd();
  }

  /**
   * Init notification, insert notifiction into DOM, bind close button and
   * show notifiction based on showIn config
   */
  init() {
    this._createNotification();
    this.bindListeners();

    if (!this._options.dynamic) {
      return this;
    }

    window.setTimeout(() => {
      this.show();
    }, this._options.showIn);

    return this;
  }

  /**
   * Bind close button
   */
  bindListeners() {
    this.closeHandler = () => {
      this.hide();
    };

    this._element.on('click', this._options.closeButton, this.closeHandler);
  }

  /**
   * show notification, if autoHide is true, hide box after hideIn timing config
   */
  show() {
    this.box
      .addClass(classNames.show)
      .removeClass(classNames.hide);

    if (this._options.autoHide) {
      window.setTimeout(() => {
        this.hide();
      }, this._options.hideIn);
    }
  }

  /**
   * hide notification and after hide animation finish, add display: none to element
   */
  hide() {
    this.box.removeClass(classNames.show).addClass(classNames.leave);

    this.box.on(this.transitionEndEvent, () => {
      this.box
        .addClass(classNames.hide)
        .removeClass(classNames.enter)
        .removeClass(classNames.leave);
    });
  }

  /**
   * Remove data from _element, unbind close button and remove box from DOM
   */
  destroy() {
    this._element.removeData(NAME);
    this.close.off('click', this.closeHandler);
    this.box.remove();
  }

  /**
   * Add notification class, append close button and message
   */
  _createNotification() {

    if (!this._options.dynamic) {
      this.box = this._element;
      this._closeButton();

      return;
    }

    if (!this._options.message) {
      return;
    }

    this.box = $(templates.box);
    this.box.addClass(`${NAME}-${this._options.type}`);
    this.box.html(this._options.message);

    this._closeButton();
    this._element.append(this.box);
  }

  _closeButton() {
    if (!this._options.dynamic) {
      return this.close = this.box.find(this._options.closeButton);
    }

    this.close = $(templates.close);
    this.box.append(this.close);
  }
}

/* istanbul ignore next */
$.fn[NAME] = function(options) {
  options = options || {};

  return this.each(function() {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Notification(this, options).init());
    }
  });
};

export default Notification;
