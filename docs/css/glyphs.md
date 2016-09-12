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

You can either use it as a call IE `.glyph-cart` or as a placeholder `@extend cart`:

<div class="row glyphs">
  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-arrow-left">
      <div class="glyph glyph-arrow-left"></div>
      arrow-left
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-arrow-right">
      <div class="glyph glyph-arrow-right"></div>
      arrow-right
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-calendar">
      <div class="glyph glyph-calendar"></div>
      calendar
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-camera">
      <div class="glyph glyph-camera"></div>
      camera
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-cart">
      <div class="glyph glyph-cart"></div>
      cart
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-chat-balloon">
      <div class="glyph glyph-chat-balloon"></div>
      chat-balloon
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-checked">
      <div class="glyph glyph-checked"></div>
      checked
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-clock">
      <div class="glyph glyph-clock"></div>
      clock
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-clone">
      <div class="glyph glyph-clone"></div>
      clone
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-dollar-sign">
      <div class="glyph glyph-dollar-sign"></div>
      dollar-sign
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-double-arrow-left">
      <div class="glyph glyph-double-arrow-left"></div>
      double-arrow-left
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-double-arrow-right">
      <div class="glyph glyph-double-arrow-right"></div>
      double-arrow-right
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-double-arrow-up">
      <div class="glyph glyph-double-arrow-up"></div>
      double-arrow-up
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-double-arrow-down">
      <div class="glyph glyph-double-arrow-down"></div>
      double-arrow-down
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-envelope">
      <div class="glyph glyph-envelope"></div>
      envelope
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-exclamation-mark">
      <div class="glyph glyph-exclamation-mark"></div>
      exclamation-mark
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-external">
      <div class="glyph glyph-external"></div>
      external
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-eye">
      <div class="glyph glyph-eye"></div>
      eye
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-heart">
      <div class="glyph glyph-heart"></div>
      heart
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-location">
      <div class="glyph glyph-location"></div>
      location
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-magnifier">
      <div class="glyph glyph-magnifier"></div>
      magnifier
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-pencil">
      <div class="glyph glyph-pencil"></div>
      pencil
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-printer">
      <div class="glyph glyph-printer"></div>
      printer
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-question-mark">
      <div class="glyph glyph-question-mark"></div>
      question-mark
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-silhouette">
      <div class="glyph glyph-silhouette"></div>
      silhouette
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-trash-can">
      <div class="glyph glyph-trash-can"></div>
      trash-can
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-x">
      <div class="glyph glyph-x"></div>
      x
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-x">
      <div class="glyph glyph-settings"></div>
      settings
    </div>
  </div>

  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="glyph-container" data-clipboard-text=".glyph-x">
      <div class="glyph glyph-order"></div>
      order
    </div>
  </div>
</div>

## Customizing your own bundle

Garden uses [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) to create the font, and a [PostCSS function](https://github.com/leroy-merlin-br/garden/blob/master/gulp/postcss-glyphs-css.js) to generate the .css file of it. You can easily customize your bundle adding/removing your glyphs on `src/glyphs`.
