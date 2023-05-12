import { createJSProps } from '../../utils/helpers'
import {
  createIconSelectorClasses,
  getA11yIconProps,
  getDefaultIconOptions,
} from './shared'
import type { IconOptions } from './types'
import styles from './generated/iconCSS'

export const ChakraIcon = {
  defaultProps: {
    size: 'm',
  },
  sizes: {
    s: styles.pando_sIconSize,
    m: styles.pando_mIconSize,
    l: styles.pando_lIconSize,
  },
}

export function getJSIconProps(options?: IconOptions) {
  const { size, customSize, ...a11y } = getDefaultIconOptions(options)
  const { sizeClass } = createIconSelectorClasses(size, customSize)
  const jsStyles = {
    ...styles[sizeClass],
    ...(customSize && {
      height: customSize,
      width: customSize,
    }),
  }

  return {
    a11yProps: getA11yIconProps(a11y),
    ...createJSProps(jsStyles),
  }
}
