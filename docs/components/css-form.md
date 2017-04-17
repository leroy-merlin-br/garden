---
title: Form
layout: page.jade
sidebar: true
collection: docs
priority: 3
path: css-form
section: css
---

# Form
<p class="lead">
  Set of elements used to build structured forms.
</p>

## Summary
1. [Controls](#controls)
2. [Molecules](#molecules)
3. [Disabled Controls](#disabled-controls)
4. [Validation Controls](#validation-controls)

## Controls
By default, form controls have full width and use a smooth border transition on `focus` event.

<p class="notification notification-warning">
  Checkout the [JavaScript section](/components/js-form.html) of the form to see how to handle the `.active` class on it.
</p>

<p class="notification notification-warning">
  Garden does not style the `label`, `input`, `textarea`, and `select` tags by default. To get a default style for them you must use the classes described below.
</p>

<br>

<div class="example example-code">
  <label class="label">This is a label</label>
</div>

```html
<label class="label">This is a label</label>
```

<br>

<div class="example example-code">
  <input type="text" class="input" placeholder="This is an input" />
</div>

```html
<input type="text" class="input" placeholder="This is an input" />
```

<br>

<div class="example example-code">
  <textarea class="textarea" placeholder="This is a text area"></textarea>
</div>

```html
<textarea class="textarea" placeholder="This is a text area"></textarea>
```

<br>

<div class="example example-code">
  <div class="field field-select">
    <select class="select">
      <option></option>
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
    </select>
    <label class="label">Select your option</label>
  </div>
</div>

```html
<div class="field field-select">
  <select class="select">
    <option></option>
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </select>
  <label class="label">Select your option</label>
</div>
```
<p class="notification notification-warning">
  Please note that to properly style the `.select` control, you must add the `.field-select` to the `field` molecule.
</p>

<br>

A `.helper` class can be used to display additional info, such as a small description or a validation feedback.

<div class="example example-code">
  <span class="helper">This is a helper text</span>
</div>

```html
<span class="helper">This is a helper text</span>
```

## Molecules
A molecule is a collection of atoms and is used to provide a unique structure to them.


### Field
With a `field` molecule you can wrap the control elements described above.

<div class="example example-code">
  <div class="field">
    <input type="text" class="input" name="name" id="name" />
    <label for="name" class="label">Input label</label>
    <span class="helper" aria-describedby="name">Input helper</span>
  </div>
</div>

```html
<div class="field">
  <input type="text" class="input" name="name" id="name"/>
  <label form="name" class="label">Input label</label>
  <span class="helper" aria-describedby="name">Input helper</span>
</div>
```
<p class="notification notification-warning">
  When using the `.helper` class, don't forget to add the `aria-describedby` attribute, along with the name of the field that the description refers to.
</p>

<br>

<div class="example example-code">
  <div class="field field-select">
    <select class="select" name="select" id="select">
      <option></option>
      <option>Option</option>
    </select>
    <label for="select" class="label">Select label</label>
    <span class="helper" aria-describedby="name">Select helper</span>
  </div>
</div>

```html
<div class="field field-select">
  <select class="select" name="select" id="select">
    <option></option>
    <option>Option</option>
  </select>
  <label for="select" class="label">Select label</label>
  <span class="helper" aria-describedby="">Select helper</span>
</div>
```

<br>

<div class="example example-code">
  <div class="field">
    <input type="radio" name="garden-radio" id="garden-radio"/>
    <label for="garden-radio" class="label">Radio</label>
  </div>

  <div class="field">
    <input type="checkbox" name="garden-checkbox" id="garden-checkbox"/>
    <label for="garden-checkbox" class="label">Checkbox</label>
  </div>
</div>

```html
<div class="field">
  <input type="radio" name="garden-radio" id="garden-radio"/>
  <label for="garden-radio" class="label">Radio</label>
</div>

<div class="field">
  <input type="checkbox" name="garden-checkbox" id="garden-checkbox"/>
  <label for="garden-checkbox" class="label">Checkbox</label>
</div>
```
<p class="notification notification-warning">
  Please take note that labels will be positioned on the right side when used with a `radio|checkbox`.
</p>

#### Addon
You can also use the `addon` atom to complement an `input` inside of a `field` molecule.  
Notice that in order to provide proper margin and padding to the `input`, you also need to provide the `.addon-left` or the `.addon-right` class along with the `.field` class.

<div class="example example-code">
  <div class="field addon-left">
    <div class="addon">$</div>
    <input type="text" class="input" name="addonLeft" id="addonLeft" />
    <label for="addonLeft" class="label">Input Label</label>
  </div>
</div>

```html
<div class="field addon-left">
  <div class="addon">$</div>
  <input type="text" class="input" name="addonLeft" id="addonLeft" />
  <label for="addonLeft" class="label">Input Label</label>
</div>
```

You can also position the `addon` on the right side using the `.right` class, after adding the `.addon-right` class to the `field` molecule:

<div class="example example-code">
  <div class="field addon-right">
    <input type="text" class="input" name="addonRight" id="addonRight" />
    <label for="addonRight" class="label">Input Label</label>
    <div class="addon right">,00</div>
  </div>
</div>

```html
<div class="field addon-right">
  <input type="text" class="input" name="addonRight" id="addonRight" />
  <label for="addonRight" class="label">Input Label</label>
  <div class="addon right">,00</div>
</div>
```

You can use atoms in both positions at the same time, as described below.

<div class="example example-code">
  <div class="field addon-left addon-right">
    <div class="addon">$</div>
    <input type="text" class="input" name="addonLeftRight" id="addonLeftRight" />
    <label for="addonLeftRight" class="label">Input Label</label>
    <div class="addon right">,00</div>
  </div>
</div>

```html
<div class="field addon-left addon-right">
  <div class="addon">$</div>
  <input type="text" class="input" name="input" id="input" />
  <label for="input" class="label">Input Label</label>
  <div class="addon right">,00</div>
</div>
```

You can insert any type of content on an `addon` atom.

<div class="example example-code">
  <div class="field addon-right">
    <input type="text" class="input" name="input" id="input" />
    <label for="input" class="label">Input Label</label>
    <div class="addon right"><span class="glyph glyph-magnifier"></span></div>
  </div>
</div>

```html
<div class="field addon-right">
  <input type="text" class="input" name="input" id="input" />
  <label for="input" class="label">Input Label</label>
  <div class="addon right"><span class="glyph glyph-magnifier"></span></div>
</div>
```

### Input button
The `input-button` is a molecule responsible for styling a `radio|checkbox` with a similar appearance of a button.

<div class="example example-code">
  <div class="field input-button">
    <input type="checkbox" id="button-check"/>
    <label for="button-check" class="label">Input label</label>
  </div>
</div>

```html
<div class="field input-button">
  <input type="checkbox" id="button-check"/>
  <label for="button-check" class="label">Input label</label>
</div>
```

#### Positioning input-buttons
The `input-button` molecule is an `inline-block` by default, meaning you can position multiple inputs inline within a `field`, as shown below.

<div class="example example-code">
  <div class="field">
  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-1"/>
    <label for="inline-check-1" class="label">Input label</label>
  </div>

  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-2"/>
    <label for="inline-check-2" class="label">Input label</label>
  </div>
  </div>
</div>

```html
<div class="field">
  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-1"/>
    <label for="inline-check-1" class="label">Input label</label>
  </div>

  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-2"/>
    <label for="inline-check-2" class="label">Input label</label>
  </div>
</div>
```

This approach allows you to use common elements of a `field` as well.

<div class="example example-code">
  <div class="field">
  <div class="label">Label</div>
  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-3"/>
    <label for="inline-check-3" class="label">Input label</label>
  </div>

  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-4"/>
    <label for="inline-check-4" class="label">Input label</label>
  </div>

  <div class="helper">Helper message</div>
  </div>
</div>

```html
<div class="field">
  <div class="label">Label</div>
  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-3"/>
    <label for="inline-check-3" class="label">Input label</label>
  </div>

  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-4"/>
    <label for="inline-check-4" class="label">Input label</label>
  </div>

  <div class="helper">Helper message</div>
</div>
```


## Disabled Controls
To set a `control` as disabled, you can use the native attribute `disabled` or the `.disabled` class.

<div class="example example-code">
  <input class="input" value="Disabled input" disabled />
</div>

```html
<input class="input" value="Disabled input" disabled />
```
<p class="notification notification-warning">
  Notice that you can disable any control element showed above.
</p>

## Validation Controls
Garden provides the `.valid` and `.invalid` classes to represent the states of a form element.  
Since those classes affect the whole `field` element, you have to add them along with the `.field` class.

<div class="example example-code">
  <div class="field valid">
    <input type="text" class="input" value="Valid input" />
    <label class="label">Input Label</label>
    <span class="helper">Input helper</span>
  </div>
</div>

```html
<div class="field valid">
  <input type="text" class="input" value="Valid input"/>
  <label class="label">Input label</label>
  <span class="helper">Input helper</span>
</div>
```

<div class="example example-code">
  <div class="field invalid">
    <input type="text" class="input" value="Invalid input" />
    <label class="label">Input Label</label>
    <span class="helper">Input helper</span>
  </div>
</div>

```html
<div class="field invalid">
  <input type="text" class="input" value="Invalid input" />
  <label class="label"></label>
  <span class="helper"></span>
</div>
```

In addition to field validation control, you can also provide a form feedback.

<div class="example example-code">
  <div class="feedback">
    <div class="feedback-title">Hooray! Success!</div>
    You are good to go.
  </div>
</div>

```html
  <div class="feedback">
    <div class="feedback-title">Hooray! Success!</div>
    You are good to go.
  </div>
```

You can customize the `feedback` component by adding the `.feedback-error` class.

<div class="example example-code">
  <div class="feedback feedback-error">
    <div class="feedback-title error">Oops! Something went wrong!</div>
    Try harder.
  </div>
</div>

```html
  <div class="feedback feedback-error">
    <div class="feedback-title">...</div>
    Try harder.
  </div>
```
