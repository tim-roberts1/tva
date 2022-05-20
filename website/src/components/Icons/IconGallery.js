import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import * as psIcons from '@pluralsight/icons'
import styles from './IconGallery.module.css'

function IconGallery(props) {
  const { icons, size = 'm' } = props
  const psIconProps = getIconProps({ size })

  return (
    <div className={styles.gallery}>
      {Object.keys(icons)
        .sort()
        .map((key, i) => {
          const Icon = psIcons[key]
          const label = key.replace(/[^a-zA-Z0-9]/, '')

          return (
            <span className={styles.example}>
              <Icon key={`icon_${i}`} {...psIconProps} />
              <span className={styles.label}>{label}</span>
            </span>
          )
        })}
    </div>
  )
}

export default IconGallery
