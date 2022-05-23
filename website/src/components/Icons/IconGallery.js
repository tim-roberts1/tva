import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import styles from './IconGallery.module.css'

function IconGallery(props) {
  const { icons, size = 'l' } = props
  const psIconProps = getIconProps({ size: size })

  return (
    <div className={styles.gallery}>
      {Object.keys(icons)
        .sort()
        .map((key) => {
          const Icon = icons[key]

          return (
            <span className={styles.item}>
              <Icon key={key} {...psIconProps} />
              <span className={styles.label}>{key}</span>
            </span>
          )
        })}
    </div>
  )
}

export default IconGallery
