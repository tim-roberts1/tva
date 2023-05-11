import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  getIconProps,
  createBadgeClasses,
} from './shared'
import type { BadgeOptions, BadgeSize } from './types'
import './badgeCSS.scss'

const BADGE = 'pando-badge'

export function getBadgeProps(options?: BadgeOptions) {
  const defaultOptions = getDefaultBadgeOptions(options)
  const { sentimentClass, sizeClass, usageClass } =
    createBadgeClasses(defaultOptions)

  return {
    ...createClassNameProp(
      BADGE,
      usageClass,
      sentimentClass,
      sizeClass,
      ...defaultOptions.classNames
    ),
  }
}

export function getBadgeIconProps(size: BadgeSize) {
  return getIconProps(
    size,
    createClassNameProp(`${BADGE}-icon`, 'pando_badgeIcon')
  )
}
