---
title: Pagination
layout: page.jade
sidebar: true
collection: css
priority: 3
path: pagination
---

# Notifications

Provide control over pages using links and arrow keys styled for multiple pages contexts.

## Usage

The pagination component should be wrapped in a `nav` element to identify it as a
navigation section to screen readers and other technologies.

Links are customizable for different circumstances. Use `.disabled` for unclickable links and `.active` to indicate the current page.

<div class="example example-code">
  <label class="label">Example</label>
</div>

```html
<nav class="pagination">
  <a href="#" class="pagination-item pagination-arrow disabled" title="Página 1">
    <i class="glyph glyph-arrow-left"></i>
  </a>
  <a href="#" class="pagination-item pagination-arrow disabled" title="Página 1">
    <i class="glyph glyph-double-arrow-left"></i>
  </a>

  <a href="#" class="pagination-item active" title="Página 1">1</a>
  <a href="#" class="pagination-item" title="Página 2">2</a>
  <a href="#" class="pagination-item" title="Página 3">3</a>

  <a href="#" class="pagination-item pagination-arrow" title="Página 8">
    <i class="glyph glyph-double-arrow-right"></i>
  </a>
  <a href="#" class="pagination-item pagination-arrow" title="Página 8">
    <i class="glyph glyph-arrow-right"></i>
  </a>
</nav>
```
