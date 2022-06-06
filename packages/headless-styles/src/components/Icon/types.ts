import { IconSize } from '../types'

export interface IconA11yOptions {
  ariaLabel?: string
  ariaHidden?: boolean
}

export interface IconOptions extends IconA11yOptions {
  size?: IconSize
  tech?: Tech
}

// types

export type Tech = 'svelte' | ''
