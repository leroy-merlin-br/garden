---
title: Colors
layout: page.jade
sidebar: true
collection: docs
priority: 4
path: colors
section: css
---

# Colors
<p class="lead">
  Set of colors used as the default Garden interface.
</p>

## Usage
We highly encourage the usage of color interfaces rather than color names. Color interfaces represent a purpose, not a color itself. While you can and should use your own color scheme, using color names such as `$color-green` on a project makes theming a hard task.  
The color palette grows as our own needs on interfaces grow as well. You can click on the color to copy its interface name.


<div class="row palette">
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-primary-dark" data-clipboard-text="$color-primary-dark"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-primary" data-clipboard-text="$color-primary"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-primary-light" data-clipboard-text="$color-primary-light"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-primary-lighter" data-clipboard-text="$color-primary-lighter"></div>
  </div>

  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-secondary" data-clipboard-text="$color-secondary"></div>
  </div>

  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-default-darker" data-clipboard-text="$color-default-darker"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-default-dark" data-clipboard-text="$color-default-dark"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-default" data-clipboard-text="$color-default"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-default-light" data-clipboard-text="$color-default-light"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-default-lighter" data-clipboard-text="$color-default-lighter"></div>
  </div>

  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-neutral" data-clipboard-text="$color-neutral"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-black" data-clipboard-text="$color-black"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-text" data-clipboard-text="$color-text"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-warning" data-clipboard-text="$color-warning"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-warning-light" data-clipboard-text="$color-warning-light"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-danger" data-clipboard-text="$color-danger"></div>
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="color color-success" data-clipboard-text="$color-success"></div>
  </div>
</div>

## Customization
To customize the default color interface, you can use a [configuration file](https://github.com/leroy-merlin-br/garden/blob/master/src/css/defaults.json) or override the variables at any moment before Garden CSS is processed.

```scss
  /* your css */

  $color-primary: #ffffff;

  @import "garden/buttons";

  /* or */

  @import "garden";
```
<p class="notification notification-warning">
  Check out our [scaffolding section](scaffolding.html) for more info on providing your own defaults for colors.
</p>
