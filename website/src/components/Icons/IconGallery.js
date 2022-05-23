import React, { memo } from 'react'
import styles from './IconGallery.module.css'
import IconList from './IconList'

const IconGallery = memo(function IconGallery(props) {
  const { icons, size } = props

  return (
    <ul className={styles.gallery}>
      <IconList icons={icons} size={size} />
    </ul>
  )
})

export default IconGallery
