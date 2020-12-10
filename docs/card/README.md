---
tags:
  - card
---

<DisplayComponent>
<LayoutGrid>
<LayoutGridInner>
<LayoutGridCell desktop="4" tablet="4" phone="4">
<Card :img="$withBase('/assets/porto-seguro-brazil.jpg')"/>
</LayoutGridCell>
<LayoutGridCell desktop="4" tablet="4" phone="4">
<Card :img="$withBase('/assets/porto-seguro-brazil.jpg')" variant="basic-overmedia"/>
</LayoutGridCell>
<LayoutGridCell desktop="4" tablet="4" phone="4">
<Card :img="$withBase('/assets/porto-seguro-brazil.jpg')" variant="basic-header"/>
</LayoutGridCell>
<LayoutGridCell desktop="4" tablet="4" phone="4">
<Card :img="$withBase('/assets/porto-seguro-brazil.jpg')" variant="image-text"/>
</LayoutGridCell>
<LayoutGridCell desktop="4" tablet="4" phone="4">
<Card :img="$withBase('/assets/porto-seguro-brazil.jpg')" variant="clean"/>
</LayoutGridCell>
</LayoutGridInner>
</LayoutGrid>
</DisplayComponent>

```html
<Card img="/assets/porto-seguro-brazil.jpg"/>
<Card img="/assets/porto-seguro-brazil.jpg" variant="basic-overmedia"/>
<Card img="/assets/porto-seguro-brazil.jpg" variant="basic-header"/>
<Card img="/assets/porto-seguro-brazil.jpg" variant="image-text"/>
<Card img="/assets/porto-seguro-brazil.jpg" variant="clean"/>
```

<DisplayComponent>
<LayoutGrid>
<LayoutGridInner>
<LayoutGridCell desktop="4" tablet="4" phone="4">
<Card :img="$withBase('/assets/porto-seguro-brazil.jpg')" :action="true">
<Button />
</Card>
</LayoutGridCell>
</LayoutGridInner>
</LayoutGrid>
</DisplayComponent>

```html
<Card img="/assets/porto-seguro-brazil.jpg" :action="true">
    <Button />
</Card>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| variant | String | Defines the style of the card: "basic", "basic-overmedia", "basic-header", "image-text" | "clean" |
| lazy | Boolean | Lazy load the image using Intersection Observer API | false
| img | String | The image of the card | null
| imgLoading | String | If lazy is enabled use this image while loading | null
| imgError | String | If lazy is enabled use this image when an error occurs | null
| title | String | The title of the card | "Title"
| subTitle | String | The subtitle of the card | "SubTitle"
| description | String | The description of the card | "Description"
| action | Boolean | Enable the Card slot, then you can show elements inside Card component | false
