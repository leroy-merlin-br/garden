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
// using a data attribute
$('[data-alert]').on('click', () => $.fn.alert('this is an example message'))

// using a class
$('.data-alert').on('click', () => $.fn.alert('this is an example message'))
```
or a vanilla constructor:

```js
import Alert from 'garden/src/js/components/alert';

new Alert('message');
```

Working Example:

<button class="button button-primary" data-alert>Open Alert</button>

### Notes

The alert dialog should be used for messages that do not require any response on the part of the user, other than the acknowledgement of the message.
