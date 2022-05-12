export interface IconA11yOptions {
  label?: string
  ariaHidden?: boolean
}

export interface IconOptions extends IconA11yOptions {
  size?: Size
  tech?: Tech
}

// types

export type Size = 'xs' | 's' | 'm' | 'l'
export type Tech = 'svelte' | ''
