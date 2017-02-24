---
title: Scroll
layout: page.jade
sidebar: true
collection: docs
priority: 4
path: scroll
section: js
---

# Scroll
<p class="lead">Scroll is a component which allows you to scroll from one point to another of the page.</p>

<strong>Please note the scroll will scroll the element from the `document.body`, scrolling inside of other elements won't work.</strong>

## How to
You can use it as a jQuery plugin:

```js
$('.heading-1').scroll(options);
```

or a vanilla constructor (using the [scroll util](utils.html)):

```js
 import scroll from 'src/js/utils/scroll';

 let element = document.querySelector('div'); // It can also be a jQuery instance

 let options = {
   // all options available from jump.js
 }

 scroll(element, options)
```

## Options

All options available from [jump.js](http://callmecavs.com/jump.js/). The usage of the jQuery plugin will work with two defaults:

| Option            | Description |
|-------------------|-------------|
| duration (500)  | The scroll duration (ms) |
| offset (-30) | The offset from the provided element |

### Working Example:

<button class="button button-primary" data-trigger="scroll">Scroll back to title</button>
