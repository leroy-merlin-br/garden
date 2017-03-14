---
title: Table
layout: page.jade
sidebar: true
collection: docs
priority: 0
path: table
section: css
---

# Table

<div class="lead">
  A table can be used to display a large dataset distributed in rows and columns.
</div>

## Usage

To get the default style for this component you just have to add the `.table` class to a `<table>` tag.

<div class="example example-code">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Isaac</td>
        <td>Newton</td>
        <td>isaac@newton.com</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Albert</td>
        <td>Einstein</td>
        <td>albert@einstein.com</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Galileu</td>
        <td>Galilei</td>
        <td>galileu@galilei.com</td>
      </tr>
    </tbody>
  </table>
</div>


```html
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Isaac</td>
        <td>Newton</td>
        <td>isaac@newton.com</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Albert</td>
        <td>Einstein</td>
        <td>albert@einstein.com</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Galileu</td>
        <td>Galilei</td>
        <td>galileu@galilei.com</td>
      </tr>
    </tbody>
  </table>
```

### Striped table

If you want a table with alternate colors for its rows, you can add the `.table-zebra` class to the `table` element.

<div class="example example-code">
  <table class="table table-zebra">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Isaac</td>
        <td>Newton</td>
        <td>isaac@newton.com</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Albert</td>
        <td>Einstein</td>
        <td>albert@einstein.com</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Galileu</td>
        <td>Galilei</td>
        <td>galileu@galilei.com</td>
      </tr>
    </tbody>
  </table>
</div>


```html
  <table class="table table-zebra">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Isaac</td>
        <td>Newton</td>
        <td>isaac@newton.com</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Albert</td>
        <td>Einstein</td>
        <td>albert@einstein.com</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Galileu</td>
        <td>Galilei</td>
        <td>galileu@galilei.com</td>
      </tr>
    </tbody>
  </table>
```

### Bordered table

To get a bordered table, you can add the `.table-bordered` class to a `table` element.

<div class="example example-code">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Isaac</td>
        <td>Newton</td>
        <td>isaac@newton.com</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Albert</td>
        <td>Einstein</td>
        <td>albert@einstein.com</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Galileu</td>
        <td>Galilei</td>
        <td>galileu@galilei.com</td>
      </tr>
    </tbody>
  </table>
</div>


```html
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Isaac</td>
        <td>Newton</td>
        <td>isaac@newton.com</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Albert</td>
        <td>Einstein</td>
        <td>albert@einstein.com</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Galileu</td>
        <td>Galilei</td>
        <td>galileu@galilei.com</td>
      </tr>
    </tbody>
  </table>
```
