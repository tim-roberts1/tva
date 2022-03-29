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

After a [thorough and unbiased comparison of the performance and quality of icon fonts vs inline SVG](https://github.com/pluralsight/tva/discussions/70) we determined that the most performant approach will be to use inline SVG elements. In the [RFC for the Icons package](https://github.com/pluralsight/tva-rfcs/blob/main/text/0000-icons.md) we continued to refine our approach for delivering and rendering icons on the web.

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
