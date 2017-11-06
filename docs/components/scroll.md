---
title: Scroll
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: scroll
section: js
---

# Scroll
<p class="lead">
  The Scroll component is responsible for scrolling the page to a specific element position.
</p>

## Summary
1. [Usage](#usage)
1. [Options](#options)

## Usage
This component works with the help of [jump.js](http://callmecavs.com/jump.js/) and 
provides a function to scroll the page body into the position of the element provided.

You can use it as a vanilla constructor:

```js
import Scroll from 'garden/src/js/components/scroll';

const element = document.querySelector('div')
const options = {
  // all the options available from jump.js
}

new Scroll(element, options)
```

## Options
You can use all the options available from [jump.js](http://callmecavs.com/jump.js/). 
Below are the default options for this component.

| Option            | Default | Description |
|-------------------|-------------|
| duration | 500  | The scroll duration (ms) |
| offset | -30 | The offset from the provided element |

You can click on the button below to see how it works.

<button class="button button-primary" data-scroll>Scroll to footer</button>
