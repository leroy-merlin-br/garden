---
title: Grid
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: grid
section: css
---

# Grid
<p class="lead">
  The grid component is responsible for basic element alignment.
</p>

## Usage

Garden includes a responsive, mobile first fluid grid system that scales up to 12 columns. It is heavily based on common grid systems out there, such as Bootstrap.  
You can check our [breakpoints section](/components/css-utilities.html#breakpoints) for more info about the default values used to build the system layout.

### Containers
To build a grid you can use two types of containers. With the `.container` class you can create a responsive fixed width container based on the provided breakpoints, while with the `.container-fluid` class, you will get a full-width container.

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
      <div class="col-xs-12 col-sm-6 col-md-3"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-3"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-6"><div></div></div>
      <div class="col-xs-12 col-sm-6 col-md-6"><div></div></div>
    </section>
  </div>
</div>

### Rows and Columns
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

### Offset
You can use an offset class to move columns to the right. By adding one of the `.col-breakpoint-offset-*` classes, the left margin of the column increases by the number of columns provided in the class name.

```html
<section class="row">
  <div class="col-xs-8 col-xs-offset-4 col-lg-offset-0">
    col-xs-8 col-xs-offset-4 col-lg-offset-0
  </div>
  <div class="col-xs-3 col-xs-offset-1">
    col-xs-3 col-xs-offset-1
  </div>
</section>
```
<div class="example">
  <section class="row">
    <div class="col-xs-8 col-xs-offset-4 col-lg-offset-0">
      <div>col-xs-8 col-xs-offset-4 col-lg-offset-0</div>
    </div>
    <div class="col-xs-3 col-xs-offset-1">
      <div>col-xs-3 col-xs-offset-1</div>
    </div>
  </section>
</div>

### Ordering columns
You can easily change the order of grid columns with `.col-breakpoint-push-*` and
`.col-breakpoint-pull-` classes. Please take note that this method adds `position:
relative` to the column.

```html
<section class="row">
  <div class="col-xs-9 col-xs-push-3">.col-xs-9 .col-xs-push-3</div>
  <div class="col-xs-3 col-xs-pull-9">.col-xs-3 .col-xs-pull-9</div>
</section>
```
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
