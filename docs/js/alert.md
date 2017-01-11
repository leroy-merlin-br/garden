---
title: Alert
layout: page.jade
sidebar: true
collection: js
priority: 3
path: alert
---

# Alert
<p class="lead">The Alert component is an empty container where you can add a message that will be presented to users. It has an OK button by default.</p>

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

Alert provides two customizable options: `textMessage` and `textButton`. The default value for the  `textMessage` is `this is an example message` and for the `textButton` is `Ok`.

| Option            | Default | Description |
|-------------------|-------------|
| textMessage  | `this is an example message` | A text to display in the alert |
| textButton | `Ok` | A text to alert button |


Ex:

```js
let options = {
  textMessage: 'this is an example message',
  textButton: 'Ok'
}

// as a jquery plugin
$('[data-alert]').on('click', () => $.fn.alert(options));

// as a vanilla constructor
new Alert(options);
```

Working Example:

<button class="button button-primary" data-alert>Open Alert</button>

### Notes

The alert dialog should be used for messages that do not require any response on the part of the user, other than the acknowledgement of the message.
