---
tags:
  - input
  - textfield
  - autocomplete
---

<DisplayComponent mBottom="110px">
<AutoComplete :search="() => ['one', 'two', 'three']" :start="1"/>
</DisplayComponent>

```html
<AutoComplete :search="() => ['one', 'two', 'three']" :start="1"/>
```

## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| variant | String | Define the input style: "filled", "outlined" | "filled" |
| type | String | The HTML input type | "text" |
| name | String | The HTML input name | "" |
| required | Boolean | The HTML input required | false |
| disabled | Boolean | The HTML input disabled | false |
| pattern | String | The HTML input pattern (used for form native validation) | null |
| title | String | The HTML input title (used for form native validation) | null |
| label | String | The label of the input | "Label" |
| shaped | Boolean | Change the style of the input, adding borders | false |
| leftIcon | String | Any material icon | "search" |
| rightIcon | String | Any material icon | "" |
| helperText | String | Add a text at the bottom of the input | "" |
| noResultLabel   | String      |   Text to show when no results where found | "No results found" |
| start | Number      |    Define when to start show the options  | 3 |
| search | Function      |    A function that returns string[] items that can be selected based on the input | () => [] |

::: tip
We use this library to create this component: [Trevoreyre-Autocomplete](https://github.com/trevoreyre/autocomplete)! Thank you guys!
:::
