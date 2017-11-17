---
title: Validation
layout: page.jade
sidebar: true
collection: docs
priority: 1
path: validation
section: js
---

# Validation
<p class="lead">
  The validation component is responsible for handling form interactions with some flexible rules.
</p>

## Summary
1. [Usage](#usage)
1. [Options](#options)
1. [Validation names](#validation-names)  
  3.1 [required](#required)  
  3.2 [maxlength](#maxlength)  
  3.3 [minlength](#minlength)  
  3.4 [email](#email)  
  3.5 [confirm](#confirm)  
1. [Extending validations](#extending-validations)
1. [Handling validation events](#handling-validation-events)
1. [Validating fields individually](#validating-fields-individually)
1. [Validating all fields](#validating-all-fields)
1. [Dynamic fields](#dynamic-fields)

## Usage

To validate a form or a input you can simply create an instance of the
Validation component passing the element that should be validated.

```js
new Validation(document.querySelector('[data-form]')).init();
```

After that, you have to create the markup for the fields you want to validate.
Notice that you have to use the `[data-required]` and the `[data-validate]` attributes to each field,
as this allows you to have dynamic required fields, without too much effort.

```html
<form data-form>
  <input data-required data-validate="required" />
  <input type="checkbox" data-required data-validate="required" />

  /* Dynamic field, can be conditionally required by adding or removing the [data-required] attribute */
  <input type="checkbox" data-validate="required" />
</form>
```

Finally, to handle validation events you can use an [emitter](emitter.html), as described below.
The `validation:success` and `validation:error` are the events emitted by the validation component.
```js
emitter.on('validation:success', (field) => {});
emitter.on('validation:error', (field, errors) => {});
```

## Options
These are the options you can use to customize the component.

| Option            | Default | Description |
|-------------------|-------------|
| events | `blur`            | The events the component should listen to, such as blur, click, input, keypress and so on |
| selector | `[data-required]` | The selector to be dynamic required by the component instance |

Changing the default events and selector:
```js
const options = {
  events: 'blur, change',
  selector: '.required'
};

new Validation(document.querySelectorAll('[data-form]'), options).init();
```

## Validation names
To validate a field you must add the desired validation name to it.
Notice you can provide multiple validations separated by spaces.

```html
<input type="text" data-required data-validate="required" />

/* Multiple validations */

<input type="text" data-required data-validate="minlength maxlength" />
```

#### Required
Perform the verification based on the type of the field.

```html
<input type="text" data-required data-validate="required" />
/* This field is not valid, since it does not have a value */

<input type="text" data-required data-validate="required" value="foo" />
/* This field is valid, since it has a value */

<input type="checkbox" data-required data-validate="required" />
/* This field is not valid, since it is a checkbox, and it is not checked */

<input type="checkbox" data-required data-validate="required" checked />
/* This field is valid, since it is a checkbox, and it is checked */

<input type="radio" name="radio" value="1" data-required data-validate="required" />
<input type="radio" name="radio" value="2" data-required data-validate="required" />
/* These fields are not valid, since they are radio inputs and none of them is checked */

<input type="radio" name="radio" value="1" data-required data-validate="required" />
<input type="radio" name="radio" value="2" data-required data-validate="required" checked />
/* These fields are valid, since they are radio inputs and one of them is checked */

<select data-required data-validate="required">
  <option value="option-1">Option 1</option>
</select>
/* This select is not valid, since it does not have a selected option */

<select data-required data-validate="required">
  <option value="option-2" selected>Option 2</option>
</select>
/* This select is valid, since it has a selected option */
```

#### Maxlength
Limit the maximum number of valid characters for a field.

```html
<input data-required data-validate="maxlength" maxlength="8" />
```
<p class="notification notification-warning">
  Notice that in a few cases, such as when you are editing the value of an input
  via JavaScript, the validation process can be bypassed while using the `maxlength` option, since the component does
  not limit the field, it just validates the length of it.
</p>

#### Minlength
Limit the minimum number of valid characters for a field.

```html
<input data-required data-validate="minlength" data-minlength="8" />
```

#### Email
Verify email fields

```html
<input type="text" data-required data-validate="email" />
```

#### Confirm
Verify the value of a field based on the value of another field.

For this validation you should add the `[data-confirm]` attribute along with the
name of the field to be compared with.
The goal of this validation is to handle two-way fields, such as `password / confirm password` or `email / confirm email`.

```html
<input type="text" name="foo" data-required data-validate="confirm" data-confirm="bar" />
<input type="text" name="bar" />
```

## Extending validations
You can provide your own set of rules to the component.

Check the example of a customized `confirm` validation below.
```js
import Validation 'src/js/components/validation';

Validation.prototype.rules.confirm = (field, form) => {
  // field is the current field being validated, and form is the container for that field.
  // So you can check for other fields and use them for more complex validations, such as confirm itself.

  // The return statement should be a boolean or a truthy/falsy value.
  return field.value === form.find(`[name="${field.getAttribute('data-confirm')}]`).val();
};
```

## Handling validation events
The validation component will trigger an [emitter](emitter.html) event whenever a field is validated.
You can use it to style the element, according to the validation result.

```js
import emitter from 'src/js/utils/emitter';

emitter.on('validation:success', (field) => {
  // handle validation success for a field.
  // 'field' is the DOMNode.

  field.classList.remove('invalid');
});

emitter.on('validation:error', (field, errors) => {
  // handle validation error for a field.
  // 'field' is the DOMNode and 'errors' is an array of errors.

  field.classList.add('invalid');
});
```

You can use this approach to create a single validation file, and if you ever need to style a specific field, you can add another `emitter.on` function to a specific file.

<p class="notification notification-warning">
  With this you should notice that the `Validation` component does not style the field.
  It is only responsible for handling the validation process.
</p>

## Validating fields individually
The `validation` component provides a method called `validate()`, where you can
provide any field (even if it is not inside the form instance) and returns a boolean value for its validation process.

```js
import Validation from 'src/js/components/validation';

const field = documen.createElement('input');

field.setAttribute('type', 'text');
field.setAttribute('data-required', '');
field.setAttribute('data-validate', 'required');

Validation.prototype.validate(field);
// returns a boolean, and triggers the validation event.
```

## Validating all fields
You will usually use this method to validate the whole form instance.

```js
const validationElement = document.querySelector('[data-form]');
const validation = new Validation(validationElement).init();

validationElement.addEventListener('submit', (e) => {
  // in case validation of the whole form fails, prevent the submission of it:
  if (!validation.validateAll()) {
    e.preventDefault();
  }
});
```

## Dynamic fields
The `validation` component handles events through [event delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)
using the provided selector, which is `[data-required]` by default.
Thus, you can add or remove fields without having to communicate with the component instance.
