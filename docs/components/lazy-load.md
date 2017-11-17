---
title: Lazy Load
layout: page.jade
sidebar: true
collection: docs
priority: 1
path: lazy-load
section: js
---

# Lazy Load
<p class="lead">
  The Lazy Load component is responsible for handling the image rendering
  process in a page, loading images only when needed.
</p>

## Summary
1. [Usage](#usage)
1. [Attributes](#attributes)
1. [Serving images by breakpoint](#serving-images-by-breakpoint)
1. [Options](#options)
1. [Destroying an instance](#destroying-an-instance)

## Usage
This component is generally used in pages filled with images, where users do not need to load all of them at once.

To apply a lazy load behavior to an element you have to add the `[data-lazy]`
attribute to any HTML block and the `[data-src]` attribute along with the path for the image to be loaded.  

With that, the component will replace the provided markup with an `<img />` tag,
using the `[data-src]` attribute as the `src` property, as shown below.

```html
  <span data-lazy data-src="src/imageToBeLoaded.png"></span>

  /* Becomes */

  <img src="src/imageToBeLoaded.png" />
```

If you want to provide a placeholder or a lower resolution image, you can use
an `<img />` tag and provide a `src` attribute to it.

```html
  <img data-lazy data-src="src/imageToBeLoaded.png" src="placeholderImage.png"/>

  /* Becomes */

  <img src="src/imageToBeLoaded.png" />
```

<p class="notification notification-warning">
  Notice that, other than just adding the `[data-lazy]` attribute to the markup,
  you need to initialize the component as well.
  Check out the [Options section](#options) to learn how it works.
</p>

### Attributes
Except for the default attributes (`[data-lazy]`, `[data-src]`, `[data-srcset]`),
all the properties passed to a lazy tag will be sent to the generated markup, as shown below.

```html
  <span data-lazy data-src="src/imageToBeLoaded.png" class="image" data-component="image"></span>

  /* Becomes */

  <img src="src/imageToBeLoaded.png" class="image" data-component="image" />
```
<p class="notification notification-warning">
  Please take note that a Lazy Load image will not carry any source of data binded to it, such as events.
</p>


### Serving images by breakpoint
The lazy load component also handles responsive images by using the `[data-srcset]`
attribute, which accepts a list of images, divided by commas. The first argument
is the image source and the second is the window `min-width`.

```html
  <img data-lazy src="src/placeholder.png" data-srcset="mobile.png 0, tablet.png 768, desktop.png 1280"/>
```

<p class="notification notification-warning">
  You do not have to provide the values in the order showed above, but it is easier to read if you do so.  
  Also, you should notice that this approach works only during render or replace
  process, and not during window resizing.
</p>

### Options
These are the options you can pass to the component while initializing it.

| Option            | Default | Description |
|-------------------|-------------|
| throttle | 1000ms     | The amount of time (in milliseconds) that the verification process must wait before being triggered again. This prevents execution overload, since this process is bound to the `scroll` event of the window. |
| offset | 200px       | The allowed offset (in pixel) before the image actually reaches the viewport. This is aimed at making the image renderization process a little bit softer. You can remove it by setting it to 0. |
| selector | `[data-lazy]` | The selector used to identify a Lazy Load component. |

Below is how you can customize the component using the options provided.

```js
const options = {
  throttle: 4000, // Increasing the throttle waiting time
  selector: '.lazy-image' // Changing the default selector
};

new LazyLoad(document.querySelectorAll('[data-lazy]'), options);
```

### Destroying an instance
By default, when the Lazy Load component does not find a `[data-lazy]` attribute in the page, it automatically removes the listener for the `scroll` event, but you can also do it manually by using the `destroy()` method.

```js
const lazyLoad = new LazyLoad(document.querySelectorAll('[data-lazy]')).init();

lazyLoad.destroy();
```
