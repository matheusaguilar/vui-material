---
tags:
  - chip
  - chips
---

<DisplayComponent>
<ChipGrid>
<Chip />
<Chip variant="shaped"/>
<Chip leftIcon="favorite"/>
</ChipGrid>
</DisplayComponent>

```html
<ChipGrid>
    <Chip />
    <Chip variant="shaped"/>
    <Chip leftIcon="favorite"/>
</ChipGrid>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| variant | String | Define the chip style: "round", "shaped" | "round" |
| text | String | The text of the chip | "Text" |
| leftIcon | String | The material icon | "" |
