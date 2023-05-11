import type { OptionProps } from '../../utils/types'
import { createJSProps } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  createBadgeClasses,
  getIconProps,
} from './shared'
import styles from './generated/badgeCSS'
import type { BadgeOptions, BadgeSize } from './types'

export function getJSBadgeProps(options?: BadgeOptions) {
  const defaultOptions = getDefaultBadgeOptions(options)
  const classnames = createBadgeClasses(defaultOptions)

  return {
    ...createJSProps({
      ...styles[classnames.sentimentClass],
      ...styles[classnames.sizeClass],
      ...styles[classnames.usageClass],
    }),
  }
}

export function getJSBadgeIconProps(size: BadgeSize) {
  return getIconProps(
    size,
    createJSProps(styles.pando_badgeIcon)
  ) as OptionProps
}
