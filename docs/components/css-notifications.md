---
title: CSS Notifications
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: css-notifications
section: css
---

# CSS Notifications
<p class="lead">Provide basic feedback messages</p>

Notification is a simple component to display short messages to users, as an alert, warning or form feedbacks. The atom provides three variations:

Default, you don't need to add any additional class, just `.notification`:

<div class="example example-code">
  <div class="notification">Lorem ipsum dolor</div>
</div>

```html
<div class="notification"></div>
```

Primary, uses our `$color-primary` color. Add `notification-primary` class to modify the notification box:

<div class="example example-code">
  <div class="notification notification-primary">Lorem ipsum dolor</div>
</div>

```html
<div class="notification notification-primary"></div>
```

Warning, uses our `$color-warning-light` color. Add `notification-warning` class to modify the notification box:

<div class="example example-code">
  <div class="notification notification-warning">Lorem ipsum dolor</div>
</div>

```html
<div class="notification notification-warning"></div>
```

Adding a glyph to work as a component:

<div class="example example-code">
  <div class="notification notification-primary">
    Lorem ipsum dolor
    <i class="notification-close glyph glyph-x"></i>
  </div>
</div>

```html
<div class="notification notification-primary">
  <i class="notification-close glyph glyph-x"></i>
</div>
```

By default, notification don't have any sizes or display. Notification atom just add some padding, border, border-radius and colors, feel free to use as you want.

If you want notification with some interations, read more about [notification component](/js/notification.html).
