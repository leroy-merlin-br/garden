---
title: Utilities
layout: page.jade
sidebar: true
collection: docs
priority: 0
path: js-utilities
section: js
---

# Utilities
<p class="lead">
  Set of utilities provided to help you write a better JavaScript code.
</p>

## Summary
1. [Scroll](#scroll)
2. [Debounce](#debounce)
3. [Throttle](#throttle)
4. [Remove from array](#remove-from-array)
5. [TransitionEnd](#transitionend)

## Scroll
This utility works with the help of [jump.js](http://callmecavs.com/jump.js/) and provides a function to scroll the page body into the position of the element provided.

You can use it as a jQuery plugin:

```js
$('.heading-1').scroll();
```

Or as a vanilla constructor:

```js
 import scroll from 'src/js/utils/scroll';

 let element = document.querySelector('div');

 let options = {
   // all the options available from jump.js
 }

 scroll(element, options)
```
#### Options
You can use all the options available from [jump.js](http://callmecavs.com/jump.js/). The options described below are the default ones when you use this utility as a jQuery plugin.

| Option            | Default | Description |
|-------------------|-------------|
| duration | 500  | The scroll duration (ms) |
| offset | -30 | The offset from the provided element |

You can click on the button below to see how it works.

<button class="button button-primary" data-scroll>Scroll to footer</button>

## Debounce
A utility to help restrain the execution of the provided function until a certain amount of time has passed without it being called.

```js
 import debounce from 'src/js/utils/debounce';

 let handler = (e) = {
  alert(e.target.value);
 };

 $('input').on('input', debounce(handler, 500));

 // the handler will be called only if it is not called again within 500ms.
```

## Throttle
A utility to help restrain the execution of the provided function multiple times before the time provide has passed.

```js
 import throttle from 'src/js/utils/throttle';

 let handler = (e) = {
  alert(e.target.value);
 };

 $('input').on('input', throttle(handler, 500));

 // the handler will be called only once within 500ms, even if the user inputs again.
```

## Remove from array
A function to remove elements from an [array-like](http://www.2ality.com/2013/05/quirk-array-like-objects.html) object.

```js
 import removeFromArray from 'src/js/utils/remove-from-array';

 let nodes = document.querySelectorAll('.image');

 removeFromArray(nodes, nodes[2]);
```
<p class="notification notification-warning">
  Under the hood, this utility executes the `indexOf` and `splice` methods on the array and item provided.
</p>

## TransitionEnd

A `transitionend` event is fired whenever a CSS transition finishes. However, each browser has a different name for this event, so this utility helps at checking which `transitionend` event name is supported in the current browser.


```js
import transitionEnd from 'src/js/utils/transitionend';

$('div').on(transitionEnd(), () => {
  alert('Transition has finished');
});
```
