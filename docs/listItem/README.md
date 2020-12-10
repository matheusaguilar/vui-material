---
tags:
  - list
  - item
  - listitem
---

<DisplayComponent>
<List>
<ListItem text="List Item without divider" leftIcon="alarm" />
<ListItem
text="List Item with divider"
leftIcon="star"
divider="true"
/>
<ListItem
text="List Item with Description"
description="Description..."
/>
<ListItem
text="List Item with Description and leftIcon"
description="Description..."
leftIcon="favorite"
/>
</List>
</DisplayComponent>

```html
<List>
    <ListItem text="List Item without divider" leftIcon="alarm" />
    <ListItem
        text="List Item with divider"
        leftIcon="star"
        divider="true"
    />
    <ListItem
        text="List Item with Description"
        description="Description..."
    />
    <ListItem
        text="List Item with Description and leftIcon"
        description="Description..."
        leftIcon="favorite"
    />
</List>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| text | String | The text of the list item | "" |
| description | String | The description of the list item | "" |
| leftIcon | String | Any material icon | "" |
| divider | Boolean | Create a border bottom of the list item | false |
| tabIndex | String | The tabindex for the li elements created | "" |