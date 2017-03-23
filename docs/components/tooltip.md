---
title: Tooltip
layout: page.jade
sidebar: true
collection: docs
priority: 1
path: tooltip
section: js
---

# Tooltip
<p class="lead">
  The tooltip component is used to display a short description when the mouse is over a specific element.
</p>

## Usage

To create a tooltip, you need to add the `[data-tooltip]` attribute to the target element, along with the selector of the element you will use as the tooltip.

The selector used can either be a class name, a data attribute, or an ID, as in the example below.

<div class="example example-code">
  <div class="button" data-tooltip="#awesome-tooltip">
    Button with tooltip
    <div id="awesome-tooltip" class="tooltip">
      <strong>This is a basic tooltip</strong>
    </div>
  </div>
</div>

```html
<div class="button" data-tooltip="#awesome-tooltip">
  Button with tooltip
  <div id="awesome-tooltip" class="tooltip">
    <strong>This is a basic tooltip</strong>
  </div>
</div>
```

<p class="notification notification-warning">
  Note that to style the tooltip element you should add the `.tooltip` class to it.
</p>

You can use the component as a jQuery plugin:

```js
$('[data-tooltip]').tooltip();
```

Or as a vanilla constructor:

```js
 import Tooltip from 'garden/src/js/components/tooltip'

 let options = {
   placement: 'bottom'
 }

 new Tooltip(document.querySelector('.some-selector'), options)
```

As you noticed in the example above, the `Tooltip` constructor receives two parameters. The first one is the target element, and the second is an object with the options described below. You can also use the available options from [popper.js](https://popper.js.org/documentation.html#new_Popper) \*.

### Options

These are the options you can use to customize your tooltip.

| Option            | Type | Default | Description |
|-------------------|-------------|
| placement  | String | `'top'` | A tooltip can be positioned at the `'top'`, `'bottom'`, `'left'`, or `'right'` |
| offset | Number | `0` | Amount of pixels the tooltip will be shifted |


\*
<small>
  This component uses the [popper.js](http://popper.js.org/) library to deal with positioning issues.
</small>
