---
tags:
  - snackbar
  - modal
---

<DisplayComponent>
<Button text="Example" @click="$refs.example.open()"/>
<Snackbar
ref="example"
text="Hello!"
action="Click"
/>
</DisplayComponent>

```html
<Button text="Example" @click="$refs.example.open()"/>

<Snackbar ref="example" text="Hello!" action="Click"/>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| text | String | The text of the snackbar | "Text" |
| action | String | The text of the action button | "Action" |

## Methods

| Method        | Description  |
| ------------- |:-------------:|
| open | Show the menu |

::: tip
closes automatically after a few seconds.
:::

## Events

| Name        | Description           |
| ------------- |:-------------:|
| click | Triggered when the user clicks on the action button |