---
title: Typography
layout: page.jade
sidebar: true
collection: docs
priority: 5
path: typography
section: css
---

# Typography
<p class="lead">
  Set of default styles for standard elements and properties.
</p>

<br>

By default, Garden uses `16px` for the `default-font-size` variable and all the typography classes/tags are sized with `rem`.

<p class="notification notification-warning">
  In case you use Garden CSS components individually (bundling them with PostCSS) and want to set your own font size, you can provide a different value for the `$default-font-size` variable.
</p>


We provide both markup tags and classes in order to handle text styling with flexibility.

For more info about setting your own typography, you can check out our [scaffolding section](scaffolding.html).

## Headings

As an alternative to using `<h[1-6]>` tags, you can use `.heading-[1-6]` classes to get the same style.

<div class="example example-code">
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
  <div class="heading-1">Heading 1</div>
  <div class="heading-2">Heading 2</div>
  <div class="heading-3">Heading 3</div>
  <div class="heading-4">Heading 4</div>
  <div class="heading-5">Heading 5</div>
  <div class="heading-6">Heading 6</div>
```

## Paragraphs

Instead of using the tag `<p>`, you can use the `.paragraph` class.

<div class="example example-code">
  <div class="paragraph">Paragraph class</div>
</div>

```html
  <div class="paragraph">Paragraph class</div>
```

## Links

Instead of using the tag `<a>`, you can use the `.link` class.

<div class="example example-code">
  <div class="link">Link</div>
</div>

```html
  <div class="link">Link</div>
```

## Inline text

Instead of using the tags `<strong>`, `<b>`, `<em>`, `<i>`, `<u>`, you can use the `.strong`, `.italic`, and `.underlined` classes.

<div class="example example-code">
  <div class="strong">strong</div>

  <hr>

  <div class="italic">italic</div>

  <hr>

  <div class="underlined">underlined</div>
</div>

```html
  <p class="strong">strong</p>
  <p class="italic">italic</p>
  <p class="underlined">underlined</p>
```

## Text transformation

<br>
<div class="example example-code">
  <p class="capitalize">capitalized text</p>
</div>

```html
  <p class="capitalize">capitalized text</p>
```

<br>

<div class="example example-code">
  <p class="uppercase">uppercase text</p>
</div>

```html
  <p class="uppercase">uppercase text</p>
```

<br>

<div class="example example-code">
  <p class="lowercase">LOWERCASE TEXT</p>
</div>

```html
  <p class="lowercase">LOWERCASE TEXT</p>
```

## Text alignment

<br>

<div class="example example-code">
  <p class="align-left">Left alignment</p>

</div>

```html
  <p class="align-left">Left alignment</p>
```

<br>

<div class="example example-code">
  <p class="align-right">Right alignment</p>
</div>

```html
  <p class="align-right">Right alignment</p>
```

<br>

<div class="example example-code">
  <p class="align-center">Center alignment</p>
</div>

```html
  <p class="align-center">Center alignment</p>
```

<br>

<div class="example example-code">
  <p class="align-justify">
    This is supposed to be a justified paragraph and it needs to be long enough so you will notice that it is really a justified paragraph. With that this block will not look the same as the left aligned paragraph showed at the beginning of this section, which would seem like we are trying to deceive you.
  </p>
</div>

```html
  <p class="align-justify">
      This is supposed to be a justified paragraph and it needs to be long enough so you will notice that it is really
      a justified paragraph. With that this block will not look the same as the left aligned paragraph showed at the
      beginning of this section, which would seem like we are trying to deceive you.
  </p>
```

<br>

<div class="example example-code">
  <p class="align-nowrap">No wrap</p>
</div>

```html
  <p class="align-nowrap">No wrap</p>
```
