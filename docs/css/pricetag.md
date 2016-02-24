---
title: Price Tag
layout: page.jade
sidebar: true
collection: css
priority: 0
path: pricetag
---

# Price Tag
<p class="lead">The `.price-tag` component is really specific to our interface. It's used to display common price throughout the applications, with a variation for promotional prices:</p>

### Default
The raw `.price-tag` just adds `text-align: center`, as for the `.price-*` atoms, they have their own styles:

<div class="example example-code">
  <div class="price-tag">
    <span class="price-currency">R$</span>
    <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
    <span class="price-unit">/m</span>
  </div>
</div>

```html
<div class="price-tag">
  <span class="price-currency">R$</span>
  <span class="price-integer">9.999</span>
  <span class="price-decimal">,99</span>
  <span class="price-unit">/m</span>
</div>
```

### Promotional
The `.promotional` modifier adds a background-color as `$color-promotional` and changes the color of the main price to `$color-text-promotional`.

Additionally, you can also work with the `.from-price` component, which can directly use the `.price` atom or break down into `.price-*` atoms as well:

<div class="example example-code">
  <div class="price-tag promotional">
    <div class="from-price">
      de:
      <span class="price">R$ 9.999,99</span>
      por:
    </div>
    <span class="price-currency">R$</span>
    <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
    <span class="price-unit">/m</span>
  </div>
</div>

```html
<div class="price-tag promotional">
  <div class="from-price">
    de:
    <span class="price">R$ 9.999,99</span>
    por:
  </div>

  <span class="price-currency">R$</span>
  <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
  <span class="price-unit">/m</span>
</div>
```

or

<div class="example example-code">
  <div class="price-tag promotional">
    <div class="from-price">
      de:
      <span class="price-currency">R$</span>
      <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
      por:
    </div>
    <span class="price-currency">R$</span>
    <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
    <span class="price-unit">/m</span>
  </div>
</div>

```html
<div class="price-tag promotional">
  <div class="from-price">
    de:
    <span class="price-currency">R$</span>
    <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
    por:
  </div>

  <span class="price-currency">R$</span>
  <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
  <span class="price-unit">/m</span>
</div>
```
