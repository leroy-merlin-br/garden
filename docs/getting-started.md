---
title: Getting Started
layout: page.jade
path: getting-started
---
## Install
We provide some ways to use Garden. You can use it by installing from npm, bower or manually (downloading our [latest release](https://github.com/leroy-merlin-br/garden/releases)):

To install using npm

```js
npm install garden
```

To install using bower

```js
bower install garden
```

### CDN

You can also use Garden through a CDN (Content Delivery Network) link, so you will not need to download and host the code within your application.

CSS

```html
<link href="https://unpkg.com/garden/dist/css/garden.min.css" rel="stylesheet">
```

JavaScript

```html
  <script scr="https://unpkg.com/garden/dist/js/garden.min.js"></script>
```

Garden main files are located on `dist/garden.min.css` and `dist/garden.min.js` (It comes with all JS components bundled together).

If you want to use components individually, you will have to build them as well:

#### CSS
We rely on [PostCSS](https://github.com/postcss/postcss) to process our CSS files. In order to import a specific file (Using [PostCSS import plugin](https://github.com/postcss/postcss-import)):

```scss
/* css files are located at: garden/src/css/ */

@import "garden/src/atoms/button";

/* PostCSS import resolves bower_components/node_modules folder automatically */
```

#### JavaScript
We use [Webpack](https://webpack.github.io/) with [Babel-loader](https://github.com/babel/babel-loader) to handle ES2015 to ES5 transpiling/bundling. Since it's plain ES2015, you can use any transpiling along with any bundler as well:

```js
// ES2015 import syntax:

// You will have to point to your bundler where to resolve garden imports, or use directly from node_modules/bower_components:
import file from 'node_modules/garden/src/js/file.js';
```

JavaScript components rely on jQuery to work, most of the time. Please note `garden.min.js` *does not* comes with jQuery. You have to add your own version of it.

##### Checkout the **<a href="https://github.com/leroy-merlin-br/garden" target="_blank" title="Garden Readme">README</a>** of the project to know how to build the project locally.
