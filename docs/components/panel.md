---
title: Panel
layout: page.jade
sidebar: true
collection: docs
priority: 0
path: panel
section: css
---

# Panel
<div class="lead">
  A panel is generally used to display an image with a caption.
</div>

## Usage
To define a panel you should apply the `.panel` class to a `div` block,
for instance, and use the `.panel-image` and `.caption` classes to arrange
its content.

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
    <img src="https://unsplash.it/170/170" class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
```

<br>

### Large Panel
To get a larger panel you can use the `.panel-large` class, as shown below.

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
    <img src="https://unsplash.it/335/335" class="panel-image">
    <div class="caption">
      Panel caption
    </div>
  </div>
```

<br>

### Hover effect
To get a simple hover effect you can use the `.panel-hover` class, as described below.

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
    <img src="https://unsplash.it/170/170" class="panel-image">
    <div class="caption">
      Panel caption with hover
    </div>
  </div>
```
