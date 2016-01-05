---
title: Grid
layout: page.jade
sidebar: true
collection: css
path: grid
class: grid
---

# Grid
<p class="lead">The grid is responsible for basic element positioning.</p>

### How to use
The grid is a third party [postCSS plugin](http://peterramsing.github.io/lost/).

The idea behind this concept is the flexibility to add just what you need. Instead of making the decision of providing a semantic/non-semantic responive grid system (which adds a big chunk of code), you can easily provide a bit of sugar to create a set of classes to handle it.

Basicly, you can make your columns using a class or not.

So let's build a simple grid of 4 columns. First just set up one column class and our wrapper:

```css
.wrapper {
  lost-utility: clearfix;
}

.column-xs-one {
  lost-column: 1/1;
}
```

```html
<section class="wrapper">
  <div class="column-xs-one">1</div>
  <div class="column-xs-one">2</div>
  <div class="column-xs-one">3</div>
  <div class="column-xs-one">4</div>
</section>
```

<section class="wrapper">
  <div class="column-xs-one">1</div>
  <div class="column-xs-one">2</div>
  <div class="column-xs-one">3</div>
  <div class="column-xs-one">4</div>
</section>

This was the first step building grid, so lets assume that first breakpoint is `min-width: 768px`. In first breakpoint we want 2 columns, we will use `column-sm-one-two` to represent it.

```css
@media (min-width: 768px) {
  .column-sm-one-two {
    lost-column: 1/2;
  }
}
```

```html
<section class="wrapper">
  <div class="column-xs-one column-sm-one-two">1</div>
  <div class="column-xs-one column-sm-one-two">2</div>
  <div class="column-xs-one column-sm-one-two">3</div>
  <div class="column-xs-one column-sm-one-two">4</div>
</section>
```

aaaand, that's what we have!

<section class="wrapper">
  <div class="column-xs-one column-sm-one-two">1</div>
  <div class="column-xs-one column-sm-one-two">2</div>
  <div class="column-xs-one column-sm-one-two">3</div>
  <div class="column-xs-one column-sm-one-two">4</div>
</section>

Now we have default screen size (mobile) and small screen represent by `sm` prefix, let's add one more breakpoint using `min-width: 960px` and `md` as prefix, showing 4 columns.

```css
@media (min-width: 960px) {
  .column-md-one-four {
    lost-column: 1/4;
  }
}
```

```html
<section class="wrapper">
  <div class="column-xs-one column-sm-one-two column-md-one-four">1</div>
  <div class="column-xs-one column-sm-one-two column-md-one-four">2</div>
  <div class="column-xs-one column-sm-one-two column-md-one-four">3</div>
  <div class="column-xs-one column-sm-one-two column-md-one-four">4</div>
</section>
```

aaaannd, that's it!

<section class="wrapper">
  <div class="column-xs-one column-sm-one-two column-md-one-four">1</div>
  <div class="column-xs-one column-sm-one-two column-md-one-four">2</div>
  <div class="column-xs-one column-sm-one-two column-md-one-four">3</div>
  <div class="column-xs-one column-sm-one-two column-md-one-four">4</div>
</section>

And that's how our css will be!

```css
.wrapper {
  lost-utility: clearfix;
}

.column-xs-one {
  lost-column: 1/1;
}

@media (min-width: 768px) {
  .column-sm-one-two {
    lost-column: 1/2;
  }
}

@media (min-width: 960px) {
  .column-md-one-four {
    lost-column: 1/4;
  }
}
```

We build a simple grid using Lost! Of course all these class are verbose, it's just a exemple.

You can make your own grid, using the way you want, that's why we're using Lost!
We don't want to force you to use **Garde** grid as we use, just build it as you like!
