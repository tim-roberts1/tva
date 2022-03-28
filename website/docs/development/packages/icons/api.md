---
sidebar_position: 2
tags: [Development, Usage, Icons]
---

# API

:::caution

This is **unreleased** documentation for Pluralsight Design **icons** package.

:::

## Installation

To use icons in your application, install the npm package.

```bash npm2yarn
npm install @pluralsight/icons@alpha
```

## Usage

Icons can be imported by name from the package root for React JSX.

```javascript
import { menuIcon } from '@pluralsight/icons'
```

If you are using a different, supported framework, append its name to the path.

```javascript
import { menuIcon } from '@pluralsight/icons/svelte'
```

:::note

If your bundler does not support tree shaking, please see our notes on [minimizing bundle size](#minimizing-bundle-size)

:::

```jsx title="Using an icon element in React"
import { menuIcon } from '@pluralsight/icons'
import { getIconStyles } from '@pluralsight/headless-styles'

const MenuIcon = (props) => (
  <span {...getIconStyles()} {...props}>
    {menuIcon}
  </span>
)

export default MenuIcon
```

:::tip

This library provides only the svg element to allow for maximum flexibility.
Additional attributes, such as sizing, will be provided by the `headless-styles` package.

:::

## Coloring

By default the icons are monochromatic and will inherit the `color` of their parent.

This ensures the icon color matches its context by default and facilitate theming while still allowing for control over the icon's color directly.

```jsx title="Example of icon color inheritance"
import { menuIcon } from '@pluralsight/icons'

const BlueBlock = (
  <div style={{ color: '#00f' }}>
    ...
    {/* icon is blue */}
    <span>{menuIcon}</span>
    ...
  </div>
)
```

## Sizing

Icons have a 1:1 aspect ratio.

We have defined four standard sizes for icons. This sizing should be applied using the `headless-styles` package.

- `xs`: 16px
- `s`: 20px
- `m`: 24px
- `l`: 48px

## Accessibility

An accessible label is included by default for each icon in the SVG itself.

## Organization and Naming

We provide `jsx` elements by default. Other formats will be available in corresponding subfolders. e.g., `import { menuIcon } from '@pluralsight/icons/svelte'`

Each exported icon is named in camelCase and suffixed with "Icon".

Icons are organized into the same categories as [Material UI icons](https://fonts.google.com/icons).

- Action
- Alert
- Audio & Video
- Communication
- Content
- Device
- Editor
- File
- Hardware
- Home
- Image
- Maps
- Navigation
- Notification
- Places
- Search
- Social
- Toggle

## Icon Listing

_TBD_

## Minimizing Bundle Size

:::note

The following instructions are only needed if you are using an older bundler that doesn't support tree-shaking.

:::

Tree-shaking of `@pluralsight/icons` works out of the box in modern frameworks. If you're using ES6 modules and a bundler that supports tree-shaking you can safely use named imports and still get an optimized bundle size automatically:

```javascript
import { bookmarkIcon, menuIcon } from '@pluralsight/icons'
```

### Pathed Imports

Without tree-shaking, you can reduce your bundle size by directly importing the icons you need. To do this, append the category to the path.

```javascript title="Pathed import for React"
import menuIcon from '@pluralsight/icons/navigation/menuIcon'
```

When importing for other frameworks, the framework comes before the category.

```javascript title="Pathed import for Svelte"
import menuIcon from '@pluralsight/icons/svelte/navigation/menuIcon'
```

### Babel

If your bundler doesn't support tree-shaking, you can continue to use named imports using Babel to handle the tree-shaking.

Pick one of the following plugins:

#### [babel-plugin-import](https://github.com/umijs/babel-plugin-import)

```bash npm2yarn
npm install -D babel-plugin-import
```

Create a .babelrc.js file in the root directory of your project:

```javascript
const plugins = [
  [
    'babel-plugin-import',
    {
      libraryName: '@pluralsight/icons',
      libraryDirectory: '',
      camel2DashComponentName: false,
    },
    'icons',
  ],
]

module.exports = { plugins }
```

#### [babel-plugin-direct-import](https://github.com/umidbekk/babel-plugin-direct-import)

```bash npm2yarn
  npm install -D babel-plugin-direct-import
```

Create a .babelrc.js file in the root directory of your project:

```javascript
const plugins = [
  ['babel-plugin-direct-import', { modules: ['@pluralsight/icons'] }],
]

module.exports = { plugins }
```

## Importing SVG Files (fallback)

:::danger

Directly importing the SVG files is meant only for unsupported frameworks and is not recommended.
This approach requires that you provide any tooling necessary for importing and using the SVG elements in your environment.

:::

```jsx title="Importing an icon as SVG file into an app created with create-react-app"
import { ReactComponent as MenuIcon } from '@pluralsight/icons/svg/navigation/menu.svg'
import { getIconProps } from '@pluralsight/headless-styles'

// Props are applied to the parent rather than directly to the icon component
// in order to maintain consistent structural assumptions.
const MyMenuComponent = (props) => (
  <span {...getIconProps()} {...props}>
    <MenuIcon />
  </span>
)
```
