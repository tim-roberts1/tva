---
tags: [Design, Theme]
title: Color
---

## Description

Our semantic color libraries help enforce the brand and achieve a more accessible experience for all users.

## Semantic naming

The color libraries used in this system provide a number of semantically named color tokens for all applications. Using a limited amount of named tokens helps to provide a performant experience for users, and also maintains a manageable amount of colors for a consistent and learnable experience.

## Principles

- Colors follow our accessibility principles
- Colors communicate our brand and visual language
- Colors are hierarchical and have meaning

## Sentiment

- Default
  - A neutral palette used to create the foundational brand experience in most pages and components.
- Action
  - These colors represent actionable and interactive items that either navigate to a new area or activate a specific command or function in the experience.
- Info
  - A feedback palette that helps to communicate an informative message to the user.
- Success
  - A feedback palette that helps to communicate a successful status to the user.
- Warning
  - A feedback palette that helps to communicate a warning status to the user.
- Danger
  - A feedback palette that helps to communicate a destructive action, loss of data, or required information to the user.

## Usage

- Text
  - Used for body copy, labels, content within components
- Navigation
  - Used for actionable text, either within body copy or within some components
- Border
  - All borders of interface items
- Background
  - Background colors of specific components (button, dropdown, etc.)
- Surface
  - Background of a layout element (page, container, wrapper, etc.)

## Prominence

- Default
  - Examples
    - Text: contained component labels eg. buttons, badge, menu items, button icons, table headers
    - Border: dialogs, modals, inputs, menu, popover, progress, tag
- Strong
  - Highest emphasis, should stand out from surrounding content
  - Examples:
    - Text: body text, labels, and headings, filled/selected input/select values, table cell values
    - Border: outline button, table borders, checkbox, radio
- Medium
  - Important but not the most prominent or most emphasized
  - Examples:
    - Text: Avatar initials, form field helper text
- Weak
  - Lowest emphasis, lowest priority
  - Examples
    - Text: input placeholders
    - Border: Tabs
- Inverse
  - High contrast alternative
  - Examples
    - Text: white text on a black background in dark theme

## State

- Default
  - The default state of any element, as presented on load of an experience (unless preset)
- Hover (also used for focus)
  - Used for pointer devices to express interactivity.
- Focus
  - The indicator (visual, aural, or otherwise) that an element is currently selected and can be interacted with.
- Active
  - The active interaction state presents itself on press or on activation of a control.
- Visited
  - Typically represented only in text navigation, the visited interaction state will represent any previously used control.

## Additional needed colors

It is strongly recommended (and often required) to only utilize colors available in the semantic color libraries. This will help communicate and strengthen this system's visual language, educate users on the Brand, and streamline the path from design to implementation.

This library does not account for data visualization or new components. Additional colors can be added on top of these libraries for unique experiences, and can also be submitted for potential inclusion in the system and libraries themselves.

## Themes

This system provides default support for both dark and light themes. Themes can be applied at the page level - for complete takeover of all styles - or at the component level for specific sections or components.

It is currently recommended to maintain one theme throughout all components and sections at the page level.
