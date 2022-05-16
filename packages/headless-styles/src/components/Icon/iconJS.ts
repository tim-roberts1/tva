import { createJSProps, transformStyles } from '../../utils/helpers'
import { getA11yIconProps, getDefaultIconOptions } from './shared'
import styles from './generated/iconCSS.module'
import type { IconOptions } from './types'

export const ChakraIcon = {
  baseStyle: styles.psIcon,
  defaultProps: {
    size: 'm',
  },
  sizes: {
    xs: styles.xsIconSize,
    s: styles.sIconSize,
    m: styles.mIconSize,
    l: styles.lIconSize,
  },
}

export type StyleKey = keyof typeof styles

export function getJSIconProps(options?: IconOptions) {
  const { size, ...a11y } = getDefaultIconOptions(options)
  const a11yProps = getA11yIconProps(a11y)
  const sizeKey = `${size}IconSize`
  const jsStyles = styles[sizeKey as StyleKey]

  return {
    a11yProps,
    ...createJSProps(transformStyles(jsStyles), jsStyles),
  }
}
