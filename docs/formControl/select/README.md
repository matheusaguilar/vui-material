---
tags:
  - input
  - select
---

<DisplayComponent>
<Select :items="['one', 'two', 'three']"/>
</DisplayComponent>

```html
<Select :items="['one', 'two', 'three']"/>
```

<DisplayComponent>
<Select :items="[{ name: 'one', selected: true }, { name: 'two', disabled: true }, 'three']"/>
</DisplayComponent>

```html
<Select :items="[
    { name: 'one', selected: true },
    { name: 'two', disabled: true },
    'three'
]"/>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| variant | String | Define the style of select: "filled", "outlined" | "filled" |
| label | String | The label of the select | "Label" |
| shaped | Boolean | Add the style shapped to select | false |
| required | Boolean | Make the select require attribute inside a form | false |
| items | ItemObj[] - String[] | The items options for the select | [] |

#### ItemObj

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| name | String | Define the name of the option | "" |
| selected | Boolean | Set the item to be selected as default value | false |
| disabled | Boolean | Enable/Disable the option to be selected | false |