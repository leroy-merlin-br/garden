---
title: Tooltip
layout: page.jade
sidebar: true
collection: js
priority: 1
path: tooltip
---

# Tooltip
<p class="lead">
  The tooltip component is used to display a short description about something when the mouse is over a target element.
</p>

## How to

To use the tooltip component, you need to add `[data-tooltip='#some-selector']` to the target element (you can use a class name, an id or a data attribute). The selector inserted should be present inside the target element, it'll be the tooltip itself. An important thing to note is that in order to get the tooltip styles, your tooltip element should have the class `.tooltip`.

This component uses the [popper.js](http://popper.js.org/) library to deal with the positioning.

<div class="example example-code">
  <div class="button" data-tooltip="#awesome-tooltip">
    Button with tooltip
    <div id="awesome-tooltip" class="tooltip">
      <strong>My awesome tooltip</strong>
      <br>
      This is a sample text
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</div>

```html
<div class="button" data-tooltip="#awesome-tooltip">
  Button with tooltip
  <div id="awesome-tooltip" class="tooltip">
    <strong>My awesome tooltip</strong>
    <br>
    This is a sample text
    <div class="tooltip-arrow"></div>
  </div>
</div>
```

You can use it as a jQuery plugin:

```js
$('[data-tooltip]').tooltip(element, options);
```

Or you can use the vanilla constructor as well:

```js
 import Tooltip from 'garden/src/js/components/tooltip'

 new Tooltip(document.querySelector('.some_selector'), { placement: 'bottom'})
```

As you can see, the Tooltip constructor receives two parameters. The first one
is the target element, and the second is the options. The available options are listed below. You can also use the [available options for popper.js](https://popper.js.org/documentation.html#new_Popper).

| Option            | Type | Default | Description |
|-------------------|-------------|
| placement  | String | `'top'` | Placement of the tooltip, can be `'top'`, `'bottom'`, `'left'` or `'right'` |
| offset | Number | `0` | Amount of pixels the tooltip will be shifted |
