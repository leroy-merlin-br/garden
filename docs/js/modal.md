---
title: Modal
layout: page.jade
sidebar: true
collection: js
priority: 3
path: modal
---

# Modal
<p class="lead">Modal component it's an empty container that you put any kind of content.</p>

## How to

Modal component allow users to choose which selector to use, you can use a simple `[data-whatever]` or a class. Be sure to not use class like: `.modal`, `.modal-content`, `.modal-body` to initiate modal. Modal has variable `height` based on his content and the `max-height` is `90%`.

You can initiate as a jQuery plugin:

```js
// using any selector
$('any-selector').modal(options);
```

or a vanilla constructor:

```js
import Modal from 'garden/src/js/components/modal';

new Modal(document.querySelectorAll('[data-modal]'), options);
```

And with the usage of `[data-modal]` as a selector, here is basic markup:

```html
<div data-modal>
  <div class="row">
    <div class="col-xs-12">
      <h2>Hello!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>
```

Based on this markup, the component will get all content inside of `[data-modal]` and append into `.modal-body`.

## Options

Modal provides some customizable options as: `container`, `size`, `triggerClose` and `triggerOpen`. The default of `.modal` is to be appended in the `body`, the `size` is 'medium', `triggerClose` and  `triggerOpen` are `null`.

| Option            | Default | Description |
|-------------------|-------------|
| container  | `"body"` | A new string selector to append `.modal` |
| size | `"medium"` | Modal sizes that can be "small", "large" or "medium" |
| triggerClose | `null` | A string selector to bind and call hide method when clicked |
| triggerOpen | `null` | A string selector to bind and call show method when clicked |
| static | false | When false insert the close icon and call hide method when clicked outside modal  |
| keyboard | true | Closes the modal when esc key is pressed |

Ex:

```js
let options = {
  container: '.wrapper',
  size: 'small',
  triggerClose: '[data-anything]',
  triggerOpen: '[data-another-thing]',
  static: false,
  keyboard: true
}

// as a jquery plugin
$('[data-modal]').modal(options);

// as a vanilla constructor
new Modal(document.querySelectorAll('[data-modal]'), options);
```

## Methods

`.show()`: manually opens modal and bind close icon and `esc` keyboard key by default.

`.hide()`: manually closes modal and unbind close icon and `esc` keyboard key.


## Working with modal

By default, modal don't provide any trigger to open it. Where's an example of how to create a button to open modal.

<div class="example example-code">
  <button class="button button-primary" data-trigger>Open Modal</button>
</div>

```js
let modal = $('[data-modal-trigger]').modal().data('modal');
let trigger = $('[data-trigger]');

trigger.on('click', () => {
  modal.show();
});
```
<div data-modal-trigger class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Trigger Modal example</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>

Once you called `show()`, `modal()` bind the close icon and `esc` keyboard key to hide modal.

To have a default open and close button, you can use `triggerOpen` and `triggerClose` and modal will delegate `click` event to these selector and call `show()` or `hide()` when click is fired. Example:

```js
$('[data-modal]').modal({
  triggerClose: '.any-selector',
  triggerOpen: '[data-trigger="open"]'
});
```

## Set Modal size

The modal has three predefined sizes that can be chosen, small, medium or large.

<div class="example example-code align-center">
  <button class="button button-primary" data-trigger-small="open">Open Small Modal</button>
  <button class="button button-primary" data-trigger-medium="open">Open Medium Modal</button>
  <button class="button button-primary" data-trigger-large="open">Open Large Modal</button>
</div>

```js
$('[data-modal]').modal({ size: 'small|medium|large' });
```

<div data-modal-small class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Small size example</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>

<div data-modal-medium class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Medium size example</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>

<div data-modal-large class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Large size example</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>

## Static modal

It's possible to use a modal in cases where a user interaction is mandatory before closing the modal.
With the `static` and `keyboard` options, you can turn off the options to close the modal.
You need to call the `.hide()` function manually.

<div class="example example-code">
  <button class="button button-primary" data-trigger-static="open">Open Static Modal</button>
</div>

```js
let modalStatic = $('[data-modal-static]').modal({
  static: true,
  keyboard: false
}).data('modal');

function closeModalStatic() {
  modalStatic.hide();
}
```

<div data-modal-static class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Static Modal example</h2>
      <p>Lorem ipsum dolor sit amet, you know how to close it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>
