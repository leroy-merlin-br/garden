---
title: Price Tag
layout: page.jade
sidebar: true
collection: docs
priority: 0
path: pricetag
section: css
---

# Price Tag
<p class="lead">
  The price tag component provides predefined style for the price section of an offer.
</p>

## Usage
The `.price-tag` class works as a molecule, so it should wrap related atoms, as described below.

<div class="example example-code">
  <div class="price-tag">
    <span class="price-currency">R$</span>
    <span class="price-integer">9.999</span>
    <span class="price-decimal">,99</span>
    <span class="price-unit">m</span>
  </div>
</div>

```html
<div class="price-tag">
  <span class="price-currency">R$</span>
  <span class="price-integer">9.999</span>
  <span class="price-decimal">,99</span>
  <span class="price-unit">m</span>
</div>
```

### Promotional price
You can get a standard style for promotional prices by adding the `.promotional` class to a `price-tag` element.
The modifier applies the colors provided in the `$color-promotional` and `$color-text-promotional` variables to the background and the main price, respectively.

<div class="example example-code">
  <div class="price-tag promotional">
    <div class="from-price">
      <span class="price">R$ 9.999,99</span>
    </div>
    <span class="price-currency">R$</span>
    <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
    <span class="price-unit">m</span>
  </div>
</div>

```html
<div class="price-tag promotional">
  <div class="from-price">
    <span class="price">R$ 9.999,99</span>
  </div>

  <span class="price-currency">R$</span>
  <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
  <span class="price-unit">m</span>
</div>
```
<p class="notification notification-warning">
  Notice that you can use the `.from-price` class to describe the previous product price.
</p>

Alternatively, you can use the same atoms used in a `price-tag` molecule to build the `from-price` section, as shown below.

<div class="example example-code">
  <div class="price-tag promotional">
    <div class="from-price">
      <span class="price-currency">R$</span>
      <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
    </div>
    <span class="price-currency">R$</span>
    <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
    <span class="price-unit">m</span>
  </div>
</div>

```html
<div class="price-tag promotional">
  <div class="from-price">
    <span class="price-currency">R$</span>
    <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
  </div>

  <span class="price-currency">R$</span>
  <span class="price-integer">9.999</span><span class="price-decimal">,99</span>
  <span class="price-unit">m</span>
</div>
```
