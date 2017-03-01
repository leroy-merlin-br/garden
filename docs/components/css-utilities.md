---
title: CSS Utilities
layout: page.jade
sidebar: true
collection: docs
priority: 0
path: css-utilities
section: css
---

# CSS Utilities
<p class="lead">Utils are common use classes to help achieve common generic
styles, and to compose other components with them as well.</p>

## Summary

- [Breakpoints](/css/utils.html#breakpoints)
- [Circular](/css/utils.html#circular)
- [Rounded](/css/utils.html#rounded)
- [Border](/css/utils.html#border)
- [Border-hover](/css/utils.html#border-hover)
- [Border-active](/css/utils.html#border-active)
- [Border-disabled](/css/utils.html#border-disabled)

## Breakpoints

Garden provide five breakpoints variables, these variables are defined
in `defaults.json` and can be _overwritten*_.

| Variable       | Values |
|----------------|:------:|
| $breakpoint-xs |  480px |
| $breakpoint-sm |  768px |
| $breakpoint-md |  960px |
| $breakpoint-lg | 1120px |
| $breakpoint-xl | 1280px |

Based on default breakpoints, we have some `@custom-media` to be used in
media-queries. `@custom-media` avaliable: `--small`, `--medium`,
`--large` and `--extra-large`.

Example of how a `@custom-media` is defined:

```scss
@custom-media --small (min-width: calc($breakpoint-xs + 1));
```

How to use:
```scss
@media(--small) {
  /* styles */
}
```

_Obs: default variables can be overwrited, read more about [how to overwrite default variables](css/scaffolding.html#overriding-default-variables)._


## Circular
The `.circular` class adds `border-radius: 100%` to the element:


<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="circular">
</div>

```html
  <img src="..." class="circular">
```

## Rounded
The `.rounded` class adds `border-radius: .25rem` to the element:

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="rounded">
</div>

```html
  <img src="..." class="rounded">
```


## Border
The `.border` class adds a `border` style to the element:

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="border">
</div>

```html
  <img src="..." class="border">
```

## border-hover
The `.border-hover` class adds a border style to the element, and a `:hover` effect to it:

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="border border-hover">
</div>

```html
  <img src="..." class="border border-hover">
```

## border-active

The `.border-active` class adds a `border` style to the element, and overrides
any `border-color:hover` effect to it:

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="border border-active">
</div>

```html
  <img src="..." class="border border-active">
```

## border-disabled
The `.border-disabled` class adds a `border` style to the element, overrides any `border-color:hover`, and adds `opacity: .4` to it:

<div class="example example-code">
  <img src="http://unsplash.it/100/100" class="border border-disabled">
</div>

```html
  <img src="..." class="border border-disabled">
```
