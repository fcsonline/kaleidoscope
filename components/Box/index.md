# Box

## Requirements

This private component will render their `children` in wrapped by a `div`. This
`div` will be rendered as `flex`.

It will receive a some specific props:

- A `direction` prop that will decide the direction of the `flex` direction. The valid values will be `row` and `column`.
- A `padding`, `paddingX` and `paddingY`, `paddingTop`, `paddingLeft`, `paddingRight` and `paddingBotton` props, that will represent the padding applied and are limited to the `Size` token.
- A `gap` prop, that will represent the space between their children and is limited to the `Size` token.

This component will expose publicly the `Row` and `Column` components that will 
apply the `row` and `colum` direction respectively.
