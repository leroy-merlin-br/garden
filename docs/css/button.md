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
  <button type="button" class="button button-text">Text only</button>
</div>

```html
<button type="button" class="button"></button>
```

Using `<a>` element:

<div class="example example-code">
  <a href="#" role="button" class="button">Default</a>
</div>

```html
<a href="#" class="button"></a>
```

To disable a button, use `disabled` attribute or `.button-disabled` class simulate disabled prop.

_**Obs**: when a button is **disabled**, button style will be the same for all types._

Using `<button>` element:

<div class="example example-code">
  <button disabled type="button" class="button">Default</button>
</div>

```html
<button type="button" class="button" disabled></button>
```

Using `<a>` element:

<div class="example example-code">
  <a href="#" role="button" class="button button-disabled">Default</a>
</div>

```html
<a href="#" role="button" class="button button-disabled"></a>
```
