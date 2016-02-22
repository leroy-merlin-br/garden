---
title: Thumbnail
layout: page.jade
sidebar: true
collection: css
priority: 1
path: thumbnail
---

# Thumbnail

Thumbnails are used by default, to display linked image or can be used as a
wrapper and it's `display: inline-block` by default.

<div class="example example-code">
  <a href="#" class="thumbnail">
    <img src="http://placehold.it/200x200" width="200" height="200" />
  </a>
</div>

```html
  <a href="#" class="thumbnail">
    <img src="" />
  </a>
```

With an extra markup, you can to add any HTML markup. In this example we use
`.caption` and `.price-tag`* to complement our molecule.

<strong>*Read more about [price-tag](/pricetag.html) component.</strong>

<div class="example example-code">
  <figure class="thumbnail">
    <img
      src="http://placehold.it/200x200"
      width="200"
      height="200"
      class="figure" /> 
    <figcaption class="caption">
      Nome de um produto com mais de uma linha pra chegar no máx...
      <span class="additional">Cód. 999999999</span>
    </figcaption>
    <div class="price-tag">
      <span class="price-currency">R$</span>
      <span class="price-integer">9.999</span>
      <span class="price-decimal">,99</span>
      <span class="price-unit">/m</span>
    </div>
  </figure>
</div>

```html
<div class="thumbnail">
  <figure>
    <img src="http://placehold.it/100x100" width="100" height="100" />
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
