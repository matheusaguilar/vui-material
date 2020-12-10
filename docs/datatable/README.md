---
tags:
  - table
  - datatable
---

<DisplayComponent>
<DataTable :head="[{ name: 'Dessert', sort: true }, { name: 'Carbs (g)', number: true }, { name: 'Protein (g)', number: true, sort: true }, 'Comments']" :data="[['Blue Ice', 24, 5.0, 'Super tasty'], ['Frozen yogurt', 24, 3.2, 'Super tasty']]" />
</DisplayComponent>

```html
<DataTable 
    :head="[
        { name: 'Dessert', sort: true },
        { name: 'Carbs (g)', number: true },
        { name: 'Protein (g)', number: true, sort: true },
        'Comments']" 
    :data="[
        ['Blue Ice', 24, 5.0, 'Super tasty'],
        ['Frozen yogurt', 24, 3.2, 'Super tasty']]" 
/>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| head | TableHeader[] - String[] | Define the table headers | [] |
| data | Any[] | The data elements to show in the table | [] |

#### TableHeader

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| name | String | The name of the header | ""
| number | Boolean | Define if is numeric header, this will align numbers at right | false |
| sort | Boolean | Define if is a sorteable header, this will add a button to click to sort items | false |


## Methods

| Method        | Description  |
| ------------- |:-------------:| -----:|
| getSelectedRows | Return all the selected rows |


```html
<DataTable 
    :head="[
        { name: 'Dessert', sort: true },
        { name: 'Carbs (g)', number: true },
        { name: 'Protein (g)', number: true, sort: true },
        'Comments']" 
    :data="[
        ['Blue Ice', 24, 5.0, 'Super tasty'],
        ['Frozen yogurt', 24, 3.2, 'Super tasty']]" 
    ref="exampleTable"
/>
```

```js
getSelectedRows() {
    console.log(this.$refs.exampleTable.getSelectedRows());    
}
```


## Events

| Name        | Description           | Params  |
| ------------- |:-------------:| -----:|
| sort | Triggered when the user clicks on the sort button of the table header | { "index": "the column index that was clicked", "order": "ascending - descending" |


```html
<DataTable 
    :head="[
        { name: 'Dessert', sort: true },
        { name: 'Carbs (g)', number: true },
        { name: 'Protein (g)', number: true, sort: true },
        'Comments']" 
    :data="tableData"
    @sort="sortTable" 
/>
```

```js
public tableData = [
    ["Blue Ice", 24, 5.0, "Super tasty"],
    ["Frozen yogurt", 24, 3.2, "Super tasty"],
    ["Ice cream sandwich", 37, 4.3, "I like ice cream more"],
    ["Amber", 37, 1.3, "I like ice cream more"]
];

sortTable(data: any) {
    const sortFn = (index: number) => (a: any, b: any) => {
      if (a[index] === b[index]) {
        return 0;
      } else {
        return a[index] < b[index] ? -1 : 1;
      }
    };

    if (data.order === "ascending") {
      this.tableData.sort(sortFn(data.index));
    } else {
      this.tableData.sort(sortFn(data.index)).reverse();
    }
}
```
