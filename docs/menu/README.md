---
tags:
  - menu
---

<DisplayComponent>
<Button text="Example 1" @click="$refs.example.open()"/>
<Menu
ref="example"
:items="['item 1', 'item 2', 'item 3']"
/>
</DisplayComponent>

```html
<Button text="Example 1" @click="$refs.example.open()"/>

<Menu
    ref="example"
    :items="['item 1', 'item 2', 'item 3']"
/>
```

<DisplayComponent>
<Button text="Example 2" @click="$refs.example2.open()"/>
<Menu
ref="example2">
<List>
<ListItem text="List Item without divider" leftIcon="alarm" />
</List>
</Menu>
</DisplayComponent>

```html
<Button text="Example 2" @click="$refs.example2.open()"/>

<Menu
    ref="example2">
    <List>
        <ListItem text="List Item without divider" leftIcon="alarm" />
    </List>
</Menu>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| items | String[] | The items of the menu | null |


## Methods

| Method        | Description  |
| ------------- |:-------------:|
| open | Show the menu |
| close | Close the menu |

## Events

| Name        | Description           | Params  |
| ------------- |:-------------:| -----:|
| click | Triggered when the user clicks on the menu item | the index of the items that was clicked |