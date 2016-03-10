import $ from 'jquery';

const NAME = 'modal';

const templates = {
  modal: '<div class="modal"></div>',
  close: '<i class="modal-close glyph glyph-x"></i>',
  content: '<div class="modal-content"><div class="modal-body"></div></div>'
};

class Modal {
  constructor(element) {
    this._element = $(element);
    this._modal = $(templates.modal);
    this._content = $(templates.content);
    this._close = $(templates.close);

    this._content.append(this._close);
    this._modal.append(this._content);
  }

  init() {
    $('body').append(this._modal);
    this._fillModal();

    return this;
  }

  show() {
    this.bindListeners();
    this._showModal();
  }

  hide() {
    this.unbindListeners();
    this._hideModal();
  }

  destroy() {
    this._element.removeData(NAME);
    this._modal.remove();
  }

  bindListeners() {
    this._close.on('click', this.hide.bind(this));

    $(window).on('keyup', (event) => {
      if (event.which === 27) {
        console.log('esc');
        this.hide();
      }
    });
  }

  unbindListeners() {
    this._close.off('click');
    $(window).off('keyup');
  }

  _showModal() {
    this._modal.addClass('modal-enter');
    this._content.addClass('modal-content-enter');

    window.setTimeout(() => {
      this._modal.addClass('modal-show');
      this._content.addClass('modal-content-show');
    }, 200);
  }

  _hideModal() {
    this._content
    .removeClass('modal-content-show')
    .addClass('modal-content-leave');

    this._modal
      .removeClass('modal-show')
      .addClass('modal-leave');

    window.setTimeout(() => {
      this._modal.removeClass('modal-enter modal-leave');
      this._content.removeClass('modal-content-enter modal-content-leave');
    }, 200);
  }

  _fillModal() {
    this._content.find('.modal-body').append(this._element.html());
  }

}

/* istanbul ignore next */
$.fn[NAME] = function() {
  return this.each(function() {
    if (!$.data(this, NAME)) {
      $.data(this, NAME, new Modal(this).init());
    }
  });
};

export default Modal;
