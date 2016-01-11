---
title: Scaffolding
layout: page.jade
sidebar: true
collection: css
priority: 6
path: scaffolding
---

# Scaffolding
<p class="lead">The building blocks on how Garden works with CSS components.</p>

## Box-sizing
Garden applies `box-sizing: border-box` to all elements using the [box-sizing global inherit](http://www.paulirish.com/2012/box-sizing-border-box-ftw/):

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

## Default styles
As in right now, Garden styles by default a couple of tags: `h1-6, p, strong, b, em, i, u and a`.

## Normalize
In order to preserve a linear cross-browser behavior, Garden uses [normalize.css](http://necolas.github.io/normalize.css/).

## Variables
Garden uses [PostCSS Simple Vars plugins](https://github.com/postcss/postcss-simple-vars) in order to work with variables.

### Overriding default variables
The simple-vars plugin exposes a variables property, in order to inject variable defaults:

```json
{
  "color-text": "#333333",
  "color-neutral": "#ffffff",
  "color-warning": "#fae800",
  "color-danger": "#ed1c24",

  "color-default": "#a6a6a6",

  "color-primary": "#72bf44",

  "color-secondary": "#bada2e",

  "default-font-size": "16px",
  "default-font-family": "Helvetica, Arial, sans-serif"
}
```

You can work providing a [configuration file](https://github.com/leroy-merlin-br/garden/blob/master/src/css/defaults.json) with your own defaults, or override during compilation time:

```scss
  /* your css */

  $color-primary: #ffffff;

  @import "garden/src/css/garden.css";
```
