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

## Emitter
`Emitter` is an instance of `eventEmitter`, responsible to handle the communication of garden components:

```js
import emitter from 'src/utils/emitter';


emitter.on('validation:error', (err, input) => {
  // Here you can handle an event emitter by a garden component
});

// You can also use it to emit your own events to your app:

emitter.on('myEvent', (data) => console.log(data));

emitter.emit('myEvent', myEventData);
```

## Debounce
A function to help restrain the execution of the provided function once until the
timeout triggers:

```js
 import debounce from 'src/js/utils/debounce';

 let handler = (e) = {
  alert(e.target.value);
 };

 $('input').on('input', debounce(handler, 500));

 // handler will be called only if debounce isn't called again for 500 ms
```

## Throttle
A function to help restrain the execution of the provided function once during
the provided timeout, then reset it:

```js
 import throttle from 'src/js/utils/throttle';

 let handler = (e) = {
  alert(e.target.value);
 };

 $('input').on('input', throttle(handler, 500));

 // handler will called only once during the 500, even if the user inputs again.
```
