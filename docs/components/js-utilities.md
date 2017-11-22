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
1. [Debounce](#debounce)
1. [Throttle](#throttle)
1. [Remove array like](#remove-array-like)
1. [TransitionEnd](#transitionend)

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

## Remove array like
A function to remove elements from an [array-like](http://www.2ality.com/2013/05/quirk-array-like-objects.html) object. The object returned corresponds to an array without the element passed as a parameter.

```js
 import removeArrayLike from 'src/js/utils/remove-array-like';

 let nodes = document.querySelectorAll('.image');

 nodes = removeArrayLike(nodes, nodes[2]);
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
