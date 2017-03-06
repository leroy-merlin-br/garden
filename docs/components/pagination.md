---
title: Pagination
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: pagination
section: css
---

# Pagination
<p class="lead">
  The pagination component allows users to navigate through pages of related content.
</p>

## Usage

The component should be wrapped in a `nav` element to identify it as a
navigation section.  

To customize links according to their state you can use the class `.disabled` for unclickable links and `.active` to indicate the current page. To modify the background and color for the next and previous arrows on mouse hover, you can use the `.pagination-arrow` class, as shown below.

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
