---
title: Utils
layout: page.jade
sidebar: true
collection: css
priority: 0
path: utils
---

# Utils
<p class="lead">Utils are common use classes to help achiev common generic
styles, and to compose other components with them as well.</p>

## Circular
The `.circular` class adds `border-radius: 100%` to the element:


<div class="example example-code">
  <img src="http://placehold.it/100x100" class="circular">
</div>

```html
  <img src="..." class="circular">
```

## Rounded
The `.rounded` class adds `border-radius: .25rem` to the element:

<div class="example example-code">
  <img src="http://placehold.it/100x100" class="rounded">
</div>

```html
  <img src="..." class="rounded">
```


## Border
The `.border` class adds a `border` style to the element:

<div class="example example-code">
  <img src="http://placehold.it/100x100" class="border">
</div>

```html
  <img src="..." class="border">
```

## Border-hover
The `.border-hover` class adds a `border` style to the element, and a `:hover`
effect to it:

<div class="example example-code">
  <img src="http://placehold.it/100x100" class="border-hover">
</div>

```html
  <img src="..." class="border-hover">
```

## Border-active
The `.border-active` class adds a `border` style to the element, and overrides
any `border-color:hover` effect to it:

<div class="example example-code">
  <img src="http://placehold.it/100x100" class="border-active">
</div>

```html
  <img src="..." class="border-active">
```
## Border-disabled
The `.border-disabled` class adds a `border` style to the element, overrides
any `border-color:hover`, and adds `opacity: .4` to it:

<div class="example example-code">
  <img src="http://placehold.it/100x100" class="border-disabled">
</div>

```html
  <img src="..." class="border-disabled">
```

