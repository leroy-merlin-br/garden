---
title: Thumbnail
layout: page.jade
sidebar: true
collection: docs
priority: 1
path: thumbnail
section: css
---

# Thumbnail
<div class="lead">
  A thumbnail can be used to display linked images or to wrap some content.
</div>

## Usage

### Linked image
<div class="example example-code">
  <a href="#" class="thumbnail">
    <img src="http://unsplash.it/201/201" width="200" height="200" />
  </a>
</div>

```html
  <a href="#" class="thumbnail">
    <img src="http://unsplash.it/201/201" />
  </a>
```
<p class="notification notification-warning">
  The thumbnail component has a `display: inline-block` by default.
</p>

### Content wrapper
You can use any HTML markup within a thumbnail block. In the example below we use the
`.caption` and `.price-tag`* classes to build a product card.

<div class="example example-code">
  <figure class="thumbnail">
    <img
      src="http://unsplash.it/201/201"
      width="200"
      height="200"
      class="figure" />
    <figcaption class="caption">
      Product name
      <span class="additional">Cód. 999999999</span>
    </figcaption>
    <div class="price-tag">
      <span class="price-currency">R$</span>
      <span class="price-integer">9.999</span>
      <span class="price-decimal">,99</span>
      <span class="price-unit">m</span>
    </div>
  </figure>
</div>

```html
<div class="thumbnail">
  <figure>
    <img src="http://unsplash.it/201/201" />
    <figcaption class="caption">
      <span class="additional"></span>
    </figcaption>
    <div class="price-tag">
      <span class="price-currency"></span>
      <span class="price-integer"></span>
      <span class="price-decimal"></span>
      <span class="price-unit"></span>
    </div>
  </figure>
</div>
```

### Hover state
To achieve a simple hover effect on a thumbnail block, you can use the
`.thumbnail-hover` class, as shown below.

<div class="example example-code">
  <figure class="thumbnail thumbnail-hover">
    <img
      src="http://unsplash.it/201/201"
      width="200"
      height="200"
      class="figure" />
    <figcaption class="caption">
      Product name
      <span class="additional">Cód. 999999999</span>
    </figcaption>
    <div class="price-tag">
      <span class="price-currency">R$</span>
      <span class="price-integer">9.999</span>
      <span class="price-decimal">,99</span>
      <span class="price-unit">m</span>
    </div>
  </figure>
</div>

```html
<div class="thumbnail thumbnail-hover">
  <figure>
    <img src="..." />
    <figcaption class="caption">
      <span class="additional"></span>
    </figcaption>
    <div class="price-tag">
      <span class="price-currency"></span>
      <span class="price-integer"></span>
      <span class="price-decimal"></span>
      <span class="price-unit"></span>
    </div>
  </figure>
</div>
```

*Read more about the [price-tag](/pricetag.html) component.
