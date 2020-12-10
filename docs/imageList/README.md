---
tags:
  - image
  - list
  - imagelist
---

<DisplayComponent>
<ImageList
:imgs="[$withBase('/assets/porto-seguro-brazil.jpg'), $withBase('/assets/porto-seguro-brazil.jpg'), $withBase('/assets/porto-seguro-brazil.jpg'), $withBase('/assets/porto-seguro-brazil.jpg'), $withBase('/assets/porto-seguro-brazil.jpg'), $withBase('/assets/porto-seguro-brazil.jpg'), $withBase('/assets/porto-seguro-brazil.jpg'), $withBase('/assets/porto-seguro-brazil.jpg')]"
:column="4"
/>
</DisplayComponent>

```html
<ImageList
    :imgs="[
    '/assets/porto-seguro-brazil.jpg',
    '/assets/porto-seguro-brazil.jpg',
    '/assets/porto-seguro-brazil.jpg',
    '/assets/porto-seguro-brazil.jpg',
    '/assets/porto-seguro-brazil.jpg',
    '/assets/porto-seguro-brazil.jpg',
    '/assets/porto-seguro-brazil.jpg',
    '/assets/porto-seguro-brazil.jpg']"
    :column="4"
/>
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| imgs | ImageObj[] - String[] | The path for the images | [] |
| variant | String | Define the component style: "standard", "masonry", "mobile" | "standard" |
| lazy | Boolean | Lazy load the image using Intersection Observer API | false |
| column | Number | Define the number of columns | 4 |
| mobileWidth | Number | Define the mobile width | 300 |
| mobileHeight | Number | Define the mobile height | 200 |
| labelOverflow | Boolean | Define if the label will overflow the image | false |
| action | Boolean | Define if will have some action when click on some image | false |

::: tip
On small screen always will change to mobile variant.
:::

#### ImageObj

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| label | String | Define the label for the image | null |
| src | String | The path for the image | null |
| imgLoading | String | If lazy is active, use this image before load the src | null |
| imgError | String | If lazy is active, use this image if some error occours. | null |

## Events

| Name        | Description           | Params  |
| ------------- |:-------------:| -----:|
| click | Triggered when the user clicks on some image when action is true | { "src": "the path of the image", "imgLoading": "", "imgError": "", "index": "the index of the image based on the array of imgs" |