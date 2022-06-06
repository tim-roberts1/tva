import type { IconOptions, IconA11yOptions, Tech } from './types'
import { IconSize } from '../types'

export const defaultIconOptions = {
  size: 'm' as IconSize,
  tech: '' as Tech,
  ariaHidden: false,
}

export function getDefaultIconOptions(options?: IconOptions) {
  return {
    size: options?.size ?? defaultIconOptions.size,
    tech: options?.tech ?? defaultIconOptions.tech,
    ariaHidden: options?.ariaHidden ?? defaultIconOptions.ariaHidden,
    ariaLabel: options?.ariaLabel,
  }
}

export function getA11yIconProps(a11yOptions?: IconA11yOptions) {
  return {
    'aria-hidden': a11yOptions?.ariaHidden,
    ...(a11yOptions?.ariaLabel && {
      'aria-label': a11yOptions.ariaLabel,
    }),
    role: 'img',
  }
}
