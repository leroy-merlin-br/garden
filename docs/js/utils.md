---
title: Utils
layout: page.jade
sidebar: true
collection: js
priority: 1
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
```
