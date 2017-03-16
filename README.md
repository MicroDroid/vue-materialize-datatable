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
Prop name   =>    Description                    =>   Example

title       =>    The title of the datatable     =>   "Todos"
columns     =>    Columns.                       =>   [{label: 'Name', field: 'name', numeric: false}]
rows        =>    Rows.                          =>   [{name: "OverCoder", ...}]
perPage     =>    Number of rows per.. page      =>   10 (default)
onClick     =>    Func. to execute on click      =>   console.log (Row is first param.)
orderable   =>    Cause column-click to order    =>   true (default)
searchable  =>    Add fuzzy search functionality =>   true (default)
```

For columns, `label` is the name of the column, and `field` is the member it's going to display from the row object. The example `rows` array above has objects with field `name`, and because the column has `field: 'name'`, `OverCoder` will be rendered in that column on that row.

It's also important to set the `numeric` field in column objects to true when the column represents some.. well.. numeric data. That's because alignment changes as per the material design spec.
