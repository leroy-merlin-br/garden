---
title: Pagination
layout: page.jade
sidebar: true
collection: css
priority: 3
path: pagination
---

# Pagination

Provide control over pages using links and arrow keys styled for multiple pages contexts.

## Usage

The pagination component should be wrapped in a `nav` element to identify it as a
navigation section to screen readers and other technologies. You can use `.align-center` or `.align-right` in order to align pagination items.

Links are customizable for different circumstances. Use `.disabled` for unclickable links and `.active` to indicate the current page.

The `.pagination-arrow` class can be used to modify the background and color for the next and previous arrows on mouse hover.

<div class="example example-code">
  <nav>
    <a href="#" class="pagination-item pagination-arrow disabled" title="Page 0">
      <i class="glyph glyph-double-arrow-left"></i>
    </a>
    <a href="#" class="pagination-item pagination-arrow disabled" title="Page 1">
      <i class="glyph glyph-arrow-left"></i>
    </a>

    <a href="#" class="pagination-item active" title="Page 1">1</a>
    <a href="#" class="pagination-item" title="Page 2">2</a>
    <a href="#" class="pagination-item" title="Page 3">3</a>

    <a href="#" class="pagination-item pagination-arrow" title="Page 4">
      <i class="glyph glyph-arrow-right"></i>
    </a>
    <a href="#" class="pagination-item pagination-arrow" title="Page 8">
      <i class="glyph glyph-double-arrow-right"></i>
    </a>
  </nav>
</div>

```html
<nav>
  <a href="#" class="pagination-item pagination-arrow disabled" title="Page 0">
    <i class="glyph glyph-double-arrow-left"></i>
  </a>
  <a href="#" class="pagination-item pagination-arrow disabled" title="Page 1">
    <i class="glyph glyph-arrow-left"></i>
  </a>

  <a href="#" class="pagination-item active" title="Page 1">1</a>
  <a href="#" class="pagination-item" title="Page 2">2</a>
  <a href="#" class="pagination-item" title="Page 3">3</a>

  <a href="#" class="pagination-item pagination-arrow" title="Page 4">
    <i class="glyph glyph-arrow-right"></i>
  </a>
  <a href="#" class="pagination-item pagination-arrow" title="Page 8">
    <i class="glyph glyph-double-arrow-right"></i>
  </a>
</nav>
```
