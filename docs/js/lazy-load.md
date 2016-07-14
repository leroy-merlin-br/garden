---
title: Lazy Load
layout: page.jade
sidebar: true
collection: js
priority: 1
path: lazy-load
---

# Lazy Load
<p class="lead">Lazy Load is a component responsible to handle delayed image rendering, preventing unnecessary requests on never used images.</p>

## How it works
Usually you will implement lazy load on a page with lots of images, where the user does not necessarily loads them all. This technique <b>lazy</b> loads the pictures you do not want as first load, it's actually pretty easy to implement using our component.

If you want to provide a placeholder or a lower resolution image, you can simply use an `<img />` for it:

```html
  <img data-lazy data-src="src/imageToBeLoaded.png" src="placeholderImage.png"/>
```

`[data-lazy]` will tell the component it's a lazy image (You can change the selector if you want, we will get to it later), and using `[data-src]` the lazy component will replace the provided tag with an `<img />` using `[data-src]` as `[src]`:

```html
  <img data-lazy data-src="src/imageToBeLoaded.png" src="placeholderImage.png"/>

  /* Becomes */

  <img src="src/imageToBeLoaded.png" />
```

In fact, you can use any type of markup in order to create a lazy image:

```html
  <span data-lazy data-src="src/imageToBeLoaded.png"></span>

  /* Becomes */

  <img src="src/imageToBeLoaded.png" />
```

## Attributes
A lazy tag will carry all of its attributes, except the ones used by the component, such as the selector provided (by default `[data-lazy]`), `[data-src]` and `[data-srcset]`, which we will get to it soon.

```html
  <span data-lazy data-src="src/imageToBeLoaded.png" class="image" data-component="image"></span>

  /* Becomes */

  <img src="src/imageToBeLoaded.png" class="image" data-component="image" />
```

##### * Please take note that a lazy image will not carry any source of data binded to it, such as events.


## Serving images by breakpoint
The lazy component also handles responsive images by default, using the `[data-srcset]`:

```html
  <img data-lazy src="src/placeholder.png" data-srcset="mobile.png 0, tablet.png 768, desktop.png 1280"/>
```

The `[data-srcset]` attribute accepts a list of images, divided by commas, where the first argument is the image source, and the second the `window min-width`. The `min-width` is retrieved with `$(window).width()` at the moment of the placeholder/image render/replace process.

You do not have to provide the list in minWidth order, but it's way easier to read if you do so.

##### * Please take note that this approach only happens during render/replace process. It does not happen when you resize your window.


## Initializing the component with JavaScript
Other than just setting up a plain `<img data-lazy />` tag, you need to initialize the component as well. You can initialize it as a jQuery plugin, or as a vanilla constructor. Take note that even the vanilla constructor relies on jQuery to perform a few operations:

#### Using as a jQuery plugin
```js
$('[data-lazy]').lazyload(options);
```

#### Using as a vanilla constructor
```js
new LazyLoad(document.querySelectorAll('[data-lazy]'), options);
```

### Options

| Option            | Description |
|-------------------|-------------|
| throttle (1000ms)     | The amount of time (in ms) to allow the `[data-lazy]` verification to be triggered. This prevent bloating of execution, since it's bound to the `scroll` event of the window. |
| offset (200px)       | The offset (in px) allowed before the image actually reaches the viewport. This is intended to smooth a bit the image renderization/visualization process, since it will trigger a bit early than image reaching the bottom of the view. To remove it, set it to 0. |
| selector (string) | The selector to be removed from the attributes transfer operation. By default it is `[data-lazy]`. If you are willing to use other than this, change it here as well. Any valid jQuery selector is valid here. |

The options object is incremental, so you can change just which options you want:


```js
let options = {
  throttle: 4000 // Increasing the throttle wait time
};

$('[data-lazy]').lazyload(options);

// or with vanilla constructor

new LazyLoad(document.querySelectorAll('[data-lazy]'), options);
```

Changing the default selector:

```js
let options: {
  selector: '.lazy-image'
};

$('.lazy-image').lazyload(options);

// or with vanilla constructor

new LazyLoad(document.querySelectorAll('.lazy-image'), options);
```

### Destroying an instance
By default, when the lazy component does not find any other `[data-lazy]` to be checked, it automatically triggers `off` to the `$(window).scroll` event, but you can do it manually:

```js
$('[data-lazy]').lazyload();

$('[data-lazy]').data('lazy-load').destroy();

// or with vanilla constructor

let lazyLoad = new LazyLoad(document.querySelectorAll('[data-lazy]'));

lazyLoad.destroy();
```
