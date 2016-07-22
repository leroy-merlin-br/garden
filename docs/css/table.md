---
title: Table
layout: page.jade
sidebar: true
collection: css
priority: 0
path: table
---

# Table

<div class="lead">
`table` is a component used to display a large dataset distributed in rows and columns.
</div>

## Default table

To use the default table component is pretty straightforward. All you need to do is to add the class `.table` into the `table` HTML tag.

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

## Zebra Striping Tables

If you want your table to alternate the colors of the rows, just add `.table-zebra` class to your `table.table` element.

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

## Bordered Table

If you want to add border to your table, just add the `table-bordered` class to the `table.table` element.

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
