---
sidebar_position: 1
tags: [Development, Usage, Intro, Icons]
---

# Intro

:::caution

This is **unreleased** documentation for Pluralsight Design **icons** package.

:::

<p class="page-subheadline" markdown="1">The icons package provides icons ready to insert into your application as inline SVG elements.</p>

## npm

To use icons in your application, install the npm package.

```bash npm2yarn
npm install @pluralsight/icons@alpha
```

## Usage

### Inline SVG Elements

:::note

This library provides only the icon element to allow for maximum flexibility.

Additional attributes will be provided by the `headless-styles` package.

:::

```jsx title="Using an icon element in React"
import { menuIcon } from '@pluralsight/icons/navigation'
import { getIconStyles } from '@pluralsight/headless-styles'

const MenuIcon = (props) => (
  <span {...getIconStyles()} {...props}>
    {menuIcon}
  </span>
)

export default MenuIcon
```

### Coloring

By default the icons are monochromatic and will inherit the `color` of their parent.

This ensures the icon color matches its context by default to enable seamless theming while still allowing for control over the icon's color separately.

```jsx title="Example of icon color inheritance"
import { menuIcon } from '@pluralsight/icons/navigation'

// icon is blue
const BlueBlock = (
  <div style={{ color: '#00f' }}>
    ...
    <span>{menuIcon}</span>
    ...
  </div>
)
```

### SVG Files (fallback)

:::danger

Directly importing the SVG files is meant only for unsupported frameworks.

This approach requires that you provide any tooling necessary for importing and using the SVG elements in your environment.

:::

```jsx title="Importing an icon as SVG file into an app created with create-react-app"
import { ReactComponent as MenuIcon } from '@pluralsight/icons/svg/navigation/menu.svg'
import { getIconProps } from '@pluralsight/headless-styles'

// Props are applied to the parent rather than directly to the component
// in order to maintain consistent structural assumptions.
const MyMenuComponent = (props) => (
  <span {...getIconProps()} {...props}>
    <MenuIcon />
  </span>
)
```

## Accessibility

An accessible description of each icon is included by default in the SVG itself.

## Organization and Naming

We provide `jsx` elements by default. Other formats will be available in corresponding subfolders. e.g., `import { menuIcon } from '@pluralsight/icons/svelte/navigation'`

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
