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
<p class="lead">The validation component is responsible to handle form interactions with flexible rules.</p>

## Quick usage
If you just want to get it working setup the JS plugin:

```js
// If you are using the jQuery version of it
$('[data-form]').validation(options);

// Or the vanilla constructor
new Validation($('[data-form]'), options);

// Setup emitter to listen to validation events
emitter.on('validation:success', (field) => {});
emitter.on('validation:error', (field, errors) => {});
```

And with the usage of `[data-required]` to set a field to be validated and `[data-validate="validations split by space"]`:

```html
<form data-form>
  <input data-required data-validate="required" />
  <input type="checkbox" data-required data-validate="required" />

  /* Dynamic field, can be conditionally required by adding/removing the [data-required] */
  <input type="checkbox" data-validate="required" />
</form>
```

## How it works
In order to handle basic validation, you have to setup the component (either as a jQuery plugin, or as a vanilla constructor):

```js
$('[data-form]').validation();

// or as a vanilla constructor

new Validation(document.querySelectorAll('[data-form]'));
```

And setup the markup on the field, using the `[data-validate]` to pass validations to the field:

```html
<input data-required data-validate="required" />
```
Please take note the usage of a selector (By default `[data-required]`) and a `[data-validate]` is in order to allow dynamic required fields, without too much work for it.

## Validations
In order to validate a field, you must add the desired validations to it. You can provide single or multiple validations to it:

```html
<input type="text" data-required data-validate="required" />

/* Multiple validations */

<input type="text" data-required data-validate="minlength maxlength" />
```

The default validations are:

#### Required
Required will check the type of the field, and the perform the verification based on it:

```html
<input type="text" data-required data-validate="required" />
/* This field is not valid, since it does not have a value */

<input type="text" data-required data-validate="required" value="foo" />
/* This field is valid, since it has a value */

<input type="checkbox" data-required data-validate="required" />
/* This field is not valid, since it's a checkbox, and it's not checked. */

<input type="checkbox" data-required data-validate="required" checked />
/* This field is valid, since it's a checkbox, and it's checked */

<input type="radio" name="radio" value="1" data-required data-validate="required" />
<input type="radio" name="radio" value="2" data-required data-validate="required" />
/* These field are not valid, since it's a radio, and none of them are checked. */

<input type="radio" name="radio" value="1" data-required data-validate="required" />
<input type="radio" name="radio" value="2" data-required data-validate="required" checked />
/* These field are valid, since it's a radio, and one of them are checked. */

<select data-required data-validate="required">
  <option value="foo">foo</option>
</select>
/* This select is not valid, since it does not have a selected option */

<select data-required data-validate="required">
  <option value="foo" selected>foo</option>
</select>
/* This select is valid, since it has a selected option */
```

Since it's usually just plain value validation, if you are composing with other validations, such as `minlength`, you do not need this validation.

#### Maxlength
Using the `[maxlength="length"]` attribute, you can limit* the maximum number of valid characters for the field:

```html
<input data-required data-validate="maxlength" maxlength="8" />
```

Please take note that the usage of maxlength itself already limits the field. But in a few cases (such as editing the value of the input via JavaScript, can bypass it). The validation component does not limit the field. Just validate the length of it.

#### Minlength
Using the `[data-minlength="length"]` attribute, you can limit* the minimum number of valid characters for the field:

```html
<input data-required data-validate="minlength" data-minlength="8" />
```

Please take note that the usage of data-minlength will limit set a minlength to the field. You must use it along with a mask plugin.

#### Email
The `email` validation works with an email regex. The usage is straight forward:

```html
<input type="text" data-required data-validate="email" />
```

#### Confirm
The `confirm` validation relies on a `[data-confirm="fieldName"]` to confirm the value of the field. The confirm field does not have to be a validation component.

The objective of this validation, is to handle two-way fields, such as `password / confirm password` or `email / confirm email`.

```html
<input type="text" name="foo" data-required data-validate="confirm" data-confirm="bar" />
<input type="text" name="bar" />
```

## Extending validations
You can provide your own set of rules. For example the confirm rule:

```js
import Validation 'src/js/components/validation';

Validation.prototype.rules.confirm = (field, $form) => {
  // field is the current field being validated, and form is the form of the instance, as a jQuery object. So you can check for other fields and use them for more complex validations, such as confirm itself.

  // the return statement should be a boolean or a truthy/falsy value.
  return field.value === $form.find(`[name="${field.getAttribute('data-confirm')}]`).val();
};
```

## Working with validation
The `validation` component will always trigger an [emitter event](emitter.html) whenever a field is validated. You can use it to style the element:

```js
import emitter from 'src/js/utils/emitter';

emitter.on('validation:success', (field) => {
  // handle validation success for a field. The field is the DOMNode.

  field.classList.remove('invalid');
});

emitter.on('validation:error', (field, errors) => {
  // handle validation success for a field. The field is the DOMNode. And errors is an array of errors.

  field.classList.add('invalid');
});
```

You can use this approach to create a single validation file. And if you ever need to style a specific field, you can add another `emitter.on` to a specific file.

### Validating fields individually
The `validation` component provides a method called `validate(field)`, where you can provide any field (Even not inside the form instance), and returns a boolean for the validation process of it:

```js
import Validation from 'src/js/components/validation';

let $field = $('<input type="text" data-required data-validate="required" />');

Validation.prototype.validate($field);

// returns a boolean, and triggers the validation event.
```

### Validating all fields
You will usually look for this method to check the whole form instance:

```js
let validation = $('[data-form]').validation();

$('[data-form]').on('submit', (e) => {
  // in case validation of the whole form fails, prevent the submition of it:
  if (!validation.data('validation').validateAll()) {
    e.preventDefault();
  }
});
```

Please take note that the `Validation` component does not style the fields, it is only responsible to handle the pipeline of validations.

## Working with dynamic fields
The `validation` component handle events through [event delegation](http://api.jquery.com/on/) using the provided selector (By default `[data-required]`). So you can add/remove fields without having to communicate with the `Validation` instance.

## Options

| Option            | Description |
|-------------------|-------------|
| events (blur)            | The events to listen to. Such as blur, click, input, keypress and so on. Please take note that the event is delegated through the form of the Validation instance. |
| selector ([data-required]) | The selector to be dynamic required by the Validation instance. If you change the selector, do not forget the selector option as well |

The options object is incremental, so you can change just which options you want:


```js
let options = {
  events: 'blur, change' // Changing the events to listen to
};

$('[data-form]').validation(options);

// or with vanilla constructor

new Validation(document.querySelectorAll('[data-form]'), options);
```

Changing the default selector:

```js
let options: {
  selector: '.required'
};

$('[data-form]').validation(options);

// or with vanilla constructor

new Validation(document.querySelectorAll('[data-form]'), options);
```
