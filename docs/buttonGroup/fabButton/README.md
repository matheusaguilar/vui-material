---
tags:
  - fab
  - button
  - fabbutton
---

<DisplayComponent>
<FabButton leftIcon="favorite"/>
<FabButton leftIcon="star" :mini="true"/>
<FabButton variant="extended" rightIcon="favorite" text="Extended"/>
</DisplayComponent>

```html
<FabButton leftIcon="favorite"/>
<FabButton leftIcon="star" :mini="true"/>
<FabButton variant="extended" rightIcon="favorite" text="Extended"/>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| type | String | The type of the button: "button","submit", "reset" | "button" |
| text | String | Text to show in the button | "Text" |
| variant | String | Defines the style of the button: "standard", "extended" | "standard" |
| mini | Boolean | Change the size of the button | false |
| leftIcon | String | Any material icon | null |
| rightIcon | String | Any material icon | null |
