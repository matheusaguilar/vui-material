---
tags:
  - linearprogress
  - progress
  - loading
---

<DisplayComponent>
<LinearProgress />
</DisplayComponent>

```html
<LinearProgress />
```
## Props

| Prop        | Type           | Description  | Default |
| ------------- |:-------------:| -----:| -----:|
| id? | String | Define the element DOM id for this component | null |
| start | String | Start the component with indeterminate state | true |

## Methods

| Method        | Description  | Params |
| ------------- |:-------------:| -----:|
| determinate | Stop the progress indicator | value: Boolean |
| progress | Sets the progress bar to this value. Value should be between (0-1) | value: Number |
| determinate | Set the determinate state | value: Boolean |
| buffer | Sets the buffer bar to this value. Value should be between (0-1) | value: Number |
| reverse | Reverses the direction of the linear progress indicator. | value: Boolean |