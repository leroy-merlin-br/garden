---
title: Utilities
layout: page.jade
sidebar: true
collection: docs
priority: 0
path: css-utilities
section: css
---

# Utilities
<p class="lead">
  Set of common classes and variables used to provide predefined style and measures.
</p>

## Summary

1. [Breakpoints](#breakpoints)
2. [Media queries](#media-queries)
3. [Circular](#circular)
4. [Rounded](#rounded)
5. [Border](#border)
6. [Border-hover](#border-hover)
7. [Border-active](#border-active)
8. [Border-disabled](#border-disabled)

## Breakpoints

Garden provides five breakpoints variables, which are defined
in the [defaults.json](/css/scaffolding.html#overriding-default-variables) file.

| Variable       | Values |
|----------------|:------:|
| $breakpoint-xs |  480px |
| $breakpoint-sm |  768px |
| $breakpoint-md |  960px |
| $breakpoint-lg | 1120px |
| $breakpoint-xl | 1280px |

<p class="notification notification-warning">
   Check out the [Scaffolding](/css/scaffolding.html) page to learn how to overwrite these values.
</p>


## Media queries
Based on the breakpoints provided, Garden creates some custom media queries: `--small`, `--medium`,
`--large`, and `--extra-large`.

Below you can see how a `@custom-media` is defined and used, respectively.

```scss
@custom-media --small (min-width: calc($breakpoint-xs + 1));
```

<br>

```scss
@media(--small) {
  /* Style here */
}
```

## Circular
The `.circular` class adds `border-radius: 100%` to an element.

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="circular">
</div>

```html
  <img src="http://unsplash.it/100/100" class="circular">
```

## Rounded
The `.rounded` class adds `border-radius: .25rem` to an element.

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="rounded">
</div>

```html
  <img src="http://unsplash.it/100/100" class="rounded">
```

## Border
The `.border` class adds a `border` style to an element:

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="border">
</div>

```html
  <img src="http://unsplash.it/100/100" class="border">
```

## border-hover
The `.border-hover` class adds a border style and a `hover` effect to an element.

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="border border-hover">
</div>

```html
  <img src="http://unsplash.it/100/100" class="border border-hover">
```

## border-active
The `.border-active` class adds a `border` style to an element and overrides
any `border-color:hover` effect on it.

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="border border-active">
</div>

```html
    <img src="http://unsplash.it/100/100" class="border border-active">
```

## border-disabled
The `.border-disabled` class adds a `border` style and `opacity: .4` to an element, and also overrides any `border-color:hover` effect on it.

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="border border-disabled">
</div>

```html
  <img src="http://unsplash.it/100/100" class="border border-disabled">
```
