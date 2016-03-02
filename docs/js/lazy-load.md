---
title: Lazy Load
layout: page.jade
sidebar: true
collection: js
priority: 0
path: lazy-load
---

# Lazy Load
<p class="lead">Lazy Load is a component responsible to handle delayed image rendering, to prevent unnecessary requests to never used images.</p>

## How to use
The Lazy Load component works a bit differently than most Lazy Load plugins out there. Instead of providing something like `<img data-src="src/img" />` (which is not a good call, since a few browsers will try to fetch even without the `src`, forcing 404 on the image).

Instead of it, this plugin work with placeholders:

```html
  <div data-lazy data-src="src/img.png"></div>
  <noscript>
    <img src="src/img.png"/>
  </noscript>

  /* This way the tell search engines we have an image there */
```

You can also work with a `data-srcset`, which will select the image the best image based on window width:

```html
<div data-lazy data-srcset="src/mobile.png 0, src/tablet.png 768, src/desktop.png 1024"></div>
/* The plugin will loop through, and try to match the closest image based on the current window width. */

/* Supposing the window width is 800px, the result would be: */

<img src="src/tablet.png" />
```

The plugin will loop through all attributes of the placeholder, ignoring the plugin ones, such as `[data-src]`, `[data-srcset]` or the selector, which by default is `[data-lazy]` in order to place them again to the final img:

```html
<div data-lazy data-src="src/img.png" class="image" data-image="true"></div>

/* Will result: */
<img src="src/img.png" class="image" data-image="true" />
```

Please take note the placeholder will not carry on binded JavaScript actions to it. Such as eventListeners.

## Initializing

You can use as a jQuery plugin:

```js
$('[data-lazy]').lazyload(options);
```

Or as a vanilla constructor:

```js
import LazyLoad from 'src/js/components/lazy-load';

let lazyLoad = new LazyLoad(document.querySelectorAll('[data-lazy]'));
```

The provided options are:

```js
// defaults
let options {
  throttle: 1000, // the throttle delay (ms) to prevent multiple calls
  offset: 200, // the offset (px) to load images. Set to 0 to load the image only when it is visible.
  selector: '[data-lazy]' // the provided selector to query. If you change the selector to something else, pass it here to avoid passing it to the created image.
};
```
