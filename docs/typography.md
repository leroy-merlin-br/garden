---
title: Typography
layout: page.jade
sidebar: true
collection: css
priority: 5
path: typography
---

# Typography
All typography tags/classes uses `rem` in order to set size. The `$default-font-size` variable uses `16px`.

In case you use Garden css components individually (bundling with PostCSS), you can provide your own `$default-font-size` to change it.
We provide both markup tags and classes in order to handle text styling with flexibility.

## Defaults
Check out our [scaffolding section](scaffolding.md) for more info on providing your own defaults for typography.

## Headings

In alternative to using directly `<h[1-6]>`, you can use `.heading-[1-6]` classes for the same style of a heading tag.

<div class="example">
  <div class="heading-1">Heading 1</div>

  <hr />

  <div class="heading-2">Heading 2</div>

  <hr />

  <div class="heading-3">Heading 3</div>

  <hr />

  <div class="heading-4">Heading 4</div>

  <hr />

  <div class="heading-5">Heading 5</div>

  <hr />

  <div class="heading-6">Heading 6</div>
</div>

```html
  <div class="heading-1"></div>
  <div class="heading-2"></div>
  <div class="heading-3"></div>
  <div class="heading-4"></div>
  <div class="heading-5"></div>
  <div class="heading-6"></div>
```

## Paragraphs

Tag `<p>` is styled by default. You can also use the `.paragraph` class.

<div class="example">
  <div class="paragraph">Paragraph class</div>
</div>

```html
  <div class="paragraph"></div>
```

## Links

`<a>` tags are styled by default. You can also use the `.link` class.

<div class="example">
  <div class="link">Link</div>
</div>

```html
  <div class="link"></div>
```

## Inline text

Tags such as `<strong>`, `<b>`, `<em>`, `<i>`, `<u>` are by default stylized. You can also use `.strong` and `.italic`, `.underlined` to reuse their styles.

<div class="example">
  <div class="strong">strong</div>

  <hr>

  <div class="italic">italic</div>

  <hr>

  <div class="underlined">underlined</div>
</div>

```html
  <p class="strong"></p>
  <p class="italic"></p>
  <p class="underlined"></p>
```

## Text transformation


#### Capitalized
<div class="example">
  <p class="capitalize">capitalized text</p>
</div>

```html
  <p class="capitalize"></p>
```

#### Uppercase
<div class="example">
  <p class="uppercase">uppercase text</p>
</div>

```html
  <p class="uppercase"></p>
```

#### Lowercase
<div class="example">
  <p class="lowercase">LOWERCASE TEXT</p>
</div>

```html
  <p class="lowercase"></p>
```

## Text alignment

#### Left alignment
<div class="example">
  <p class="align-left">Left alignment</p>

</div>

```html
  <p class="align-left"></p>
```

#### Right alignment
<div class="example">
  <p class="align-right">Right alignment</p>
</div>

```html
  <p class="align-right"></p>
```

#### Center alignment
<div class="example">
  <p class="align-center">Center alignment</p>
</div>

```html
  <p class="align-center"></p>
```

#### Justified text
<div class="example">
  <p class="align-justify">Justified text</p>
</div>

```html
  <p class="align-justify"></p>
```

#### No wrap
<div class="example">
  <p class="align-nowrap">No wrap</p>
</div>

```html
  <p class="align-nowrap"></p>
```
