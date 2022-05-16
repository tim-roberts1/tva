import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import * as psIcons from '@pluralsight/icons'
import Container from '../Container/Container'
import styles from './IconGallery.module.css'

const psIconProps = getIconProps()
const psXSmallIconProps = getIconProps({ size: 'xs' })
const psSmallIconProps = getIconProps({ size: 's' })
const psLargeIconProps = getIconProps({ size: 'l' })

const iconNames = Object.keys(psIcons).sort()

const gallery = iconNames.map((key, i) => {
  const Icon = psIcons[key]
  const label = key.replace(/[^a-zA-Z0-9]/, '')

  return (
    <span className={styles.example}>
      <Icon key={`icon_${i}`} {...psIconProps} />
      <span className={styles.label}>{label}</span>
    </span>
  )
})

function IconGallery() {
  return <div className={styles.gallery}>{gallery}</div>
}

export default IconGallery
