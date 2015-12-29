---
title: Typography
layout: page.jade
sidebar: true
collection: css
path: typography
---

### Typography
All typography tags/classes uses `rem` in order to set size. The `$default-font-size` variable uses `16px`. In case you use Garden css components individually (bundling with PostCSS), you can provide your own `$default-font-size` to change it.
We provide both markup tags and classes in order to handle text styling with flexbility.

#### Headings

In alternative to using directly `<h[1-6]>`, you can use `.heading-[1-6]` classes for the same style of a heading tag.

<div class="example">
  <h1 class="example-item">Heading 1</h1>
  <h2 class="example-item">Heading 2</h2>
  <h3 class="example-item">Heading 3</h3>
  <h4 class="example-item">Heading 4</h4>
  <h5 class="example-item">Heading 5</h5>
  <h6>Heading 6</h6>
</div>

```html
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
```

#### Paragraphs

Paragraphs `<p>` uses `font-size: .875rem (14px)`, `line-height: 1.5rem(24px)`, and `margin-top-bottom: .875em (14px)`. You can mimic a paragraph style with the `.paragraph` class.

<div class="example">
  <p class="example-item">Paragraph tag</p>
  <div class="paragraph">Paragraph class</div>
</div>

```html
<p>Paragraph tag</p>
<div class="paragraph">Paragraph class</div>
```
