---
sidebar_position: 1
tags: [Development, Usage, Intro, Icons]
---

# Intro

:::caution

This is **unreleased** documentation for Pluralsight Design **icons** package.

:::

<p class="page-subheadline" markdown="1">The icons package provides icons ready to insert into your application as inline SVG elements.</p>

## SVG vs. Icon Font War

We chose to use inline Scalable Vector Graphics (SVG) after a thorough consideration of alternatives.

See also: [Discussion](https://github.com/pluralsight/tva/discussions/70), [RFC](https://github.com/pluralsight/tva-rfcs/blob/main/text/0000-icons.md#alternatives)

Benefits of inline SVG include:

- Same high quality at any size
- Compact format
- No layout shift
- Good default accessibility
- Can control color with CSS, including inheriting from parent
- No additional requests to load
- Can be individually imported and tree-shaken
- Increased control for things like animation and multiple colors

Other methods showed promise, but had one or more drawbacks that ruled them out. The main contenders were:

- Icon fonts
  - Pros
    - Controlled with CSS
    - Cacheable
    - Usable by any framework (and beyond, since it is a font)
  - Cons
    - Limited built-in accessibility (could use ligatures and in some cases, symbol matching)
    - Degraded quality due to rendering as a font (usually minor but noticeable)
    - Requires single-path SVG to generate font. Quality and optimizations can be lost in the conversion.
    - Always includes all icons
    - Controlled by `font-size` instead of `height` and `width` (a pro in some contexts)
    - Monochromatic
    - Layout shift
    - Additional network request - similar challenges as custom fonts (FOUT)
- CSS: mask-image
  - Pros
    - Controlled with CSS
    - Usable by any framework
  - Cons
    - Will not render at all in IE11
    - No built-in accessibility
    - Increased CSS size (could potentially be tree-shaken, but still each icon would need to be listed twice due to current vendor prefixes)
- img with data-uri
  - Pros
    - Fast rendering
    - Easier to support any framework with the same output
    - Easy to make accessible (img tag)
  - Cons
    - Cannot control color via CSS
    - No default accessibility

## Usage

The `icons` package provides an inline SVG element specific to your framework.

Icons can be imported by name from the package root for React JSX.

```javascript
import { menuIcon } from '@pluralsight/icons'
```

If you are using a different, supported framework, append its name to the path.

```javascript
import { menuIcon } from '@pluralsight/icons/svelte'
```

:::note

If your bundler does not support tree shaking, please see our notes on [minimizing bundle size](api.md#minimizing-bundle-size)

:::

For comparisson, here is an example of a 1:1 replacement of an inline SVG element with an icon from the library in JSX

```jsx title="Inline icon element"
const MenuIcon = (props) => (
  <span {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="menu icon"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5zM2.5 17h18.98a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0-12h18.977a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
      />
    </svg>
  </span>
)

export default MenuIcon
```

```jsx title="TVA icon element"
import { menuIcon } from '@pluralsight/icons'

const MenuIcon = (props) => <span {...props}>{menuIcon}</span>

export default MenuIcon
```
