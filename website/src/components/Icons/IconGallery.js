import React, { memo } from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import styles from './IconGallery.module.css'

function IconListItem(props) {
  const { label, iconComponent } = props
  const psIconProps = getIconProps({ size: 'l' })
  const Icon = iconComponent

  return (
    <li className={styles.item}>
      <Icon {...psIconProps} />
      <span className={styles.label}>{label}</span>
    </li>
  )
}

const IconList = memo(function IconList(props) {
  const { icons } = props

  return (
    <ul className={styles.list}>
      {Object.keys(icons)
        .sort()
        .map((key) => (
          <IconListItem key={key} label={key} iconComponent={icons[key]} />
        ))}
    </ul>
  )
})

export default IconList
