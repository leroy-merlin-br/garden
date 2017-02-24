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
<p class="lead">The alert component is an empty container where you can add a message that will be presented to users. It has an OK button by default.</p>

An alert box is often used when you want to make sure information comes through to the user.

### How to use

You can initiate the component as a jQuery plugin:

```js
// using any selector
$('any-selector').on('click', () => $.fn.alert(options));
```

or a vanilla constructor:

```js
import Alert from 'garden/src/js/components/alert';

new Alert(options);
```

## Options

The alert provides some customizable options such as: `textMessage`, `textButton`, `size`, and `triggerClose`. The default value for the `textMessage` is 'This is an example message', for the `textButton` is 'Ok', the `size` value is 'medium', and `triggerClose` is 'data-alert-button'.

| Option            | Default | Description |
|-------------------|-------------|
| textMessage  | `This is an example message` | A text to display in the alert |
| textButton | `Ok` | A text to the alert button |
| size | `"medium"` | The modal size may vary between small, large, or medium |
| triggerClose | `data-alert-button` | A string selector to bind and call the hide method when clicked |


Ex:

```js
let options = {
  textMessage: 'This is an example message',
  textButton: 'Ok'
}

// as a jquery plugin
$('[data-alert]').on('click', () => $.fn.alert(options));

// as a vanilla constructor
new Alert(options);
```

## Working with alert

By default, an alert provides a text message, a text to the button, and a size value. Here's an example on how to create a button to open an alert.

<div class="example example-code">
  <button class="button button-primary" data-alert>Open Alert</button>
</div>

```js
let alert = $('[data-alert]').on('click', () => $.fn.alert());
```
 The alert can be closed by clicking on the close icon or by pressing the `esc` key.

 An alert has a default close button, but you can use `triggerClose` option to change the element from which the click event will close the alert. Example:

```js
$('[data-alert]').on('click', () => $.fn.alert({
  triggerClose: '.any-selector'
}));
```

## Set Alert size

The alert has three predefined sizes: small, medium, or large.

<div class="example example-code align-center">
  <button class="button button-primary" data-alert-small>Open Small Alert</button>
  <button class="button button-primary" data-alert-medium>Open Medium Alert</button>
  <button class="button button-primary" data-alert-large>Open Large Alert</button>
</div>

```js
$('[data-alert]').on('click', () => $.fn.alert({ size: 'small|medium|large' }));
```

## Notes

The alert dialog should be used for messages that do not require any response on the part of the user, other than the acknowledgement of the message.
