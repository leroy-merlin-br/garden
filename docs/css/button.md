---
title: Buttons
layout: page.jade
sidebar: true
collection: css
priority: 1
path: button
---

# Buttons

Standard buttons are used normally for form actions or can be used as hyperlinks.
When using `<button>` element, **always specify a `type`**. **If you care about accessibility**, don't forget to use `role=button` in `<a>` element.

Default buttons use these colors interface: `.button-primary`, `.button-secondary`, `.button-neutral` and `.button-danger`.

Using `<button>` element:

<div class="example example-code">
  <button type="button" class="button">Default</button>
  <button type="button" class="button button-primary">Primary</button>
  <button type="button" class="button button-secondary">Secondary</button>
  <button type="button" class="button button-neutral">Neutral</button>
  <button type="button" class="button button-danger">Danger</button>
  <button type="button" class="button button-text" disabled>Text only</button>
</div>

```html
<button type="button" class="button"></button>
```

Using `<a>` element:

<div class="example example-code">
  <a href="#" role="button" class="button">Anchor</a>
</div>

```html
<a href="#" class="button"></a>
```

You can also use the button without the shadow/perspective effect:

<div class="example example-code">
  <button type="button" class="button no-shadow">No shadow</button>
</div>

```html
<button type="button" class="button no-shadow"></button>
```


To disable a button, use `disabled` attribute or `.button-disabled` class simulate disabled prop.

_**Obs**: when a button is **disabled**, button style will be the same for all types._

Using `<button>` element:

<div class="example example-code">
  <button disabled type="button" class="button">Disabled button</button>
</div>

```html
<button type="button" class="button" disabled></button>
```

Using `<a>` element:

<div class="example example-code">
  <a href="#" role="button" class="button button-disabled">Disabled link</a>
</div>

```html
<a href="#" role="button" class="button button-disabled"></a>
```

## Hollow Buttons

If you want a hollow styled button, you can use the `.button-hollow` class. It'll display a button with a transparent background and a colored border. Like the `.button`, you can add colors using a modifier like `.button-hollow-primary`.

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

Likewise the standard buttons, you can achieve a disabled styled adding `.disabled` class to `.button-hollow` element.

<div class="example example-code">
  <button type="button" class="button-hollow disabled">
    Disabled Button
  </button>
</div>

```html
<button type="button" class="button-hollow disabled">
  Disabled Button
</button>
```

## Full width button

A full width button spans the entire width of the parent element by adding the `.button-full` class.

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
