import { createClassProp } from '../../utils/helpers'
import { getDefaultBadgeOptions } from './shared'
import styles from './badgeCSS.module.css'
import type { BadgeOptions } from './types'

export function getBadgeProps(options?: BadgeOptions) {
  const { kind, tech } = getDefaultBadgeOptions(options)

  return {
    ...createClassProp(tech, {
      svelteClass: `ps-badge psBadgeBase ${kind}`,
      defaultClass: `ps-badge ${styles[kind]}`,
    }),
  }
}
