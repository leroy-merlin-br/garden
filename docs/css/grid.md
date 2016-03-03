---
title: Grid
layout: page.jade
sidebar: true
collection: css
priority: 3
path: grid
---

# Grid
<p class="lead">The grid is responsible for basic element positioning.</p>

### How to use

Garden includes a responsive, mobile first fluid grid system that scales up to 12 columns. It is heavily based on common grid systems out there (such as Bootstrap).

**Check our [breakpoints](css/utils.html#breakpoints) guideline.**

The grid system provides two types of containers: `.container` a responsive fixed
width container based on the provided breakpoints; `.container-fluid` a full-width
container.

```html
<section class="row">
  <div class="col-xs-12 col-sm-4 col-md-1">grid</div>
</section>
```

Basic example:

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

### Offsetting
Move columns to the right `.col-breakpoint-offset-*` classes. Please take note
that this method increases the left margin of the column by the number of
columns provided.

<div class="example">
  <section class="row">
    <div class="col-xs-8 col-xs-offset-4 col-lg-offset-0">
      <div>col-xs-8 col-xs-offset-4 col-lg-offset-0</div>
    </div>
  </section>

  <section class="row">
    <div class="col-xs-4 col-xs-offset-4">
      <div>col-xs-8 col-xs-offset-4 col-lg-offset-0</div>
    </div>
    <div class="col-xs-3 col-xs-offset-1">
      <div>col-xs-3 col-xs-offset-1</div>
    </div>
  </section>
</div>

### Ordering columns
Easily change the order of grid columns with `.col-breakpoint-push-*` and
`.col-breakpoint-pull-`. Please take note that this method adds `position:
relative` to the column.

<div class="example">
  <section class="row">
    <div class="col-xs-9 col-xs-push-3">
      <div>.col-xs-9 .col-xs-push-3</div>
    </div>
    <div class="col-xs-3 col-xs-pull-9">
      <div>.col-xs-3 .col-xs-pull-9</div>
    </div>
  </section>
</div>
