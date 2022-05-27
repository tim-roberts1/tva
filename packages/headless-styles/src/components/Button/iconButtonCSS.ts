import { getDefaultIconButtonOptions } from './shared'
import { createSvelteObj, createCSSObj } from '../../utils/helpers'
import type { ButtonType, IconButtonOptions, Size, Tech } from './types'
import styles from './buttonCSS.module.css'
import type { IconSize } from '../types'

interface ButtonClass {
  defaultClass: string
  svelteClass: string
}

function createClass(tech: Tech, classes: ButtonClass) {
  if (tech === 'svelte') {
    return createSvelteObj(classes.svelteClass)
  }

  return createCSSObj(classes.defaultClass)
}

// Public

const iconButtonSizeMap: Record<Size, IconSize> = {
  xs: 's',
  s: 'm',
  m: 'm',
  l: 'l',
}

export function getIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const { kind, size, variant, ariaLabel, tech } = defaultOptions
  const sizeClass = `${size}IconButton`

  return {
    button: {
      'aria-label': ariaLabel,
      type: 'button' as ButtonType,
      ...createClass(tech, {
        defaultClass: `ps-icon-btn ${styles[kind]} ${styles[sizeClass]} ${styles[variant]}`,
        svelteClass: `base ${kind} ${sizeClass} ${variant}`,
      }),
    },
    iconOptions: {
      ariaHidden: 'true',
      size: iconButtonSizeMap[size],
    },
  }
}
