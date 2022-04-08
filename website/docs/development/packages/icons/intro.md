---
sidebar_position: 1
tags: [Development, Usage, Intro, Icons]
---

# Intro

:::caution

This is **unreleased** documentation for Pluralsight Design **icons** package.

:::

<p class="page-subheadline" markdown="1">The icons package provides icons ready to insert into your application as inline SVG elements.</p>

Icons are used to convey meaning at a glance, therefore it is important that their usage is consistent and that any meaning conveyed visually is also available to those without vision.

As symbols, the initial meaning may be different for each person, so it is also important that _our_ meaning is available for those who have not yet learned it, and that the symbol can be leveraged for those who have.

## Purpose

The purpose of this package is to provide the library of Pluralsight icons as simple, low-level elements that can be used to build content or higher-order components for the web.

## SVG vs. icon font

After a [thorough and unbiased comparison of the performance and quality of icon fonts vs inline SVG](https://github.com/pluralsight/tva/discussions/70) we determined that the most performant approach will be to use inline SVG elements. In the [RFC for the Icons package](https://github.com/pluralsight/tva-rfcs/blob/main/text/0000-icons.md) we continued to refine our approach for delivering and rendering icons on the web.

## Accessibility

An accessible label is included by default for each icon in the SVG itself.

```xml
<svg aria-label="menu icon" role="img" viewBox="0 0 24 24">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M22 11.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5zM2.5 17h18.98a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm0-12h18.977a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
  ></path>
</svg>
```

## Organization and naming

We provide `jsx` elements by default. Other formats will be available in corresponding subfolders. e.g., `import { menuIcon } from '@pluralsight/icons/svelte'`
Each exported icon is named in camelCase and suffixed with "Icon".

Icons are organized into categories in accordance with the Pluralsight Design standards.

## Minimizing bundle size

:::note

The following instructions are only needed if you are using an older bundler that doesn't support tree-shaking.

:::

Tree-shaking of `@pluralsight/icons` works out of the box in modern frameworks. If you're using ES6 modules and a bundler that supports tree-shaking you can safely use named imports and still get an optimized bundle size automatically:

```javascript
import { bookmarkIcon, menuIcon } from '@pluralsight/icons'
```

### Pathed imports

Without tree-shaking, you can reduce your bundle size by directly importing the icons you need. To do this, append the category to the path.

```javascript title="Pathed import for React"
import playIcon from '@pluralsight/icons/audio-video/playIcon'
```

When importing for other frameworks, the framework comes before the category.

```javascript title="Pathed import for Svelte"
import playIcon from '@pluralsight/icons/svelte/audio-video/playIcon'
```
