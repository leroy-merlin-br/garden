---
title: JS Form
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: js-form
section: js
---

# JS Form
<p class="lead">
  The form component is built as a jQuery plugin responsible for handling the state of input elements.
</p>

### How to use
By passing an object as a parameter to the `form` function, you can define the `event` that will trigger the component's action, as well as list the `selectors` attached to that event.
```js
// accepted options
var options = {
  events: 'change',
  selectors: '.input, select, .select, .textarea'
};

$('[data-form]').form(options);
```
<p class="notification notification-warning">
  Notice that the strings used in the example above are the default values.
</p>

With that, whenever a `change` event occurs in one of the selectors listed, the component will toggle the `.active` class, if needed.

### How it works
The component constructor will loop through each `selector` found on the element and check if it has either a `value` or a `placeholder`, then add or remove the `.active` class on the `.field` element. If the `selector` does not have a `.field` as a parent, the verification will be skipped, and no classes will be added.
After this initial setup, the verification process will be repeated according to the event listener registered.
