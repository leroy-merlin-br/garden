---
title: Alert
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: alert
section: js
---

# Alert
<p class="lead">
  An alert is used to present feedback messages to users' actions.
</p>

## Summary
1. [Usage](#usage)
1. [Options](#options)
1. [Size option](#size-option)

## Usage
An alert box is generally used when you want to make sure information comes through
to the user, so it should be implemented for situations that do not require any user
response, other than the acknowledgement of the message.

To initialize the component you can use any valid selector.

You can either use it as a jQuery plugin:
```js
$('any-selector').on('click', () => $.fn.alert(options));
```

Or as a vanilla constructor:
```js
import Alert from 'garden/src/js/components/alert';

new Alert(options);
```

Below is an example on how to create a button to open an alert. You can close it
either by clicking on the close icon, on the `OK` button, or by pressing the `ESC` key.

<div class="example example-code">
  <button class="button button-primary" data-alert>Open Alert</button>
</div>

```html
<button class="button button-primary" data-alert>Open Alert</button>
```

```js
let alert = $('[data-alert]').on('click', () => $.fn.alert());
```

### Options
These are the options provided with the alert component, along with their default values.

| Option            | Default | Description |
|-------------------|-------------|
| textMessage  | `This is an example message` | A text to display in the alert |
| textButton | `Ok` | A text to the alert button |
| size | `"medium"` | The modal size may vary between small, large, or medium |
| triggerClose | `data-alert-button` | A string selector to bind and call the hide method when clicked |

Below is an example on how to initialize the component passing customized options.
```js
let options = {
  textMessage: 'This is an alert box',
  textButton: 'Confirm',
  triggerClose: '.any-selector'
}

// as a jquery plugin
$('[data-alert]').on('click', () => $.fn.alert(options));

// as a vanilla constructor
new Alert(options);
```

<p class="notification notification-warning">
  Notice in the example above that the closing action for the alert is now
  attached to the element with the `.any-selector` class.
</p>

### Size option

As stated, an alert has three predefined sizes: small, medium, or large.
You can click on the buttons below to check each size option.

<div class="example example-code align-center">
  <button class="button button-primary" data-alert-small>Open Small Alert</button>
  <button class="button button-primary" data-alert-medium>Open Medium Alert</button>
  <button class="button button-primary" data-alert-large>Open Large Alert</button>
</div>

```js
$('[data-alert]').on('click', () => $.fn.alert({ size: 'small|medium|large' }));
```
