---
tags:
  - button
---

<DisplayComponent>
<Button />
<Button variant="outlined"/>
<Button variant="unelevated"/>
<Button variant="text"/>
</DisplayComponent>

```html
<Button />
<Button variant="outlined"/>
<Button variant="unelevated"/>
<Button variant="text"/>
```

<DisplayComponent>
<Button leftIcon="favorite"/>
<Button variant="outlined" rightIcon="favorite"/>
</DisplayComponent>

```html
<Button leftIcon="favorite"/>
<Button variant="outlined" rightIcon="favorite"/>
```

## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| type | String | The type of the button: "button","submit", "reset" | "button" |
| text | String | Text to show in the button | "Text" |
| variant | String | Defines the style of the button: "raised", "text", "outlined", "unelevated" | "raised" |
| leftIcon | String | Any material icon | ""
| rightIcon | String | Any material icon | ""
| disabled | Boolean | Disable the button | false


