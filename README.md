# vue-materialize-datatable

> A fancy Materialize css datatable VueJS component

![Screenshot](https://i.imgur.com/9V613vT.png)

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
columns     =>    Columns.                       =>   [{label: 'Name', field: 'name'}]
rows        =>    Rows.                          =>   [{name: "OverCoder", ...}]
perPage     =>    Number of rows per.. page      =>   10
```

For columns, `label` is the name of the column, and `field` is the member it's going to display from the row object. The example `rows` array above has objects with field `name`, and because the column has `field: 'name'`, `OverCoder` will be rendered in that column on that row.