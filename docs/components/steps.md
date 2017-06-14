---
title: Steps
layout: page.jade
sidebar: true
collection: docs
priority: 1
path: steps
section: css
---

# Steps
<div class="lead">
  Steps convey progress through numbered steps.
</div>

## Usage

To get the default style for this component you just have to add the `.steps-container` class to a `<ul>` tag and `.steps-stage` to an `<li>` children.

For the active steps use `.active` and for the current step use `.current`.

<div class="example example-code">
  <div class="steps-container">
    <div class="steps-stage active">
      <div class="steps-bullet">
        1
      </div>
      <div class="steps-label">
        Order Received <br>
        <small>em 01/05/2017</small>
      </div>
    </div>
    <div class="steps-stage active">
      <div class="steps-bullet">
        2
      </div>
      <div class="steps-label">
        Separate order <br>
        <small>em 01/05/2017</small>
      </div>
    </div>
    <div class="steps-stage active current">
      <div class="steps-bullet">
        3
      </div>
      <div class="steps-label">
        Order dispatched <br>
        <small>em 01/05/2017</small>
      </div>
    </div>
    <div class="steps-stage">
      <div class="steps-bullet">
        4
      </div>
      <div class="steps-label">
        Order delivered <br>
        <small>em 01/05/2017</small>
      </div>
    </div>
  </div>
</div>

```html
  <ul class="steps-container">
    <li class="steps-stage active">
      <div class="steps-bullet">
        1
      </div>
      <div class="steps-label">
        Order Received <br>
        <small>em 01/05/2017</small>
      </div>
    </li>
    <li class="steps-stage active">
      <div class="steps-bullet">
        2
      </div>
      <div class="steps-label">
        Separate order <br>
        <small>em 01/05/2017</small>
      </div>
    </li>
    <li class="steps-stage active current">
      <div class="steps-bullet">
        3
      </div>
      <div class="steps-label">
        Order dispatched <br>
        <small>em 01/05/2017</small>
      </div>
    </li>
    <li class="steps-stage">
      <div class="steps-bullet">
        4
      </div>
      <div class="steps-label">
        Order delivered <br>
        <small>em 01/05/2017</small>
      </div>
    </li>
  </ul>
```

For the display warning step use `.warning` beside `.active`

<div class="example example-code">
  <div class="steps-container">
    <div class="steps-stage active">
      <div class="steps-bullet">
        1
      </div>
      <div class="steps-label">
        Order Received <br>
        <small>em 01/05/2017</small>
      </div>
    </div>
    <div class="steps-stage active">
      <div class="steps-bullet">
        2
      </div>
      <div class="steps-label">
        Separate order <br>
        <small>em 01/05/2017</small>
      </div>
    </div>
    <div class="steps-stage active warning current">
      <div class="steps-bullet">
        3
      </div>
      <div class="steps-label">
        Order dispatched <br>
        <small>em 01/05/2017</small>
      </div>
    </div>
    <div class="steps-stage">
      <div class="steps-bullet">
        4
      </div>
      <div class="steps-label">
        Order delivered <br>
        <small>em 01/05/2017</small>
      </div>
    </div>
  </div>
</div>

```html
  <ul class="steps-container">
    <li class="steps-stage active">
      <div class="steps-bullet">
        1
      </div>
      <div class="steps-label">
        Order Received <br>
        <small>em 01/05/2017</small>
      </div>
    </li>
    <li class="steps-stage active">
      <div class="steps-bullet">
        2
      </div>
      <div class="steps-label">
        Separate order <br>
        <small>em 01/05/2017</small>
      </div>
    </li>
    <li class="steps-stage active warning current">
      <div class="steps-bullet">
        3
      </div>
      <div class="steps-label">
        Order dispatched <br>
        <small>em 01/05/2017</small>
      </div>
    </li>
    <li class="steps-stage">
      <div class="steps-bullet">
        4
      </div>
      <div class="steps-label">
        Order delivered <br>
        <small>em 01/05/2017</small>
      </div>
    </li>
  </ul>
```
