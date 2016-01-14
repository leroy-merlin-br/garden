---
title: Glyphs
layout: page.jade
sidebar: true
collection: css
priority: 5
path: glyphs
---

# Glyphs

Garden provides a set of glyphs bundled on a typography (Glyphs.woff):

<div class="example">
  <div class="glyph glyph-cart"></div>
</div>

```html
  <div class="glyph glyph-cart"></div>
```

## Usage
The font bundle is required to use the glyphs. The location of the font is `dist/fonts`.

The `.glyph` class is responsible to set the `font-family` name, along with a couple resetting properties. Each glyph has a identifier of the glyph name. IE `cart` is `glyph-cart`.

The current available glyphs are  (Click on it to copy the glyph name):

<div class="glyphs">
  <div class="glyph-container" data-clipboard-text=".glyph-arrow-left">
    <div class="glyph glyph-arrow-left"></div>
    glyph-arrow-left
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-arrow-right">
    <div class="glyph glyph-arrow-right"></div>
    glyph-arrow-right
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-camera">
    <div class="glyph glyph-camera"></div>
    glyph-camera
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-cart">
    <div class="glyph glyph-cart"></div>
    glyph-cart
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-clock">
    <div class="glyph glyph-clock"></div>
    glyph-clock
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-dollar-sign">
    <div class="glyph glyph-dollar-sign"></div>
    glyph-dollar-sign
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-envelope">
    <div class="glyph glyph-envelope"></div>
    glyph-envelope
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-exclamation-mark">
    <div class="glyph glyph-exclamation-mark"></div>
    glyph-exclamation-mark
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-eye">
    <div class="glyph glyph-eye"></div>
    glyph-eye
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-heart">
    <div class="glyph glyph-heart"></div>
    glyph-heart
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-location">
    <div class="glyph glyph-location"></div>
    glyph-location
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-magnifier">
    <div class="glyph glyph-magnifier"></div>
    glyph-magnifier
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-question-mark">
    <div class="glyph glyph-question-mark"></div>
    glyph-question-mark
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-silhouette">
    <div class="glyph glyph-silhouette"></div>
    glyph-silhouette
  </div>

  <div class="glyph-container" data-clipboard-text=".glyph-trash-can">
    <div class="glyph glyph-trash-can"></div>
    glyph-trash-can
  </div>
</div>

## Customizing your own bundle

Garden uses [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) to create the font, and a [PostCSS function](https://github.com/leroy-merlin-br/garden/blob/master/gulp/postcss-glyphs-css.js) to generate the .css file of it. You can easily customize your bundle adding/removing your glyphs on `src/glyphs`.
