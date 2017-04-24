# vue-materialize-datatable

> A fancy Materialize css datatable VueJS component

![Screenshot](http://i.imgur.com/00Iqffi.png)

> Library is still unstable. Bugs, missing features might be present

## Installation

```bash
npm i vue-materialize-datatable --save
```

## Usage

Include the component,

```javascript
import DataTable from 'vue-materialize-datatable';
```

Then, register the component, however you like:

```javascript
{
    ...
    components: {
        ...
        "datatable": DataTable
    }
}
```

And then.. use the component:

```xml
<datatable></datatable>
```

Of course, code above will render garbage. Here are the props it accepts to sensible data:

```
Prop name     =>    Description                    =>   Example

title         =>    The title of the datatable     =>   "Todos"
columns       =>    Columns.                       =>   [{label: 'Name', field: 'name', numeric: false, html: false}]
rows          =>    Rows.                          =>   [{name: "OverCoder", ...}]
perPage       =>    Number of rows per.. page      =>   10 (default)
onClick       =>    Func. to execute on click      =>   console.log (Row is first param.)
sortable      =>    Cause column-click to sort     =>   true (default)
searchable    =>    Add fuzzy search functionality =>   true (default)
paginate      =>    Add footer next/prev. btns     =>   true (default)
exportable    =>    Add button to export to Excel  =>   true (default)
printable     =>    Add printing functionality     =>   true (default)
customButtons =>    Custom buttons thingy          =>   [{hide: false, icon: 'search', onclick: console.log}]
```

For columns, `label` is the name of the column, and `field` is the member it's going to display from the row object. The example `rows` array above has objects with field `name`, and because the column has `field: 'name'`, `OverCoder` will be rendered in that column on that row.

It's also important to set the `numeric` field in column objects to true when the column represents some.. well.. numeric data. That's because alignment changes as per the material design spec. And numeric columns sort correctly based on actual values.

`field` in `column` can be either a `string` or `function`. It is used to lookup the variable out of the row. If a function is passed, it will be called with a single parameter being the row object, and its return value is used as the actual field value. This means you can do precomputations and such stuff. If you pass a `string`, it's just going to go through the row as an object where the `field` is the key. It accepts `.` for nested object lookup as well.