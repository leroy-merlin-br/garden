---
title: Panel
layout: page.jade
sidebar: true
collection: css
priority: 0
path: panel
---

# Panel
<div class="lead">`panel` is a component responsible to display an image with a descriptive text,
but in a more fashion way, compared to the [`thumbnail`](/thumbnail.html) component: </div>

## Default Panel
The `.panel` component and it's variations stricly sets the `height` property,
based on the panel variation. 

Along with the `.panel`, the image should be used with `.panel-image` to
properly position it, and with the `.caption` atom.

The width should be set by your current
grid-system or hardcoded on your project:

<div class="example example-code">
  <div class="panel">
    <img src="https://unsplash.it/170/170" class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
</div>

```html
  <div class="panel">
    <img src="..." class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
```



## Large Panel
<div class="example example-code">
  <div class="panel panel-large">
    <img src="https://unsplash.it/335/335" class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
</div>

```html
  <div class="panel panel-large">
    <img src="..." class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
```
## Wide Panel
<div class="example example-code">
  <div class="panel panel-wide">
    <img src="https://unsplash.it/335/165" class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
</div>

```html
  <div class="panel panel-wide">
    <img src="..." class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
```
## Vertical Panel
<div class="example example-code">
  <div class="panel panel-vertical">
    <img src="https://unsplash.it/165/335" class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
</div>

```html
  <div class="panel panel-vertical">
    <img src="..." class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
```

<div class="callout">
  <div class="callout-title">:hover state</div>
  <p>You can compose all `.panel` variations with a `.panel-hover` class, in order to
  achieve a simple `:hover` state, modifying the `.caption` behavior:</p>
</div>

<div class="example example-code">
  <div class="panel panel-hover">
    <img src="https://unsplash.it/170/170" class="panel-image">
    <div class="caption">
      Panel caption with hover
    </div>
  </div>
</div>

```html
  <div class="panel panel-hover">
    <img src="..." class="panel-image">
    <div class="caption">
      Panel caption with hover
    </div>
  </div>
```
