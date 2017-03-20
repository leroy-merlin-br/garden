---
title: Collapse
layout: page.jade
sidebar: true
collection: docs
priority: 0
path: collapse
section: js
---

# Collapse
<p class="lead">
  A collapse is responsible for toggling the visibility of an element.
</p>

## Summary
1. [Usage](#usage)
2. [Initial state](#initial-state)
3. [Options](#options)
4. [Methods](#methods)
5. [Events](#events)

## Usage

You can set an element to be toggled by adding the `[data-target="selector"]` to it.

<div class="example example-code">
  <button class="button button-primary toggle" data-target="#container-1">
    Toggle content
  </button>

  <div class="collapse" id="container-1">
    <p>Content</p>
  </div>
</div>

```html
  <button class="button button-primary toggle" data-target="#container">
    Toggle content
  </button>

  <div class="collapse" id="container">
    <p>Content</p>
  </div>
```
<p class="notification notification-warning">
  The `.collapse` class is *required* to properly show or hide the target.
  Also, you should avoid styling it, since the component relies on `scrollHeight` to retrieve the target element height.
</p>

After that you can initiate the component as a jQuery plugin:

```js
$('.toggle').collapse();
```

Or as a vanilla constructor:

```js
import Collapse from 'garden/src/js/components/collapse';

new Collapse(document.querySelector('.toggle'));
```

If the target provided is visible, the component element will receive the
`activeClass` informed, and the target will receive the class passed in the `visibleClass` option.

### Initial state

To set the initial state of the component, you have to add the `.active` and `.visible` classes to the element and to its target, respectively.

<div class="example example-code">
  <button class="button button-primary toggle active" data-target="#container-2">
    Toggle content
  </button>

  <div class="collapse visible visible-collapse" id="container-2">
    <p>Content</p>
  </div>
</div>

```html
  <button class="button button-primary toggle active" data-target="#container">
    Toggle content
  </button>

  <div class="collapse visible visible-collapse" id="container">
    <p>Content</p>
  </div>
```

```js
$('.toggle').collapse();
```

### Options

| Option            | Description |
|-------------------|-------------|
| selector ([data-target])  | The attribute to use as query for the target element |
| listener (click) | The event to be listened to on the element |
| activeClass (active) | The class the element receives when the target is visible |
| visibleClass (visible) | The class the target receives when it is visible |

Below is how you can pass options to the component.

```js
let options = {
  selector: '[data-something]',
  listener: 'change',
  activeClass: 'button-active',
  visibleClass: 'not-hidden',
}

// as a jquery plugin
$('[data-collapse]').collapse(options);

// as a vanilla constructor
new Collapse(document.querySelectorAll('[data-collapse]'), options);
```

### Methods

| Method            | Description |
|-------------------|-------------|
| `toggleTarget()`  | Toggle the current state of the target element |
| `showTarget()` | Show the target element |
| `hideTarget()` | Hide the target element |

### Events

You can also listen to toggle state changes using the [emitter](emitter.html) component, as described below.

```js
import emitter from 'garden/src/js/utils/emitter';

// the first argument is the instance.$element (the trigger)
// the second argument is the instance.$target (the element to be toggled)
emitter.on('collapse:show', ($element, $target) => {
  $element.text('Close content');
});

emitter.on('collapse:hide', ($element, $target) => {
  $element.text('Hide content');
});
```
