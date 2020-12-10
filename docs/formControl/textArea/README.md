---
tags:
  - input
  - textarea
---

<DisplayComponent>
<TextArea maxlength="200" />
<TextArea variant="outlined" maxlength="200" />
</DisplayComponent>

```html
<TextArea maxlength="200" />
<TextArea variant="outlined" maxlength="200" />
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| variant | String | Define the input style: "filled", "outlined" | "filled" |
| name | String | The HTML input name | "" |
| required | Boolean | The HTML input required | false |
| disabled | Boolean | The HTML input disabled | false |
| pattern | String | The HTML input pattern (used for form native validation) | null |
| title | String | The HTML input title (used for form native validation) | null |
| maxlength | String | The HTML input maxlength | "" |
| minlength | String | The input minlength | "" |
| label | String | The label of the input | "Label" |