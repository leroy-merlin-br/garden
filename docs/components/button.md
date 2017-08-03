---
title: Buttons
layout: page.jade
sidebar: true
collection: docs
priority: 1
path: button
section: css
---

# Buttons
<p class="lead">
  Set of standard buttons commonly used for form actions or as hyperlinks.
</p>

## Summary
1. [Disabled](#disabled)
1. [Hollow Buttons](#hollow-buttons)
1. [Full width button](#full-width-button)

## Usage

To style a button you can either use the `<button>` or the `<a>` tag, adding the `.button` class to get a default style.

Garden currently provides five button variations: `button-primary`, `button-secondary`, `button-neutral`, `button-danger`, and `button-text`, as described below.

Using the `<button>` tag:

<div class="example example-code">
  <button type="button" class="button">Default</button>
  <button type="button" class="button button-primary">Primary</button>
  <button type="button" class="button button-secondary">Secondary</button>
  <button type="button" class="button button-neutral">Neutral</button>
  <button type="button" class="button button-danger">Danger</button>
  <button type="button" class="button button-text">Text only</button>
</div>

```html
  <button type="button" class="button">Default</button>
  <button type="button" class="button button-primary">Primary</button>
  <button type="button" class="button button-secondary">Secondary</button>
  <button type="button" class="button button-neutral">Neutral</button>
  <button type="button" class="button button-danger">Danger</button>
  <button type="button" class="button button-text">Text only</button>
```

Using the `<a>` tag:

<div class="example example-code">
  <a href="#" role="button" class="button">Anchor</a>
</div>

```html
  <a href="#" role="button" class="button">Anchor</a>
```
<p class="notification notification-warning">
  If you care about accessibility, remember to specify a `type`, when using the `<button>` tag, and also to use `role=button` in `<a>` tags.
</p>

To get rid of the shadow effect in a button, you simply need to add the `.no-shadow` class to it.

<div class="example example-code">
  <button type="button" class="button no-shadow">No shadow</button>
</div>

```html
  <button type="button" class="button no-shadow">No shadow</button>
```

### Disabled

You can disable a button by adding the `disabled` attribute or the `.disabled` class to it.


Using the `<button>` tag:

<div class="example example-code">
  <button disabled type="button" class="button">Disabled button</button>
</div>

```html
  <button type="button" class="button" disabled>Disabled button</button>
```

Using the `<a>` tag:

<div class="example example-code">
  <a href="#" role="button" class="button disabled">Disabled anchor</a>
</div>

```html
  <a href="#" role="button" class="button disabled"></a>
```
<p class="notification notification-warning">
  Notice that you should use the `.disabled` class instead of the `disabled` attribute when building buttons with `<a>` tags, otherwise clicks on the button will not be prevented.
</p>
<p class="notification notification-warning">
  All disabled buttons will have the same style, regardless of their type.
</p>

### Hollow Buttons

If you want a button with transparent background and colored borders, you can use the `button-hollow` class, optionally along with a modifier to get predefined styles, as shown below.

<div class="example example-code">
  <button type="button" class="button-hollow">
    Default
  </button>
  <button type="button" class="button-hollow button-hollow-primary">
    Primary
  </button>
  <button type="button" class="button-hollow button-hollow-secondary">
    Secondary
  </button>
  <button type="button" class="button-hollow button-hollow-danger">
    Danger
  </button>
</div>

```html
  <button type="button" class="button-hollow">
    Default
  </button>
  <button type="button" class="button-hollow button-hollow-primary">
    Primary
  </button>
  <button type="button" class="button-hollow button-hollow-secondary">
    Secondary
  </button>
  <button type="button" class="button-hollow button-hollow-danger">
    Danger
  </button>
```

Likewise the standard buttons, you can get a disabled style adding the `.disabled` class or the `disabled` attribute to the `button-hollow` element.

<div class="example example-code">
  <button type="button" class="button-hollow disabled">
    Disabled button
  </button>
</div>

```html
  <button type="button" class="button-hollow disabled">
    Disabled button
  </button>
```

### Full width button

You can make a button spans the entire width of its parent by adding the `.button-full` class.

<div class="example example-code">
  <button type="button" class="button button-full">
    Full width button
  </button>
</div>

```html
  <button type="button" class="button button-full">
    Full width button
  </button>
```
