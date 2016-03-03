---
title: Form
layout: page.jade
sidebar: true
collection: js
priority: 3
path: form
---

# Form

### How to use
As in right now, the `form` plugin is responsible to handle the `.active` state of the `.field`:

```js
// accepted options / default values:
var options = {
  events: 'change',
  selectors: '.input, select, .select, .textarea'
};

$('[data-form]').form(options);
```

The constructor will loop through each `selector` found on the element and check if it has either a `value` or `placeholder`, then add/remove the `.active` class on the `.field` molecule. If the `selector` does not have a `.field` and parent, the verification will be skipped, and no classes will be added.

The provided event listener will do the same verification process.
