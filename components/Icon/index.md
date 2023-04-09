# Icon

## Requirements

This component will render a small image svg icon. The icons will retrieved from the url `https//example.com/image.svg` url.
The icon show it will depend on the `icon` property and will use the svg `xlink:href` attribute to choose the proper `id` anchor.

It will receive a some specific props:

- A `icon` prop that will represent which icon should be shown. The available values for this props are `house`, `copy`, `alert`, `add` and `calendar`. This property and the `id` anchor to access the image `url`, always have the same value.
- A `size` prop, that will represent the height and the width of this component and is limited to the `Size` token.
