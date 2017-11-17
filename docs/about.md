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

As for JavaScript components, they are primarily written on ES2015 (using [Babel](https://babeljs.io)) and bundled to ES5 UMD components with [Webpack](https://webpack.github.io/).

## Browser Support
Garden CSS/JS components targets all major browsers, including IE9+. CSS prefixors are added through [Autoprefixer](https://github.com/postcss/autoprefixer).

## Getting Started
Be sure to checkout the [Getting Started section](getting-started.html) for more info on how to use Garden.

##### A huge shoutout to the [Primer project](https://primercss.io), which heavily inspired the layout and the documentation approach of this library.
