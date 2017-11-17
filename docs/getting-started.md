---
title: Getting Started
layout: page.jade
path: getting-started
---
## Install
Installing Garden is pretty straightforward. You can do it via [npm](https://www.npmjs.com/) or [bower](https://bower.io/) by running one of the commands below.

##### Using npm
```js
npm install garden
```

##### Using bower
```js
bower install garden
```
<br>
As an alternative, you can manually download the source code for our [latest release](https://github.com/leroy-merlin-br/garden/releases).

## CDN
You can also use Garden through a CDN (Content Delivery Network) link, so you will not need to download and host the code within your application.

##### CSS

```html
<link href="https://unpkg.com/garden/dist/css/garden.min.css" rel="stylesheet">
```

##### JavaScript

```html
<script scr="https://unpkg.com/garden/dist/js/garden.min.js"></script>
```

## Using
Garden main files are located on `dist/garden.min.css` and `dist/garden.min.js` (It comes with all of the JS components bundled together). If you want to use components individually, you will have to build them as well.

##### CSS
We rely on [PostCSS](https://github.com/postcss/postcss) to process our CSS files. By using the [PostCSS import plugin](https://github.com/postcss/postcss-import) it is possible to import a specific file, as shown below.

```scss
/* css files are located at: garden/src/css/ */

@import "garden/src/atoms/button";

/* PostCSS import resolves bower_components/node_modules folder automatically */
```

##### JavaScript
We use [Webpack](https://webpack.github.io/) with [Babel-loader](https://github.com/babel/babel-loader) to handle the ES2015 to ES5 transpiling/bundling process. Since it's plain ES2015, you can use any transpiler along with any bundler as well:

```js
// ES2015 import syntax:

// You will have to point to your bundler where to resolve garden imports, or use directly from node_modules/bower_components:
import file from 'garden/src/js/file';
```

##### Checkout the **<a href="https://github.com/leroy-merlin-br/garden" target="_blank" title="Garden Readme">README</a>** of the project to know how to build the project locally.
