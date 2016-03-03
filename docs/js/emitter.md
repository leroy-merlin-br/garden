---
title: Emitter
layout: page.jade
sidebar: true
collection: js
priority: 0
path: emitter
---

# Emitter
`Emitter` is an instance of [node's eventEmitter](https://nodejs.org/api/events.html), responsible to handle the communication between garden components

Usually garden components will emit an event to allow third party integrations with it.

For example, the [validation](validation.html) component emits an event when a field is validated. Either for success or error:

```js
import emitter from 'src/utils/emitter';


emitter.on('validation:error', (field, errors) => {
  // Here you can handle an errror event, emitted by the validation component.
});
```

#### You can also use it to emit your own events to your app:

```js
emitter.on('myEvent', (data) => {
  // Listens to myEvent, and work with the data object
});

emitter.emit('myEvent', myEventData);
```
