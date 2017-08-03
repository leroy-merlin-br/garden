---
title: Confirm
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: confirm
section: js
---

# Confirm
<p class="lead">
  A confirm is used to present confirmation messages according to users' actions.
</p>

## Summary
1. [Usage](#usage)
1. [Options](#options)
1. [Size option](#size-option)


## Usage
The confirm component is an empty container where you can add a message that will be presented to users so they can confirm or not the execution of an specific action.

You can initiate the component as a jQuery plugin:
```js
// using any selector
$('any-selector').on('click', () => $.fn.confirm(callback, options));
```

Or as a vanilla constructor:

```js
import Confirm from 'garden/src/js/components/confirm';

new Confirm(callback, options);
```

The component takes a callback in the first argument and the options in the second argument.

Here's an example on how to create a button to open a confirm window.

<div class="example example-code">
  <button class="button button-primary" data-confirm>Open Confirm</button>
</div>

### Options

These are the options provided with the confirm component, along with their default values.

| Option            | Default | Description |
|-------------------|-------------|
| textMessage  | `This is an example message` | A text to display in the confirm |
| textConfirmButton | `Ok` | A text to the confirm button |
| textCancelButton | `Cancel` | A text to the cancel button |
| size | `"medium"` | The modal size may vary between small, large, or medium |

Below is an example on how to initialize the component passing customized options.
```js
let options = {
  textMessage: 'This is an example message',
  textConfirmButton: 'Ok',
  textCancelButton: 'Cancel'
}

const callback = (value) => value

// as a jquery plugin
$('[data-confirm]').on('click', () => $.fn.confirm(callback, options));

// as a vanilla constructor
new Confirm(callback, options);
```

### Size option

As stated, a confirm has three predefined sizes: small, medium, or large.
You can click on the buttons below to check each size option.

<div class="example example-code align-center">
  <button class="button button-primary" data-confirm-small>Open Small Confirm</button>
  <button class="button button-primary" data-confirm-medium>Open Medium Confirm</button>
  <button class="button button-primary" data-confirm-large>Open Large Confirm</button>
</div>

```js
$('[data-confirm]').on('click', () => $.fn.confirm((value) => value, { size: 'small|medium|large' }));
```
