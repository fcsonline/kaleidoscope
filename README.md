# Kaleidoscope

This is project is just an experiment check if we can achieve a Artificial
Intelligence Design System based only on some written down requirements.

The idea is to write all these requirements like tokens, functionality,
accessibility constraints, etc by text and send it to an AI to produce the
valued source code.

Right now, the list of available components is:

- `Avatar`: a simple component to render avatars. [Docs](./components/Avatar/index.md)
- `Icon`: a simple component to render icons. [Docs](./components/Icon/index.md)
- `Spinner`: a simple component to render a loading state. [Docs](./components/Spinner/index.md)
- `Row`: a simple component to render a container with their children in row mode. [Docs](./components/Box/index.md)
- `Column`: a simple component to render a container with their children in column mode. [Docs](./components/Box/index.md)

On the other hand, these components are constrained by some tokens:

- `Size`: a token to limit dimensional constraints.
- `Border`: a token to limit border sizes.
- `Radius`: a token to limit the border radius values.
- `Colors`: a token to limit the available colors:
  - _primary_: `#2a9d8f`
  - _secondary_: `#264653`
  - _terciary_: `#e9c46a`
