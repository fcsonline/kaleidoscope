# Requirements

Assume you are creating a React set of components written in Typescript. It is 
a Design System with a set of known constraints or tokens. Each constraint
affects some aspect of the components. These are the constraints:

- `Size`: components properties tight to this token can only have the values 8, 16, 32 and 64.
- `Border`: components properties tight to this token can only have the values 1, 2, 4, 8 and 16.
- `Radius`: components properties tight to this token can only have the values 1, 2, 4, 8 and 16.
- `Colors`: components are tight to these available palette color. These are the names for each one:
  - `primary`: #2a9d8f
  - `secondary`: #264653
  - `terciary`: #e9c46a
