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

Modal component allow users to choose which selector to use, you can use a simple `[data-whatever]` or a class. Be sure to not use class like: `.modal`, `.modal-content`, `.modal-body` to initiate modal.

You can initiate as a jQuery plugin:

```js
// using a data-*
$('[data-modal]').modal(options);

// using a class
$('.modal-wrapper').modal(options);
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

Modal provides two customizable options, that is `container` and `triggerClose`. By default, `.modal` is appended in body and `triggerClose` is null.

| Option            | Description |
|-------------------|-------------|
| container (body)  | A new string selector to append `.modal` |
| triggerClose (null) | A string selector to bind and call hide method when clicked |

Ex:

```js
let options = {
  container: '.wrapper',
  triggerClose: '[data-anything]'
}

// as a jquery plugin
$('[data-modal]').modal(options);

// as a vanilla constructor
new Modal(document.querySelectorAll('[data-modal]'), options);
```

## Methods

`.show()`: manually opens modal and bind close icon and `esc` keyboard key.

`.hide()`: manually closes modal and unbind close icon and `esc` keyboard key.

## Working with modal

By default, modal don't provide any trigger to open it. Where's an example of how to create a button to open modal.

```html
<button data-trigger>Open Modal</button>
```

```js
let modal = $('[data-modal]').modal(),
    trigger = $('[data-trigger]');

trigger.on('click', () => {
  modal.show();
});
```
Once you called `show()`, `modal()` bind the close icon and `esc` keyboard key to hide modal.

If you want that a button inside `.modal` close itself, add option `triggerClose` with a string selector. Modal will delegate `click` to selector and call `hide()` when click is fired.

```js
let modal = $('[data-modal]').modal({
      triggerClose: '.any-selector'
    }),
    triggerOpen = $('[data-trigger="open"]');

triggerOpen.on('click', () => {
  modal.show();
});
```
Working Example:

<button class="button button-primary" data-trigger="open">Open Modal</button>

<div data-modal class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>hello</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button class="button button-primary" data-trigger="close">Close</button>
    </div>
  </div>
</div>
