---
title: Collapse
layout: page.jade
sidebar: true
collection: js
priority: 0
path: collapse
---

# Collapse
<p class="lead">Collapse is a component responsible to toggle the visibility of an element

# How to use
The component expects the element to have a wrapper using the `.collapse` class. The trigger must have a `[data-target]` attribute, which points to the element to be collapsed

<div class="example example-code">
  <button class="button button-primary toggle" data-target=".collapse">
    Toggle content
  </button>

  <div class="collapse">
    <p>Content</p>
  </div>
</div>

```html
<button class="toggle" data-target=".collapse">...</button>

<div class="collapse"> <!-- content wrapper -->
  ... <!-- content to be displayed -->
</div>
```

```js
$('.toggle').collapse();
```
