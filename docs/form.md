---
title: Form
layout: page.jade
sidebar: true
collection: css
priority: 0
path: form
---

# Form

### Summary

- [Atoms](#atoms)
- [Molecules](#molecules)

## Atoms

As Garden use atomic design to build your components, in this page you'll see all available atoms to create your form molecule.

Each form atom has it's own style and you're able to use them individually, but we advise to always use with `.field` molecule.

Disabled `.input`, `.textarea`, `.select` add `cursor: not-allowed` in hover state

### Summary
- [Label](#label)
- [Input](#input)
- [Textarea](#textarea)
- [Select](#select)
- [Checkbox](#checkbox)
- [Radio](#radio)
- [Helper](#helper)

### Label

<div class="example example-code">
  <label class="label">Example</label>
</div>

```html
<label class="label"></label>
```

### Input

<div class="example example-code">
  <input type="text" class="input" />
</div>

```html
<input type="text" class="input" />
```

<div class="example example-code">
  <input type="text" class="input" disabled/>
</div>

```html
<input type="text" class="input" disabled/>
```

### Textarea

<div class="example example-code">
  <div class="field">
    <textarea class="textarea"></textarea>
  </div>
</div>

```html
<textarea class="textarea"></textarea>
```

### Select

Tag `<select>` is styled by default. You can use the `.select` class.

<div class="example example-code">
  <select class="select">
    <option>Select your Garden</option>
    <option value="garden-1">Garden 1</option>
    <option value="garden-2">Garden 2</option>
    <option value="garden-3">Garden 3</option>
  </select>
</div>

```html
<select class="select">
  <option></option>
</select>
```

<div class="example example-code">
  <select class="select" disabled>
    <option></option>
    <option value="garden-1">Garden 1</option>
    <option value="garden-2">Garden 2</option>
    <option value="garden-3">Garden 3</option>
  </select>
</div>

```html
<select class="select" disabled>
  <option></option>
</select>
```

### Checkbox

<div class="example example-code">
  <input type="checkbox" />
</div>

```html
<input type="checkbox" />
```

### Radio

<div class="example example-code">
  <input type="radio" />
</div>

```html
<input type="radio" />
```

### Helper

`.helper` is used to display additional info as a small description or validation text.

<div class="example example-code">
  <span class="helper">take care of your garden</span>
</div>

```html
<span class="helper"></span>
```

## Molecules

_**Obs:** When using `.helper`, don't forget to add `aria-describedby` indicate which field the description refers._

<div class="example example-code">
  <div class="field">
    <input type="text" class="input" name="name" id="name" />
    <label for="name" class="label">Name</label>
    <span class="helper" aria-describedby="name">Hello, what's your name?</span>
  </div>

  <div class="field">
    <input type="text" class="input" name="name-disabled" id="name-disabled" disabled/>
    <label for="name-disabled" class="label">Name</label>
    <span class="helper" aria-describedby="name-disabled">Hello, what's your name?</span>
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
    <select class="select" name="garden-type" id="garden-type">
      <option></option>
      <option value="garden-1">Garden 1</option>
      <option value="garden-2">Garden 2</option>
      <option value="garden-3">Garden 3</option>
    </select>
    <label for="garden-type" class="label">Name</label>
    <span class="helper" aria-describedby="garden-type">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </div>

  <div class="field">
    <select class="select" name="garden-type-disabled" id="garden-type-disabled" disabled>
      <option></option>
      <option value="garden-1">Garden 1</option>
      <option value="garden-2">Garden 2</option>
      <option value="garden-3">Garden 3</option>
    </select>
    <label for="garden-type-disabled" class="label">Name</label>
    <span class="helper" aria-describedby="garden-type-disabled">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
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

<div class="example example-code">
  <div class="field">
    <textarea class="textarea" name="garden-area" id="garden-area"></textarea>
    <label for="garden-area" class="label">Message</label>
    <span class="helper" aria-describedby="garden-area">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </div>

  <div class="field">
    <textarea class="textarea" name="garden-area-disabled" id="garden-area-disabled" disabled></textarea>
    <label for="garden-area-disabled" class="label">Message</label>
    <span class="helper" aria-describedby="garden-area-disabled">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </div>
</div>

```html
<div class="field valid">
  <textarea class="textarea"></textarea>
  <label class="label">Message</label>
</div>
```

<div class="example example-code">
  <div class="field">
    <input type="radio" name="garden-radio" id="garden-radio"/>
    <label for="garden-radio" class="label">Radio</label>
  </div>

  <div class="field">
    <input type="radio" name="garden-radio-2" id="garden-radio-2" disabled/>
    <label for="garden-radio-2" class="label">Radio disabled</label>
  </div>
</div>

```html
<div class="field">
  <input type="radio"/>
  <label class="label"></label>
</div>
```

<div class="example example-code">
  <div class="field">
    <input
      type="checkbox"
      id="garden-checkbox"
      name="garden-checkbox"
      id="garden-checkbox"/>
    <label for="garden-checkbox" class="label">Checkbox</label>
  </div>

  <div class="field">
    <input
      type="checkbox"
      id="garden"
      name="garden-checkbox-2"
      id="garden-checkbox-2"
      disabled/>
    <label for="garden-checkbox-2" class="label">Checkbox disabled</label>
  </div>
</div>

```html
<div class="field">
  <input type="checkbox"/>
  <label class="label"></label>
</div>
```

### Input button

Example using `input[type="checkbox"]`

<div class="example example-code">
  <div class="field input-button">
    <input type="checkbox" id="button-check"/>
    <label for="button-check" class="label">Lorem Ipsum</label>
  </div>
</div>

```html
<div class="field input-button">
  <input type="checkbox"/>
  <label class="label"></label>
</div>
```

<div class="example example-code">
  <div class="field input-button">
    <input type="checkbox" id="button-check-disabled" disabled/>
    <label for="button-check-disabled" class="label">Lorem Ipsum</label>
  </div>
</div>

```html
<div class="field input-button">
  <input type="checkbox" disabled/>
  <label class="label"></label>
</div>
```

Example using `input[type="radio"]`

<div class="example example-code">
  <div class="field input-button">
    <input type="radio" id="button-radio"/>
    <label for="button-radio" class="label">Lorem Ipsum</label>
  </div>
</div>

```html
<div class="field input-button">
  <input type="radio"/>
  <label class="label"></label>
</div>
```

<div class="example example-code">
  <div class="field input-button">
    <input type="radio" id="button-radio-disabled" disabled/>
    <label for="button-radio-disabled" class="label">Lorem Ipsum</label>
  </div>
</div>

```html
<div class="field input-button">
  <input type="radio" disabled/>
  <label class="label"></label>
</div>
```

<div class="example example-code">
  <div class="field input-button has-image">
    <input type="radio" id="button-radio-image"/>
    <label for="button-radio-image" class="label">
      <img src="http://placehold.it/150x150" width="150" height="150" />
      <div>Lorem Ipsum</div>
    </label>
  </div>
</div>

```html
<div class="field input-button">
  <input type="radio" disabled/>
  <label class="label"></label>
</div>
```


### Validation

Invalid state in `.field`

`.input`:

<div class="example">
  <div class="field invalid">
    <input type="text" class="input" name="name-invalid" id="name-invalid" />
    <label for="name-invalid" class="label">Name</label>
    <span class="helper" aria-describedby="name-invalid">Ops, something is wrong!</span>
  </div>
</div>


`.select`:

<div class="example">
  <div class="field field-select invalid">
    <select class="select" name="garden-type-invalid" id="garden-type-invalid">
      <option></option>
      <option value="garden-1" selected>Garden 1</option>
      <option value="garden-2">Garden 2</option>
      <option value="garden-3">Garden 3</option>
    </select>
    <label for="garden-type-invalid" class="label">Name</label>
    <span class="helper" aria-describedby="garden-type-invalid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </div>
</div>

`.textarea`

<div class="example">
  <div class="field invalid">
    <textarea class="textarea" name="garden-area-invalid" id="garden-area-invalid"></textarea>
    <label for="garden-area-invalid" class="label">Message</label>
    <span class="helper" aria-describedby="garden-area-invalid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </div>
</div>

Valid state in `.field`

`.input`:

<div class="example">
  <div class="field valid">
    <input type="text" class="input" name="name-valid" id="name-valid" value="Garden" />
    <label for="name-valid" class="label">Name</label>
    <span class="helper" aria-describedby="name-valid">Ops, something is wrong!</span>
  </div>
</div>


`.select`:

<div class="example">
  <div class="field field-select valid">
    <select class="select" name="garden-type-valid" id="garden-type-valid">
      <option></option>
      <option value="garden-1" selected>Garden 1</option>
      <option value="garden-2">Garden 2</option>
      <option value="garden-3">Garden 3</option>
    </select>
    <label for="garden-type-valid" class="label">Name</label>
    <span class="helper" aria-describedby="garden-type-valid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </div>
</div>

`.textarea`

<div class="example">
  <div class="field valid">
    <textarea class="textarea" name="garden-area-valid" id="garden-area-valid"></textarea>
    <label for="garden-area-valid" class="label">Message</label>
    <span class="helper" aria-describedby="garden-area-valid">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </div>
</div>
