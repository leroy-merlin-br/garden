---
title: About
layout: page.jade
path: about
---

# About
<p class="lead">Garden is a css library created based on Leroy Merlin's needs, and used internally as well.</p>

## How
As for component idealization (the conception of a new component, such as buttons) Garden follows the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) and [Mobile-first](http://bradfrost.com/blog/web/mobile-first-responsive-web-design/) principles.

Stack wise, Garden was built using [PostCSS](https://github.com/postcss/postcss) for CSS processing, alongside with a couple [PostCSS plugins](https://github.com/leroy-merlin-br/garden/blob/master/package.json).

As for JavaScript components, they are primarily written on ES2015 (using [Babel](babeljs.io)) and bundled to ES5 UMD components with [Browserify](http://browserify.org/).

Garden also relies on jQuery to provide API standards for it's components. Please take note Garden does not comes with jQuery, allowing you to use your own version based on your needs. You can opt for Zepto, for example. Or a custom build of jQuery as well.

## Browser Support
Garden CSS/JS components targets all major browsers, including IE9+. CSS prefixors are added through [Autoprefixer](https://github.com/postcss/autoprefixer).

## Getting Started
Be sure to checkout the [Getting Started section](gettind-started.md) for more info on how to use Garden.

##### A huge shoutout to the [Primer project](https://primercss.io), which heavily inspired the layout and the documentation approach of this library.
