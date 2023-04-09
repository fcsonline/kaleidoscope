# Avatar

## Requirements

This component will render an avatar that consists in image with some rounded borders. The border width will be always 2px of `primary` color.

It will receive a some specific props:

- A `url` prop that will represent the address to the image.
- A `initials` prop that will be rendered in uppercase in the center of the component if the `url` prop is not provided. It will render only the two first letters of this prop.
- A `size` prop, that will represent the height and the width of this component and is limited to the `Size` token.
- A `radius` prop, that will represent the border radius applied and is limited to the `Radius` token.
