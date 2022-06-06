import type { IconOptions, IconA11yOptions, Tech } from './types'
import { IconSize } from '../types'

const a11yRole = 'img'
const a11yPropMap = {
  ariaHidden: 'aria-hidden',
  ariaLabel: 'aria-label',
}

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
    [a11yPropMap.ariaHidden]: a11yOptions?.ariaHidden,
    ...(a11yOptions?.ariaLabel && {
      [a11yPropMap.ariaLabel]: a11yOptions.ariaLabel,
    }),
    role: a11yRole,
  }
}
