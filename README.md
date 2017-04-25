# vue-materialize-datatable [![NPM version](https://badge.fury.io/js/vue-materialize-datatable.svg)](https://badge.fury.io/js/vue-materialize-datatable)

> A fancy Materialize CSS datatable VueJS component

![Screenshot](http://i.imgur.com/15tApXu.png)

> Library is kind of unstable. Bugs, missing features might be present


## Features
 - Sorting, with numerical sorting
 - Pagination
 - Fuzzy searching
 - Excel export
 - Printing
 - Custom topbar buttons
 - Flexible data-from-row extractor
 - Follows the Material Design spec
 - Really, really efficient.. handles thousands of rows flawlessly
 - And much more..

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

Of course, code above will render garbage. Here are the props it accepts to render some sensible data:

```
Prop name     =>    Description                    =>   Example

title         =>    The title of the datatable     =>   "Todos"                 // Name in top
columns       =>    Columns.                       =>   [                       // Array of objects
                                                            {
                                                                label: 'Name',  // Column name
                                                                field: 'name',  // Field name from row
                                                                                // Use dot for nested props
                                                                                // Can be function with row as 1st param
                                                                numeric: false, // Affects sorting
                                                                html: false,    // Escapes output if false.
                                                            }
                                                        ]
rows          =>    Rows.                          =>   [                       // Array of objects
                                                            {
                                                                name: "test",   // Whatever.
                                                                ...
                                                            }
                                                        ]
perPage       =>    Number of rows per.. page      =>   10 (default)            // Results per page
onClick       =>    Func. to execute on click      =>   console.log             // Function, row 1st param
sortable      =>    Cause column-click to sort     =>   true (default)          // Whether sortable
searchable    =>    Add fuzzy search functionality =>   true (default)          // Whether searchable
paginate      =>    Add footer next/prev. btns     =>   true (default)          // Whether paginated
exportable    =>    Add button to export to Excel  =>   true (default)          // Whether exportable
printable     =>    Add printing functionality     =>   true (default)          // Whether printable
customButtons =>    Custom buttons thingy          =>   [                       // Array of objects
                                                            {
                                                                hide: false,    // Whether to hide the button
                                                                icon: 'search', // Materialize icon
                                                                onclick: aFunc, // Click handler
                                                            }
                                                        ]
```
