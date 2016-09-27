---
title: Form
layout: page.jade
sidebar: true
collection: css
priority: 1
path: form
---

# Form
<p class="lead">Basic form components</p>

## Summary
1. [Controls](#controls)
2. [Molecules](#molecules)
3. [Disabled Controls](#disabled-controls)
4. [Validation Controls](#validation-controls)

## Controls
Form controls are by default styled with `width: 100%`, and use a smooth border transition on `focus` event.

Checkout the [JavaScript section of the form](js/form.html) in order to see how to handle `.active` molecule.

### Label
Tag `<label>` is not styled by default. If you want to use as the context of `label` + `control`, use the `.label` class.

<div class="example example-code">
  <label class="label">Example</label>
</div>

```html
<label class="label"></label>
```

### Input
Tag `<input>` is not styled by default. You must use `.input` in order to style it:

<div class="example example-code">
  <input type="text" class="input" placeholder="Input" />
</div>

```html
<input type="text" class="input" />
```

### Textarea
Tag `<textarea>` is not styled by default. You must use `.textarea` in order to style it:

<div class="example example-code">
  <textarea class="textarea" placeholder="Textarea"></textarea>
</div>

```html
<textarea class="textarea"></textarea>
```

### Select

Tag `<select>` is not styled by default. You must use the `.select` in order to style it.

<div class="example example-code">
  <select class="select">
    <option>Select your option</option>
    <option value="option-1">Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </select>
</div>

```html
<select class="select">
  <option></option>
</select>
```

### Helper

`.helper` is used to display additional info as a small description or validation feedback.

<div class="example example-code">
  <span class="helper">Helper text</span>
</div>

```html
<span class="helper"></span>
```

## Molecules
Molecules by default are composition of atoms, providing unique styles to them as well.


### Field
The `.field` molecule provides a wrapper to `label` + `control` + `helper` (additional).

_**Obs:** When using `.helper`, don't forget to add `aria-describedby` indicate which field the description refers._

<div class="example example-code">
  <div class="field">
    <input type="text" class="input" name="name" id="name" />
    <label for="name" class="label">Input Label</label>
    <span class="helper" aria-describedby="name">Input Helper</span>
  </div>
</div>

```html
<div class="field">
  <input type="text" class="input"/>
  <label class="label"></label>
  <span class="helper" aria-describedby=""></span>
</div>
```

<div class="example example-code">
  <div class="field">
    <select class="select" name="select" id="select">
      <option> </option>
      <option>option</option>
    </select>
    <label for="select" class="label">Select Label</label>
    <span class="helper" aria-describedby="name">Input Helper</span>
  </div>
</div>

```html
<div class="field">
  <select class="select">
    <option></option>
  </select>
  <label class="label"></label>
  <span class="helper" aria-describedby=""></span>
</div>
```

Please take note when using `label` + `control` on `radio|checkbox` the label will be positioned on the right side of it.

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
  <input type="radio"/>
  <label class="label">Radio</label>
</div>

<div class="field">
  <input type="checkbox"/>
  <label class="label">Checkbox</label>
</div>
```

### Addon
The `.addon` atom can be used to complement the context of the `.input` (inside of a `.field`). It has the fixed width of `2rem`. You also need to provide the `.addon-left` or `.addon-right` along with the `.field` class, in order to provide proper margin/padding of the `.input`:

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
  <input type="text" class="input" name="input" id="input" />
  <label for="input" class="label">Input Label</label>
</div>
```

You can also position the `.addon` on the right side using the `.right` class, and adding the `.addon-right` to the `.field` molecule:

<div class="example example-code">
  <div class="field addon-right">
    <input type="text" class="input" name="addonRight" id="addonRight" />
    <label for="addonRight" class="label">Input Label</label>
    <div class="addon right">,00</div>
  </div>
</div>

```html
<div class="field addon-right">
  <input type="text" class="input" name="input" id="input" />
  <label for="input" class="label">Input Label</label>
  <div class="addon right">,00</div>
</div>
```

You can use both positions at the same time:

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

The `.addon` allows you to insert any type of content on it:

<div class="field addon-right">
  <input type="text" class="input" name="input" id="input" />
  <label for="input" class="label">Input Label</label>
  <div class="addon right"><span class="glyph glyph-magnifier"></span></div>
</div>

```html
<div class="field addon-right">
  <input type="text" class="input" name="input" id="input" />
  <label for="input" class="label">Input Label</label>
  <div class="addon right"><span class="glyph glyph-search"></span></div>
</div>
```

### Input button
The `input-button` is a molecule responsible to provide a similar style of a button to `radio|checkbox`:

<div class="example example-code">
  <div class="field input-button">
    <input type="checkbox" id="button-check"/>
    <label for="button-check" class="label">Input Label</label>
  </div>
</div>

```html
<div class="field input-button">
  <input type="checkbox"/>
  <label class="label"></label>
</div>
```

### Inlining input-buttons
The `input-button` molecule is `inline-block` by default, meaning you can inline multiples inside of a `field`:

<div class="example example-code">
  <div class="field">
  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-1"/>
    <label for="inline-check-1" class="label">Input Label</label>
  </div>

  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-2"/>
    <label for="inline-check-2" class="label">Input Label</label>
  </div>
  </div>
</div>

```html
<div class="field">
  <div class="input-button">
    <input type="radio"/>
    <label class="label">Input Label</label>
  </div>

  <div class="input-button">
    <input type="radio"/>
    <label class="label">Input Label</label>
  </div>
</div>
```

This approach allows the usage of common helpers of `field` as well:

<div class="example example-code">
  <div class="field">
  <div class="label">Label</div>
  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-3"/>
    <label for="inline-check-3" class="label">Input Label</label>
  </div>

  <div class="input-button">
    <input type="radio" name="inline-check" id="inline-check-4"/>
    <label for="inline-check-4" class="label">Input Label</label>
  </div>

  <div class="helper">Helper message</div>
  </div>
</div>

```html
<div class="field">
  <div class="label">Label</div>

  <div class="input-button">
    <input type="radio"/>
    <label class="label">Input Label</label>
  </div>

  <div class="input-button">
    <input type="radio"/>
    <label class="label">Input Label</label>
  </div>

  <div class="helper">Helper message</div>
</div>
```


## Disabled Controls
In order to set a `control` as disabled, you can use the native attribute `disabled` or the `.disabled` class:

<div class="example example-code">
  <input class="input" value="Disabled Input" disabled />
</div>

```html
<input class="input" disabled />
```

Please note all `controls` can be styled by it.

## Validation Controls
Garden provides validation directives (`.valid` and `.invalid`) to `.input`, `.select` and `.textarea`. The directive affects the whole `.field` molecule, so you have to add on it:

<div class="example example-code">
  <div class="field valid">
    <input type="text" class="input" value="Valid Input" />
    <label class="label">Input Label</label>
    <span class="helper">Input helper</span>
  </div>
</div>

```html
<div class="field valid">
  <input type="text" class="input"/>
  <label class="label"></label>
  <span class="helper"></span>
</div>
```

<div class="example example-code">
  <div class="field invalid">
    <input type="text" class="input" value="Invalid Input" />
    <label class="label">Input Label</label>
    <span class="helper">Input helper</span>
  </div>
</div>

```html
<div class="field invalid">
  <input type="text" class="input"/>
  <label class="label"></label>
  <span class="helper"></span>
</div>
```

Please note to properly style the `.select` control, you must add the `.field-select` to the `.field` molecule.

In addition to field validation control, you can also provide a form feedback:

<div class="example example-code">
  <div class="feedback">
    <div class="feedback-title">Hooray! Success!</div>
    Lorem ipsum sit dolor amet
  </div>
</div>

```html
  <div class="feedback">
    <div class="feedback-title">...</div>
    ...
  </div>
```

You can compose the `.feedback` component using the `.feedback-error` class:

<div class="example example-code">
  <div class="feedback feedback-error">
    <div class="feedback-title error">Oops! Something went wrong!</div>
    Lorem ipsum sit dolor amet
  </div>
</div>

```html
  <div class="feedback feedback-error">
    <div class="feedback-title">...</div>
    ...
  </div>
```
