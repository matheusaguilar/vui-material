---
tags:
  - input
  - textfield
---

<DisplayComponent>
<TextField label="Put your text here!" />
<TextField label="Put your text here!" leftIcon="favorite"/>
<TextField label="Put your text here!" :shaped="true" />
<TextField label="Put your text here!" :maxlength="10" :counter="true"/>
<TextField label="Put your text here!" helperText="Help the user with aditional info" />
</DisplayComponent>

```html
<TextField label="Put your text here!" />
<TextField label="Put your text here!" leftIcon="favorite"/>
<TextField label="Put your text here!" :shaped="true" />
<TextField label="Put your text here!" :maxlength="10" :counter="true"/>
<TextField label="Put your text here!" helperText="Help the user with aditional info" />
```

<DisplayComponent>
<TextField label="Put your text here!" variant="outlined" />
<TextField label="Put your text here!" variant="outlined"
rightIcon="favorite" />
<TextField label="Put your text here!" variant="outlined"
rightIcon="favorite" :shaped="true"/>
<TextField label="Put your text here!" variant="outlined"
:disabled="true"/>
</DisplayComponent>

```html
<TextField label="Put your text here!" variant="outlined" />
<TextField label="Put your text here!" variant="outlined" rightIcon="favorite" />
<TextField label="Put your text here!" variant="outlined" rightIcon="favorite" 
    :shaped="true"/>
<TextField label="Put your text here!" variant="outlined" :disabled="true"/>
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
| maxlength | String | The HTML input maxlength | "" |
| minlength | String | The input minlength | "" |
| label | String | The label of the input | "Label" |
| shaped | Boolean | Change the style of the input, adding borders | false |
| leftIcon | String | Any material icon | "" |
| rightIcon | String | Any material icon | "" |
| helperText | String | Add a text at the bottom of the input | "" |
| counter | Boolean | Add a counter of characters at the bottom of the input | false |
