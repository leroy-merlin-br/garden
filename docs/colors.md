---
title: Colors
layout: page.jade
sidebar: true
collection: css
path: colors
---

# Colors
The colors atom works a bit differently than most css helpers out here. While we do provide helpers as `.color-primary`, `.color-default`, as in right now we do not provide common dark/light scales since Leroy Merlin's brand colors aren't proper color scales as well.

## Usage
We highly encourage the usage of color interfaces rather than color names. Color interfaces represents a purpose, not a color itself. While you can and should use your own color scheme, using color names on this project such as `$color-green` makes theming a hard task. The color palette grows as our own needs on interfaces grows as well:


<div class="palette">
  <div class="color color-primary-dark" data-clipboard-text="$color-primary-dark"></div>
  <div class="color color-primary" data-clipboard-text="$color-primary"></div>
  <div class="color color-primary-light" data-clipboard-text="$color-primary-light"></div>
  <div class="color color-primary-lighter" data-clipboard-text="$color-primary-lighter"></div>

  <div class="color color-secondary"></div>

  <div class="color color-default-darker"></div>
  <div class="color color-default-dark"></div>
  <div class="color color-default"></div>
  <div class="color color-default-light"></div>
  <div class="color color-default-lighter"></div>

  <div class="color color-white"></div>
  <div class="color color-text"></div>
  <div class="color color-warning"></div>
  <div class="color color-error"></div>
</div>

## Customization
In order to customize our color interfaces, there are a couple ways of doing it:

### Defaults
Check out our [scaffolding section](scaffolding.md) for more info on providing your own defaults.

### Override
Since they are just plain variables you can override it any moment before garden css is processed:

```scss
  /* your css */

  $color-primary: #ffffff;

  @import "garden/buttons";

  /* or */

  @import "garden";
```
