---
title: Utils
layout: page.jade
sidebar: true
collection: js
priority: 0
path: utils
---

# Utils
<p class="lead">Garden provides a few utils to help writing better javascript. All utils are located at `src/js/utils`.</p>

## Debounce
A function to help restrain the execution of the provided function once until the
timeout triggers:

```js
 import debounce from 'src/js/utils/debounce';

 let handler = (e) = {
  alert(e.target.value);
 };

 $('input').on('input', debounce(handler, 500));

 // handler will be called only if debounce isn't called again for 500 ms
```

## Throttle
A function to help restrain the execution of the provided function once during
the provided timeout, then reset it:

```js
 import throttle from 'src/js/utils/throttle';

 let handler = (e) = {
  alert(e.target.value);
 };

 $('input').on('input', throttle(handler, 500));

 // handler will called only once during the 500, even if the user inputs again.
```

## Remove from Array-like
A function to remove elements from an [array-like object](http://www.2ality.com/2013/05/quirk-array-like-objects.html):

```js
 import removeFromArray from 'src/js/utils/remove-from-array';

 let nodes = document.querySelectorAll('.image');

 removeFromArray(nodes, nodes[2]);
```

Under the hood, it's pretty much an `indexOf` + `splice` execution.

## ScrollTo
A function to scroll to the provided element:

```js
  import scrollTo from 'src/js/utils/scroll-to';

  scrollTo(document.querySelector('.foo'));
```

## AnimationFrame
A function which returns the available usage of `requestAnimationFrame`, or a `setTimeout` fallback
