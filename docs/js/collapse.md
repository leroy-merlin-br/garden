---
title: Collapse
layout: page.jade
sidebar: true
collection: js
priority: 0
path: collapse
---

# Collapse
<p class="lead">Collapse is a component responsible to toggle the visibility of an element

## How to use
You can set the element to be toggled using the `[data-target="selector"]` on the provided element.

<div class="example example-code">
  <button class="button button-primary toggle" data-target="#closed">
    Toggle content
  </button>

  <div class="collapse" id="closed">
    <p>Content</p>
  </div>
</div>

```html
<button class="toggle" data-target=".collapse">...</button>

<div class="collapse"> <!-- content wrapper -->
  ... <!-- content to be displayed -->
</div>
```

As a jQuery plugin:

```js
$('.toggle').collapse();
```

or a vanilla constructor:

```js
import Collapse from 'garden/src/js/components/collapse';

new Collapse(document.querySelector('.toggle'));
```


## How it works
The component will first check if the provided target is visible (using the visibleClass of the options), and set the targetMaxHeight to it, to allow a smooth transition to happen.

The `.collapse` class is *required* in order to properly show/hide the target. It's good practice to avoid styling it, since the component relies on `scrollHeight` to retrieve the target's height.

Once the target is visible, the component element will receive the `instance.options.activeClass`, and the target will receive `instance.options.visibleClass`.

If you want to set the initial state of component, all you have to do is add both classes to both elements (`active` and `visible`, by default):

<div class="example example-code">
  <button class="button button-primary toggle active" data-target="#open">
    Toggle content
  </button>

  <div class="collapse visible visible-collapse" id="open">
    <p>Content</p>
  </div>
</div>

```html
<button class="toggle active" data-target=".collapse">...</button>

<div class="collapse visible"> <!-- content wrapper -->
  ... <!-- content to be displayed -->
</div>
```

```js
$('.toggle').collapse();
```

## Options

| Option            | Description |
|-------------------|-------------|
| selector ([data-target])  | The instance.$element's attribute to use as query for the target element |
| listener (click) | Event to listen to on the instance.$element |
| activeClass (active) | The class the instance.$element receives when the instance.$toggle is visible |
| visibleClass (visible) | The class the instance.$toggle receives when the instance.$toggle is visible |

Ex:

```js
let options = {
  selector: '[data-foo]',
  listener: 'change',
  activeClass: 'button-active',
  visibleClass: 'not-hidden',
}

// as a jquery plugin
$('[data-collapse]').collapse(options);

// as a vanilla constructor
new Collapse(document.querySelectorAll('[data-collapse]'), options);
```

## Methods

| Method            | Description |
|-------------------|-------------|
| toggleTarget  | Will toggle the current state of the instance.$toggle |
| showTarget | Will show the instance.$toggle |
| hideTarget | Will hide the instance.$toggle |

## Working with events

You can also listen to toggle state changes using the [emitter](emitter.html):

```js
import emitter from 'garden/src/js/utils/emitter';

// the first argument is the instance.$element (the trigger), and the second is the instance.$target (the element to be toggled)
emitter.on('collapse:show', ($element, $target) => {
  $element.text('Close content');
});

emitter.on('collapse:hide', ($element, $target) => {
  $element.text('Hide content');
});
```
