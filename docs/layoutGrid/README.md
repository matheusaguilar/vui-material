---
tags:
  - layout
  - grid
  - layoutgrid
---

```html
<LayoutGrid>
    <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
        </LayoutGridCell>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
        </LayoutGridCell>
    </LayoutGridInner>
</LayoutGrid>
```

::: tip
LayoutGrid create a grid system based on rows and columns. It's very usefull to create responsible designs.
:::

## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| desktop | String | The number of columns when it's a desktop screen (1-12) | 12 |
| tablet | String |  The number of columns when it's a tablet screen (1-8) | 8 |
| phone | String |  The number of columns when it's a tablet screen (1-4) | 4 |