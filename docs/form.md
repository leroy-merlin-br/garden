---
title: Form
layout: page.jade
sidebar: true
collection: css
path: form
---

# Form

## Atoms

As Garden use atomic design to build your components, in this page you'll see all available atoms to create your form molecule.

Each form atom has it's own style and you're able to use them individually, but we advise to always use with `.fieldset` molecule.

### Input


<div class="example">
  <input type="text" class="input" />
</div>

```html
<input type="text" class="input" />
```

Disabled `.input` add `cursor: not-allowed` in hover state.

**Always** use `.input:disabled` with `.fieldset` molecule.

<div class="example">
  <input type="text" class="input" disabled/>
</div>

```html
<input type="text" class="input" disabled/>
```

### Label

<div class="example">
  <label class="label">Example</label>
</div>

```html
<label class="label"></label>
```


### helper

`.helper` is used to display additional info as a small description or validation text.

<div class="example">
  <span class="helper">take care of your garden</span>
</div>

```html
<span class="helper"></span>
```

### Select

Tag `<select>` is styled by default. You can use the `.select` class.

<div class="example">
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

Disabled `.select` add `cursor: not-allowed` in hover state.

**Always** use `.select:disabled` with `.fieldset` molecule.

<div class="example">
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

### Radio

<div class="example">
  <input type="radio" />
</div>

```html
<input type="radio" />
```

### Checkbox

<div class="example">
  <input type="checkbox" />
</div>

```html
<input type="checkbox" />
```
