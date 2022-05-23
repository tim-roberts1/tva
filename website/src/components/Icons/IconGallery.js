import React, { memo } from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import styles from './IconGallery.module.css'
import * as arrowIcons from '@pluralsight/icons/react/arrows'
import * as avIcons from '@pluralsight/icons/react/audio-video'
import * as brandIcons from '@pluralsight/icons/react/brands'
import * as commonIcons from '@pluralsight/icons/react/common-actions'
import * as communicationIcons from '@pluralsight/icons/react/communication'
import * as editorIcons from '@pluralsight/icons/react/editor'
import * as navigationIcons from '@pluralsight/icons/react/navigation'
import * as socialIcons from '@pluralsight/icons/react/social'
import * as uiIcons from '@pluralsight/icons/react/ui-actions'

const iconData = {
  Arrows: arrowIcons,
  'Audio/Video': avIcons,
  Brands: brandIcons,
  'Common Actions': commonIcons,
  Communication: communicationIcons,
  Editor: editorIcons,
  Navigation: navigationIcons,
  Social: socialIcons,
  'UI Action': uiIcons,
}

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

function IconList(props) {
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
}

function IconSection(props) {
  const { category } = props

  return (
    <section className={styles.section}>
      <h2>{category}</h2>
      <IconList icons={iconData[category]} />
    </section>
  )
}

const IconGallery = memo(function IconGallery() {
  return (
    <div className={styles.gallery}>
      {Object.keys(iconData)
        .sort()
        .map((category) => (
          <IconSection category={category} />
        ))}
    </div>
  )
})

export default IconGallery
