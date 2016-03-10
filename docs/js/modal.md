---
title: Modal
layout: page.jade
sidebar: true
collection: js
priority: 3
path: modal
---

# Modal
<p class="lead">Modal component is an empty container that you put any kind of content.</p>

By default, you can close modal using the close icon inside or by using `esc` key.

## How to

Modal component allow users to choose witch selector to use, you can use a simple `data-whatever` or a class. Be sure to not use class like: `.modal`, `.modal-content`, `.modal-body` to initiate modal.

```js
$('[data-modal]').modal();

// or

$('.modal-wrapper').modal();
```

When you call `.modal()` instance, it create `.modal` element and append into DOM.


Example:

<button class="button button-primary" data-trigger="open-modal">Open Modal</button>

<div data-modal class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>hello</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button class="button button-primary">Ok</button>
    </div>
  </div>
</div>

```html
<div data-modal class="hide">
  <div class="row">
    <div class="col-xs-12">
      <h2>Hello!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</div>
```
