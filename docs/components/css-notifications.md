---
title: CSS Notifications
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: css-notifications
section: css
---

# Notifications
<p class="lead">
  The notification component provides basic feedback messages
</p>

## Usage
Usually a notification is used as an alert, a warning, or a form feedback, according to the style applied. Apart from the default notification style, Garden provides two variations for this component, as described below.

For the default style you don't need to add any additional class, just `.notification`.

<div class="example example-code">
  <div class="notification">Default notification</div>
</div>

```html
<div class="notification">Default notification</div>
```
<br>

For the primary style, which uses our `$color-primary` color, you have to add the `notification-primary` class.

<div class="example example-code">
  <div class="notification notification-primary">Primary notification</div>
</div>

```html
<div class="notification notification-primary">Primary notification</div>
```

<br>

For a warning style, which uses our `$color-warning-light` color, you have to add the `notification-warning`.

<div class="example example-code">
  <div class="notification notification-warning">Warning notification</div>
</div>

```html
<div class="notification notification-warning">Warning notification</div>
```
<br>

As an alternative, you can create the style for a dismissable notification by adding a glyph to it.

<div class="example example-code">
  <div class="notification notification-primary">
    Dismissable notification
    <i class="notification-close glyph glyph-x"></i>
  </div>
</div>

```html
<div class="notification notification-primary">
  Dismissable notification
  <i class="notification-close glyph glyph-x"></i>
</div>
```

By default, a notification does not have any sizes or display. The notification atom only add some padding, border, border-radius and color properties to the element, so you are free to use it as you want.

If you want a notification with some interactivity, check out the [JavaScript section](/components/js-notifications.html) for the notification component.
