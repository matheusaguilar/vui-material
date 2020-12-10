---
tags:
  - modal
---

<DisplayComponent>
<Button text="Example 1" @click="$refs.example1.open()"/>
<Modal ref="example1" text="Text" />
</DisplayComponent>

```html
<Button text="Example 1" @click="$refs.example1.open()"/>

<Modal ref="example1" text="Text" />
```

<DisplayComponent>
<Button text="Example 2" @click="$refs.example2.open()"/>
<Modal ref="example2" text="Text" :simple="false">
<List>
<ListItem text="Item 1" leftIcon="alarm" />
<ListItem text="Item 2" leftIcon="star" />
</List>
</Modal>
</DisplayComponent>

```html
<Button text="Example 2" @click="$refs.example2.open()"/>

<Modal ref="example2" text="Text" :simple="false">
    <List>
        <ListItem text="Item 1" leftIcon="alarm" />
        <ListItem text="Item 2" leftIcon="star" />
    </List>
</Modal>
```

## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| title | String | Define the title for the modal | "Title" |
| text | String | Define the text body for the modal | null |
| simple | Boolean | Define if the modal will use slot or not as the body content (true = not use slot) | true |
| labelNo | String | The label text to cancel the action of the modal | "No" |
| labelYes | String | The label text to confirm the action of the modal | "Yes" |

## Methods

| Method        | Description  |
| ------------- |:-------------:|
| open | Show the modal |
| close | Close the modal |

## Events

| Name        | Description           | Params  |
| ------------- |:-------------:| -----:|
| no | Triggered when the user clicks on cancel button on a simple modal |
| yes | Triggered when the user clicks on confirm button on a simple modal |