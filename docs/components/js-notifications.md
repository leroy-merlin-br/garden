---
title: Notifications
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: js-notifications
section: js
---

# Notifications
<p class="lead" data-notification-page>
  This is an extension of the [notification atom](/components/css-notifications.html)
  and can be used to add some interactivity to notifications.
</p>

## Summary
1. [Usage](#usage)
1. [Options](#options)
1. [Dynamic notification](#dynamic-notification)
1. [Non-dynamic notification](#non-dynamic-notification)
1. [Temporary notification](#temporary-notification)

## Usage
To initiate the component you can use any valid selector, such as a class or a `[data-something]` attribute.

```js
import Notification from 'garden/src/js/components/notification';

new Notification(document.querySelector('[data-notification]')).init();
```

### Options
These are the options provided with the component, along with their default values.

| Option            | Default | Description |
|-------------------|-------------|
| autoHide | false | When `autoHide` is true, the notification will close after some time |
| closeButton | `.notification-close` | Selector to bind the close action to when you are using a non-dynamic notification |
| dynamic | true | When true, the selector used will be a wrapper and the notification markup will be appended inside of it |
| hideIn | 3000ms | Time, in milliseconds, used when `autoHide` is true |
| message | null | A message is required, if the `message` is empty, the notification will not be appended |
| showIn | 1000ms | Time delay, in millisecons, used to show the notification after its initialization |
| type | primary | An interactive notification has two variations: `primary` and `warning` |

Below is an example on how to initialize the component using customized options.

```js
import Notification from 'garden/src/js/components/notification';

const options = {
  message: 'This is an interactive notification',
  autoHide: true,
  showIn: 2000,
  hideIn: 20000,
  type: 'warning'
}

new Notification(document.querySelector('.any-selector'), options).init();
```

### Dynamic notification
By default, a notification is dynamic, which means that its markup will be
generated via JavaScript and appended to the selector used.

<div data-notification-dynamic></div>

```html
<div data-notification-dynamic></div>
```

```js
import Notification from 'garden/src/js/components/notification';

const options = {
  message: 'This is a dynamic notification',
  type: 'warning'
}

new Notification(document.querySelector('[data-notification-dynamic]'), options).init();
```

### Non-dynamic notification
When using a non-dynamic notification, you need to add all the markup in your view, add a selector, and initiate the plugin, as described below.

<div class="notification notification-primary" data-notification>
  This is a non-dynamic notification.
  <i class="notification-close glyph glyph-x" data-close="notification" ></i>
</div>

```html
<div class="notification notification-primary" data-notification>
  This is a non-dynamic notification.
  <i class="notification-close glyph glyph-x" data-close="notification"></i>
</div>
```

```js
import Notification from 'garden/src/js/components/notification';

const options = {
  dynamic: false
}

new Notification(document.querySelector('[data-notification]'), options).init();
```

### Temporary notification
You can create a temporary notification by setting the `autoHide` option to `true`, as described below.

You can click on the button below to show an example of a temporary notification.

<div class="example example-code">
<button class="button button-primary" data-notification-temp-button>Get notification</button>
</div>

<div data-notification-temporary></div>

```html
<div data-notification-temporary></div>
```

```js
import Notification from 'garden/src/js/components/notification';

const options = {
  message: 'This is a dynamic notification',
  autoHide: true,
  showIn: 2000,
  hideIn: 20000,
  type: 'warning'
}

new Notification(document.querySelector('[data-notification-temporary]'), options).init();
```
