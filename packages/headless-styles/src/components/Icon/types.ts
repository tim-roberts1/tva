export interface IconA11yOptions {
  label?: string
  ariaHidden?: A11yBoolean
}

export interface IconOptions extends IconA11yOptions {
  size?: Size
  tech?: Tech
}

// types

export type Size = 'xs' | 's' | 'm' | 'l'
export type Tech = 'svelte' | ''
export type A11yBoolean = 'true' | 'false'
