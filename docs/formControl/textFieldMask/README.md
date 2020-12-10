---
tags:
  - input
  - textfield
  - mask
  - textfieldmask
---

<DisplayComponent>
<TextFieldMask label="Digit is not allowed here" mask="AAAA"/>
<TextFieldMask label="I accept all" mask="SSSS"/>
<TextFieldMask label="Date" mask="99/99/9999"/>
<TextFieldMask label="Phone" :mask="['(99) 9999-9999', '(99) 99999-9999']" :required="true"/>
<TextFieldMask label="CPF/CNPJ" :mask="['999.999.999-99', '99.999.999/9999-99']" :required="true"/>
<TextFieldMask label="Money" :money="true" moneyUnit="R$"/>
</DisplayComponent>

```html
<TextFieldMask label="Digit is not allowed here" mask="AAAA"/>
<TextFieldMask label="I accept all" mask="SSSS"/>
<TextFieldMask label="Date" mask="99/99/9999"/>
<TextFieldMask label="Phone" 
    :mask="['(99) 9999-9999', '(99) 99999-9999']" :required="true"/>
<TextFieldMask label="CPF/CNPJ" 
    :mask="['999.999.999-99', '99.999.999/9999-99']" :required="true"/>
<TextFieldMask label="Money" :money="true" moneyUnit="R$"/>
```

#### To get the unmasked value you can do:

```html
<TextFieldMask mask="999.999.999" ref="example"/>
```

```js
function getUnmaskedValue() {
    console.log(this.$refs.example.unmasked);
}
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
| leftIcon | String | Any material icon | "" |
| rightIcon | String | Any material icon | "" |
| helperText | String | Add a text at the bottom of the input | "" |
| mask | String - String[] | Add the mask pattern | "" |
| money | Boolean | Set the mask pattern to money pattern | false |
| moneyOptions | MoneyOptions | Set the money options | null |
| moneyUnit | String | Set the money unit for default options | "$" |

#### MoneyOptions

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| precision | Number | Define the precision of the money value | 2 |
| separator | String | Define the separator of the money value | "," |
| delimiter | String | Define the delimiter of the money value | "." |
| unit | String | Define the unit of the money value | "$" |
| suffixUnit | String | Define the suffixUnit of the money value | null |
| zeroCents | String | Define the zeroCents of the money value | false |

::: tip
We use this library to do the mask: [Vanilla-Masker](https://github.com/vanilla-masker/vanilla-masker)! Thank you guys!
:::