import { getDefaultIconButtonOptions } from './shared'
import { createSvelteObj } from '../../utils/helpers'
import type { ButtonType, IconButtonOptions, Size } from './types'
import styles from './buttonCSS.module.css'
import type { IconSize } from '../types'

interface ButtonClass {
  defaultClass: string
  svelteClass: string
}

function createButton(options: IconButtonOptions, classes: ButtonClass) {
  if (options.tech === 'svelte') {
    return createSvelteObj(classes.svelteClass)
  }

  return {
    className: classes.defaultClass,
    type: 'button' as ButtonType,
  }
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
  const { kind, size, variant, ariaLabel } = defaultOptions
  const sizeClass = `${size}IconButton`

  return {
    button: {
      'aria-label': ariaLabel,
      ...createButton(defaultOptions, {
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
