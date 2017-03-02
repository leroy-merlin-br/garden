---
title: Scaffolding
layout: page.jade
sidebar: true
collection: docs
priority: 6
path: scaffolding
section: css
---

# Scaffolding
<p class="lead">
  The building blocks on how Garden works with CSS components.
</p>

## Box-sizing
To make it easier to work with box-sizing properties, Garden uses the [box-sizing global inherit](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) method, as described below.
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
This reset method gives you more flexibility since you can use another value of box-sizing without worrying about having your CSS overriden.

## Default styles
Garden provides some default styles for several tags, such as: `h1-6, p, strong, b, em, i, u, and a`.  
Check our [typography section](typography.html) for more details.

## Normalize
In order to preserve a linear cross-browser behavior, Garden uses [normalize.css](http://necolas.github.io/normalize.css/).

## Variables
Garden uses [PostCSS Simple Vars plugins](https://github.com/postcss/postcss-simple-vars) to work with variables.

### Overriding default variables
Here is a relation of default values for the variables exposed by the simple-vars plugin:

```json
{
  "color-text": "#333333",
  "color-neutral": "#ffffff",
  "color-black": "#000000",
  "color-warning": "#fae800",
  "color-warning-light": "#fffccf",
  "color-danger": "#ed1c24",
  "color-success": "#72bf44",

  "color-default": "#a6a6a6",
  "color-default-dark": "#666666",
  "color-default-darker": "#333333",
  "color-default-light": "#e5e5e5",
  "color-default-lighter": "#f8f8f8",

  "color-primary": "#72bf44",
  "color-primary-dark": "#397615",
  "color-primary-light": "#cae4b8",
  "color-primary-lighter": "#f1f8ec",

  "color-secondary": "#bada2e",

  "color-promotional": "#fae800",
  "color-text-promotional": "#ed1c24",

  "default-font-size": "16px",
  "default-font-family": "Helvetica, Arial, sans-serif",

  "panel-height": "165px",
  "panel-large-height": "335px",

  "breakpoint-xs": "480px",
  "breakpoint-sm": "768px",
  "breakpoint-md": "960px",
  "breakpoint-lg": "1120px",
  "breakpoint-xl": "1280px",

  "columns": "12",
  "gutter-width": "20px",
  "grid-limit": "980px",

  "index-rear": "-1",
  "index-base": "0",
  "index-front": "10",
  "index-ahead": "100",
  "index-foremost": "9999"

}
```

To set your own default values, you can provide a [configuration file](https://github.com/leroy-merlin-br/garden/blob/master/src/css/defaults.json), or override the variables during compilation time:

```scss
  /* your css */

  $color-primary: #ffffff;

  @import "garden/src/css/garden.css";
```
