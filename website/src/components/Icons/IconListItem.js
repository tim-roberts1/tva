import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import styles from './IconListItem.module.css'

function IconListItem(props) {
  const { label, size = 'l', iconComponent } = props
  const psIconProps = getIconProps({ size: size })
  const Icon = iconComponent

  return (
    <li className={styles.item}>
      <Icon {...psIconProps} />
      <span className={styles.label}>{label}</span>
    </li>
  )
}

export default IconListItem
