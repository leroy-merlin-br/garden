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

To use the tooltip component, you need to add `[data-tooltip = 'tooltipSelector']` to the target element (you can use a class name, an id or a data attribute). The selector inserted should be present inside the target element, it'll be the tooltip itself. This component uses the [popper.js](http://popper.js.org/) library to deal with the positioning and jQuery.

<div class="example example-code">
  <div class="button" data-tooltip=".tooltip">
    Button with tooltip
    <div class="tooltip">
      <strong>My awesome tooltip</strong>
      <br>
      This is a sample text
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</div>

```html
<div class="button" data-tooltip=".tooltip">
  Button with tooltip
  <div class="tooltip">
    <strong>My awesome tooltip</strong>
    <br>
    This is a sample text
    <div class="tooltip-arrow"></div>
  </div>
</div>
```

You can use the vanilla constructor as well:

```js
 import Tooltip from 'garden/src/js/components/tooltip'

 new Tooltip(document.querySelector('.some_selector'), { placement: 'bottom'})
```

As you can see, the Tooltip constructor receives two parameters. The first one
is the target element, and the second is the options. The available options are listed below:

| Option            | Type | Default | Description |
|-------------------|-------------|
| placement  | String | `'top'` | Placement of the tooltip, can be `'top'`, `'bottom'`, `'left'` or `'right'` |
| offset | Number | `0` | Amount of pixels the tooltip will be shifted |
