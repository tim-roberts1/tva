import React from 'react'
import IconListItem from './IconListItem'

function IconList(props) {
  const { icons, size } = props

  return Object.keys(icons)
    .sort()
    .map((key) => {
      return (
        <IconListItem
          key={key}
          label={key}
          size={size}
          iconComponent={icons[key]}
        />
      )
    })
}

export default IconList
