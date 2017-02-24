---
title: Modal
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: modal
section: js
---

# Modal
<p class="lead">Modal component it's an empty container that you put any kind of content.</p>

## How to

Modal component allows users to choose which selector to use, you can use a simple `[data-whatever]` or a class. Be sure to not use classes such as: `.modal`, `.modal-content`, and `.modal-body` to initiate a modal. Modal has variable `height` based on it content and the `max-height` is `90%`.

You can initiate it as a jQuery plugin:

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

Modal provides some customizable options such as: `container`, `size`, `triggerClose`, and `triggerOpen`. The default container option for the `.modal` class is to be appended in the `body`, the `size` is 'medium', `triggerClose`, and  `triggerOpen` are `null`.

| Option            | Default | Description |
|-------------------|-------------|
| container  | `"body"` | A new string selector in which the modal component will be appended |
| size | `"medium"` | The modal size may vary between small, large, or medium |
| triggerClose | `null` | A string selector to bind and call hide method when clicked |
| triggerOpen | `null` | A string selector to bind and call show method when clicked |
| static | false | When false insert the close icon and call hide method when clicked outside modal  |
| keyboard | true | Closes the modal when esc key is pressed |
| history | false | When true the behavior of the back button is to close the modal instead of sending the user to the previous page |

Ex:

```js
let options = {
  container: '.wrapper',
  size: 'small',
  triggerClose: '[data-anything]',
  triggerOpen: '[data-another-thing]',
  static: false,
  keyboard: true,
  history: true
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

By default, modal doesn't provide any trigger to open it. Here's an example of how to create a button to open a modal.

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

 In order to have a default open and close button, you can use `triggerOpen` and `triggerClose`, the  modal will delegate `click` event to those selectors and call `show()` or `hide()` when the click event is fired. Example:

```js
$('[data-modal]').modal({
  triggerClose: '.any-selector',
  triggerOpen: '[data-trigger="open"]'
});
```

## Set Modal size

The modal has three predefined sizes: small, medium, or large.

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

## Changing the back button behavior

There are cases in which users click the back button in order to close the modal and remain in the same page. Thus, the `history` option allows users to do just that. It works by creating a new state in the browser history after the modal is showed on the page. When the modal is closed, either by pressing the back button, clicking outside the modal, or in the close button, the user is sent to the previous browser state, which happens to be the same page he is currently at.

The default value for this option is `false`, so in order to change that behavior you only need to initiate the option as `true`.

```js
let modal = $('[data-modal]').modal({
  history: true
})
```
