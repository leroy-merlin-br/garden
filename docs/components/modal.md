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
<p class="lead">
  A modal is used as a dialog box that blocks the main view until the
  information or action required is provided.
</p>

## Summary
1. [Usage](#usage)
2. [Options](#options)
3. [Methods](#methods)
4. [Opening a modal](#opening-a-modal)
5. [Modal size](#modal-size)
6. [Static modal](#static-modal)
7. [History option](#history-option)

## Usage

The modal height varies according to its content, but it is limited to a `max-height` of `90%`.  
You can use a data attribute or a class name as the modal selector, as described in the example below.

You can initiate it as a jQuery plugin:

```js
// using any selector
$('any-selector').modal(options);
```

or a vanilla constructor:

```js
import Modal from 'garden/src/js/components/modal';

// using [data-modal] as the selector
new Modal(document.querySelectorAll('[data-modal]'), options);
```

Here is a snippet of a modal block that uses a data attribute as its selector.

```html
<div data-modal>
  <div class="row">
    <div class="col-xs-12">
      <h2>Hello!</h2>
      <p>This is a simple modal example.</p>
    </div>
  </div>
</div>
```
Based on this markup, the component will get all content inside of `[data-modal]` and append it into `.modal-body`.

<p class="notification notification-warning">
  Note that you should not use classes such as: .modal, .modal-content, and .modal-body to initiate a modal.
</p>

### Options

Modal provides some customizable options such as: `container`, `size`, `triggerClose`, and `triggerOpen`. The default values for each option are described below.

| Option            | Default | Description |
|-------------------|-------------|
| container  | `"body"` | A new string selector in which the modal component will be appended |
| size | `"medium"` | Possible values are: small, large, and medium |
| triggerClose | `null` | A string selector to bind and call hide method when clicked |
| triggerOpen | `null` | A string selector to bind and call show method when clicked |
| static | false | When false, a close icon is inserted and the hide method is called when a user clicks outside the modal  |
| keyboard | true | Closes the modal when the ESC key is pressed |
| history | false | When true, the behavior of the back button is to close the modal instead of sending the user to the previous page |

Below is an example on how you can pass those options to the modal component.

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

// or

// as a vanilla constructor
new Modal(document.querySelectorAll('[data-modal]'), options);
```

### Methods

| Method     | Description |
|------------|-----------------------|
| `show()`     | Manually opens the modal and bind a close icon and the ESC key action by default |
| `hide()`     | Manually closes the modal and unbind the close icon and the ESC key action |

### Opening a modal

By default, the modal component does not provide any opening trigger element. To achieve that you can create a button, as shown in the example below.

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

 To setup a default opening and closing button, you can use the `triggerOpen` and `triggerClose` options. With that, the  modal will register a `click` event to those selectors and call `show()` or `hide()` when the click event is fired.

```js
$('[data-modal]').modal({
  triggerClose: '.any-selector',
  triggerOpen: '[data-trigger="open"]'
});
```

### Modal size

As stated before, the modal has three predefined sizes: small, medium, or large.  
Click in each button below to check each modal size.

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
      <h2>Small size modal</h2>
      <p>This is an example of a small modal.</p>
    </div>
  </div>
</div>

<div data-modal-medium class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Medium size modal</h2>
      <p>This is an example of a medium modal.</p>
    </div>
  </div>
</div>

<div data-modal-large class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Large size modal</h2>
      <p>This is an example of a large modal.</p>
    </div>
  </div>
</div>

### Static modal

With the `static` and `keyboard` attributes, you can turn off the options to close a modal.
With that, users would have to interact with the modal before closing it.

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

<p class="notification notification-warning">
  Note that to close the modal you need to call the `.hide()` function manually after the user interaction.
</p>

<div data-modal-static class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Static Modal example</h2>
      <p>You know how to close it.</p>
    </div>
  </div>
</div>

### History option

 With the history option activated, whenever the modal is closed, either by pressing the back button, clicking outside the modal, or in the close button, the user is sent back to the current page instead of the previous page, as it would normally behave.

 The default value for this option is `false`, so in order to change that behavior you only need to initiate the option as `true`.

 <div class="example example-code">
   <button class="button button-primary" data-trigger-history="open">Open History Modal</button>
 </div>

 <div data-modal-history class="hide">
   <div class="row">
     <div class="col-xs-12">
       <h2>History modal</h2>
       <p>Now if you close the modal by pressing on the back button you will be sent to the current page instead of the previous one.</p>
     </div>
   </div>
 </div>


```js
let modal = $('[data-modal]').modal({
  history: true
})
```
