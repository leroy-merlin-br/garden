---
title: Flexbox Grid
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: flexbox-grid
section: css
---

# Flexbox grid
<p class="lead">
  A grid system based on the [flex](http://caniuse.com/#search=flexbox) display property.
</p>

## Containers
To build a grid you can use two types of containers. With the `.container` class you can create a responsive fixed width container based on the provided breakpoints, while with the `.container-fluid` class, you will get a full-width container.

### Responsive

Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.


### Fluid

Percent based widths allow fluid resizing of columns and rows.



You can click on the button below to see how each type of container behaves.

<button type="button" class="button button-secondary" data-toggle-container>
  Toggle container
</button>
<div class="example">
  <div class="example-container--fluid" data-container>
    <section class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div data-container-text>.container-fluid</div>
      </div>
    </section>
    <section class="row">
      <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1"><div></div></div>
      <div class="col-xs-6 col-sm-6 col-md-8 col-lg-10"><div></div></div>
      <div class="col-xs-6 col-sm-3 col-md-2 col-lg-1"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-6"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-6"><div></div></div>
    </section>
  </div>
</div>

## Rows and Columns
Since the grid system scales on its own, all you have to do in order to position the columns within your grid is to provide a `.col-xs-*` breakpoint class.

Basic example:

```html
<section class="row">
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
  <div class="col-xs-12 col-sm-4 col-md-1">1/12</div>
</section>
```
<div class="example">
  <section class="row">
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>1/12</div></div>
  </section>
</div>

Grid classes apply styles to devices with a viewport greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any `.col-md-*` class to an element will not only affect its styling on medium devices, but also on large devices, if a `.col-lg-*` class is not present.

## Offset
You can use an offset class to move columns to the right. By adding one of the `.col-breakpoint-offset-*` classes, the left margin of the column increases by the number of columns provided in the class name.

```html
<section class="row">
  <div class="col-xs-6 col-xs-offset-2 col-lg-offset-0">
    col-xs-6 col-xs-offset-2 col-lg-offset-0
  </div>
  <div class="col-xs-3 col-xs-offset-1">
    col-xs-3 col-xs-offset-1
  </div>
</section>
```
<div class="example">
  <section class="row">
    <div class="col-xs-8 col-xs-offset-2 col-lg-offset-0">
      <div>col-xs-6 col-xs-offset-2 col-lg-offset-0</div>
    </div>
    <div class="col-xs-3 col-xs-offset-1">
      <div>col-xs-3 col-xs-offset-1</div>
    </div>
  </section>
</div>

## Auto Width
Add any number of auto sizing columns to a row. Let the grid figure it out.

```html
<section class="row">
  <div class="col-xs">
    auto
  </div>
  <div class="col-xs">
    auto
  </div>
</section>
```
<div class="example">
  <section class="row">
    <div class="col-xs">
      <div>auto</div>
    </div>
    <div class="col-xs">
      <div>auto</div>
    </div>
  </section>
</div>

## Nested Grids
Nest grids inside grids inside grids.

```html
<section class="row">
  <div class="col-xs">
    <div class="row">
      <div class="col-xs">nested</div>
    </div>
  </div>
  <div class="col-xs">
    <div class="row">
      <div class="col-xs">nested</div>
    </div>
  </div>
</section>
```

## Alignment
Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column

### .start-

```html
<section class="row start-xs">
  <div class="col-xs-6">
    start
  </div>
</section>
```
<div class="example">
  <section class="row start-xs">
    <div class="col-xs-6">
      <div>start</div>
    </div>
  </section>
</div>

### .center-

```html
<section class="row center-xs">
  <div class="col-xs-6">
    center
  </div>
</section>
```
<div class="example">
  <section class="row center-xs">
    <div class="col-xs-6">
      <div>center</div>
    </div>
  </section>
</div>

### .end-

```html
<section class="row end-xs">
  <div class="col-xs-6">
    end
  </div>
</section>
```
<div class="example">
  <section class="row end-xs">
    <div class="col-xs-6">
      <div>end</div>
    </div>
  </section>
</div>

Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.

```html
<section class="row center-xs end-sm start-lg">
  <div class="col-xs-6">
    All together now
  </div>
</section>
```
<div class="example">
  <section class="row center-xs end-sm start-lg">
    <div class="col-xs-6">
      <div>All together now</div>
    </div>
  </section>
</div>

### .top-

```html
<section class="row top-xs">
  <div class="col-xs-6">
    text
  </div>
  <div class="col-xs-6">
    top
  </div>
</section>
```
<div class="example">
  <section class="row top-xs">
    <div class="col-xs-6">
      <div style="height: 8rem;">text</div>
    </div>
    <div class="col-xs-6">
      <div>top</div>
    </div>
  </section>
</div>

### .middle-

```html
<section class="row middle-xs">
  <div class="col-xs-6">
    text
  </div>
  <div class="col-xs-6">
    middle
  </div>
</section>
```
<div class="example">
  <section class="row middle-xs">
    <div class="col-xs-6">
      <div style="height: 8rem;">text</div>
    </div>
    <div class="col-xs-6">
      <div>middle</div>
    </div>
  </section>
</div>

### .bottom-

```html
<section class="row bottom-xs">
  <div class="col-xs-6">
    text
  </div>
  <div class="col-xs-6">
    bottom
  </div>
</section>
```
<div class="example">
  <section class="row bottom-xs">
    <div class="col-xs-6">
      <div style="height: 8rem;">text</div>
    </div>
    <div class="col-xs-6">
      <div>bottom</div>
    </div>
  </section>
</div>

## Distribution
Add classes to distribute the contents of a row or column.

### .around-

```html
<section class="row around-xs">
  <div class="col-xs-2">
    around
  </div>
  <div class="col-xs-2">
    around
  </div>
  <div class="col-xs-2">
    around
  </div>
</section>
```
<div class="example">
  <section class="row around-xs">
    <div class="col-xs-2">
      <div>around</div>
    </div>
    <div class="col-xs-2">
      <div>around</div>
    </div>
    <div class="col-xs-2">
      <div>around</div>
    </div>
  </section>
</div>

### .between-

```html
<section class="row between-xs">
  <div class="col-xs-2">
    between
  </div>
  <div class="col-xs-2">
    between
  </div>
  <div class="col-xs-2">
    between
  </div>
</section>
```
<div class="example">
  <section class="row between-xs">
    <div class="col-xs-2">
      <div>between</div>
    </div>
    <div class="col-xs-2">
      <div>between</div>
    </div>
    <div class="col-xs-2">
      <div>between</div>
    </div>
  </section>
</div>

## Reordering
Add classes to reorder columns.

### .first-

```html
<section class="row">
  <div class="col-xs-3">
    1
  </div>
  <div class="col-xs-3">
    2
  </div>
  <div class="col-xs-3">
    3
  </div>
  <div class="col-xs-3 first-xs">
    4
  </div>
</section>
```
<div class="example">
  <section class="row">
    <div class="col-xs-3">
      <div>1</div>
    </div>
    <div class="col-xs-3">
      <div>2</div>
    </div>
    <div class="col-xs-3">
      <div>3</div>
    </div>
    <div class="col-xs-3 first-xs">
      <div>4</div>
    </div>
  </section>
</div>

### .last-

```html
<section class="row">
  <div class="col-xs-3 last-xs">
    1
  </div>
  <div class="col-xs-3">
    2
  </div>
  <div class="col-xs-3">
    3
  </div>
  <div class="col-xs-3">
    4
  </div>
</section>
```
<div class="example">
  <section class="row">
    <div class="col-xs-3 last-xs">
      <div>1</div>
    </div>
    <div class="col-xs-3">
      <div>2</div>
    </div>
    <div class="col-xs-3">
      <div>3</div>
    </div>
    <div class="col-xs-3">
      <div>4</div>
    </div>
  </section>
</div>

### Reverse

```html
<section class="row reverse">
  <div class="col-xs-3">
    1
  </div>
  <div class="col-xs-3">
    2
  </div>
  <div class="col-xs-3">
    3
  </div>
  <div class="col-xs-3">
    4
  </div>
</section>
```
<div class="example">
  <section class="row reverse">
    <div class="col-xs-3">
      <div>1</div>
    </div>
    <div class="col-xs-3">
      <div>2</div>
    </div>
    <div class="col-xs-3">
      <div>3</div>
    </div>
    <div class="col-xs-3">
      <div>4</div>
    </div>
  </section>
</div>
