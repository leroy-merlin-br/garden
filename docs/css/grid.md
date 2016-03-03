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
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
    <div class="col-xs-12 col-sm-4 col-md-1"><div>grid</div></div>
  </section>
</div>
