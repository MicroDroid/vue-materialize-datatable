# vue-materialize-datatable [![NPM version](https://badge.fury.io/js/vue-materialize-datatable.svg)](https://badge.fury.io/js/vue-materialize-datatable) [![Snippets Stats](https://codebottle.io/embed/search-badge?keywords=vue%20materialize%20datatable&language=6)](https://codebottle.io/?q=vue%20materialize%20datatable)

> A fancy Materialize CSS datatable VueJS component

![Screenshot](http://i.imgur.com/15tApXu.png)

> Library is kind of unstable. Bugs, missing features might be present


## Features
 - Sorting, with numerical sorting
 - Pagination
 - Localization
 - Fuzzy searching
 - Excel export
 - Printing
 - Custom topbar buttons
 - Flexible data-from-row extractor
 - Follows the Material Design spec
 - Really, really efficient.. handles thousands of rows flawlessly
 - And much more..

## Requirements
 - [`materialize-css`](https://www.npmjs.com/package/materialize-css) (and **NOT** any other MD library!)
 - VueJS 2

## Installation

```bash
npm i vue-materialize-datatable --save
```

**You also need to include Material Design icons.** You have two ways of doing this:

The first and the recommended way is loading via Google's CDN, by adding this tag to your HTML

```HTML
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Or this in your CSS/Sass files:

```CSS
@import url(http://fonts.googleapis.com/icon?family=Material+Icons);
```

**Alternatively**, you can use the NPM package and add the font to your bundle by:

```
npm i material-design-icons-iconfont -S
```

and then include it in your Sass/CSS files

```CSS
@import "~material-design-icons-iconfont/dist/material-design-icons";
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
Prop name      =>    Description                    =>   Example

title          =>    The title of the datatable     =>   "Todos"                 // Name in top
columns        =>    Columns.                       =>   [                       // Array of objects
                                                            {
                                                                label: 'Name',  // Column name
                                                                field: 'name',  // Field name from row
                                                                                // Use dot for nested props
                                                                                // Can be function with row as 1st param
                                                                numeric: false, // Affects sorting
                                                                html: false,    // Escapes output if false.
                                                            }
                                                        ]
rows           =>    Rows.                          =>   [                       // Array of objects
                                                            {
                                                                name: "test",   // Whatever.
                                                                ...
                                                            }
                                                        ]
perPage        =>    Numbers of rows per page       =>   [10, 20, 30, 40, 50] (default) // Results per page
defaultPerPage =>    Default rows per page          =>   10 (default)            // Default results per page, otherwise it will be the first value of perPage
onClick        =>    Func. to execute on click      =>   console.log             // Function, row 1st param
clickable      =>    Rows are clickable.            =>   true (default)          // Row is passed in the event payload
                    Will fire `row-click` event                                  // See react to click on row (below)
sortable       =>    Cause column-click to sort     =>   true (default)          // Whether sortable
searchable     =>    Add fuzzy search functionality =>   true (default)          // Whether searchable
exactSearch    =>    Disable fuzzy search           =>   true (default)          // Whether only exact matches are returned
paginate       =>    Add footer next/prev. btns     =>   true (default)          // Whether paginated
exportable     =>    Add button to export to Excel  =>   true (default)          // Whether exportable
printable      =>    Add printing functionality     =>   true (default)          // Whether printable
customButtons  =>    Custom buttons thingy          =>   [                       // Array of objects
                                                            {
                                                                hide: false,    // Whether to hide the button
                                                                icon: 'search', // Materialize icon
                                                                onclick: aFunc, // Click handler
                                                            }
                                                        ]
```

### Localization

You can use the property `locale` to set the display language. Available languages:

- `en` (default)
- `ar`

> You can very easily contribute a locale. Just clone `locales/en.json` and `require` in `locales/index.js`

### React to click on row

The datatable will emit the `row-click` event if `clickable` is set to `true` (default).

The events payload will contain the `row object`, you can bind to the event like this:

```html
<datatable v-on:row-click="onRowClick"></datatable>

<script>
var app = new Vue({
  el: '#app',
  ...
  methods: {
    onRowClick: function (row) {
      //row contains the clicked object from `rows`
      console.log(row)
    }
  },
})
</script>
...

```

### Rows per page

You can specify the options of rows per page with the `perPage` prop. The first value will be the default value and the array will be sorted, so you can put whatever number you want. 

```html
<!-- The default value will be 100 -->
<datatable :perPage="[100, 10, 25, 50, 500]"></datatable>

```

The options will be rendered as `[10, 20, 50, 100, 500]`

![Rows per page](http://i.imgur.com/kPtppKz.png)

Otherwise, you can specify the default rows per page with the `defaultPerPage` prop.

```html
<!-- The default value will be 100 -->
<datatable :perPage="[10, 25, 50, 100, 500]" :defaultPerPage="100"></datatable>

```
