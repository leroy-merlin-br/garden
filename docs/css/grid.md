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
The grid is a third party [postCSS plugin](http://peterramsing.github.io/lost/).

The idea behind this concept is the flexibility to add just what you need. Instead of making the decision of providing a semantic/non-semantic responive grid system (which adds a big chunk of code), you can easily provide a bit of sugar to create a set of classes to handle it:

```css
.grid {
  lost-center: 980px;
}

.row {
  lost-utility: clearfix;
}

.two {
  lost-column: 2/12;
}

.three {
  lost-column: 3/12;
}

.four {
  lost-column: 4/12;
}
```

```html
<section class="grid">
  <div class="row">
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="three"></div>
  </div>
</section>
```

and the result:

<div class="example">
  <div class="row">
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="three"></div>
  </div>
</div>

#### This is a basic demo just to show how to get started on lost, please make sure to [checkout the docks](https://github.com/peterramsing/lost)
