---
title: Emitter
layout: page.jade
sidebar: true
collection: js
priority: 0
path: emitter
---

# Emitter
An emitter is an object responsible for handling the communication among components.

This element is built as an instance of the [EventEmitter](https://nodejs.org/api/events.html) object from Node.js and therefore exposes some useful functions, such as `emitter.on()` and `emitter.emit()`.


### Registering events
To register an event you can use the `emitter.on()` function, passing the event name and a handler as parameters.
```js
import emitter from 'src/utils/emitter';

emitter.on('eventName', () => {
  // Here you can handle the event.
});
```
### Passing arguments
It is possible to pass arguments to a listener while emitting an event with the `emitter.emit()` function.
```js
import emitter from 'src/utils/emitter';

emitter.on('event', (data) => {
  // Here you can work with the data passed.
});

emitter.emit('event', eventData);
```
<p class="notification notification-warning paragraph">
  Notice that you can customize event names as you want, but they are generally camel-cased strings.
</p>

### Third party integration
Usually, Garden components will emit events to allow third party integrations in a project.

For example, the [validation](validation.html) component emits an event whenever a field is validated, either for success or error.
```js
import emitter from 'src/utils/emitter';

emitter.on('validation:error', (field, errors) => {
  // Here you can handle the error event, emitted by the validation component.
});
```
