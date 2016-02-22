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
`.caption` atom to complement our molecule.

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
    <button type="button" class="button button-primary">Comprar</button>
  </figure>
</div>

```html
<div class="thumbnail">
  <figure>
    <img src="http://placehold.it/100x100" width="100" height="100" />
    <figcaption class="caption">
      <span class="additional"></span>
    </figcaption>
    <button type="button" class="button button-primary"></button>
  </figure>
</div>
```
