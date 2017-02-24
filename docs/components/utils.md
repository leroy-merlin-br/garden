---
title: Utils
layout: page.jade
sidebar: true
collection: docs
priority: 0
path: utils
section: js
---

# Utils
<p class="lead">Garden provides a few utils to help writing better javascript. All utils are located at `src/js/utils`.</p>

## Scroll
A function to scroll (with the help of [jump.js](http://callmecavs.com/jump.js/)) the `document.body` into the position of the provided element:

```js
 import scroll from 'src/js/utils/scroll';

 let element = document.querySelector('div'); // It can also be a jQuery instance

 let options = {
   // all options available from jump.js
 }

 scroll(element, options)
```

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

## TransitionEnd

A function that check witch `transitionend` event name is supported in current browser.
`transitionend` event is fired when any css transition is finished, but each browser has a different name. This util return the right name based in your browser.

```js
import transitionEnd from 'src/js/utils/transitionend';

$('div').on(transitionEnd(), () => {
  alert('Transition has finished');
});
```
