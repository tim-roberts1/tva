import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { MegaphoneIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const psIconProps = getIconProps()
const psXSmallIconProps = getIconProps({ size: 'xs' })
const psSmallIconProps = getIconProps({ size: 's' })
const psLargeIconProps = getIconProps({ size: 'l' })

function BasicIcon() {
  return (
    <Container>
      <MegaphoneIcon {...psIconProps} />
      <MegaphoneIcon {...psXSmallIconProps} />
      <MegaphoneIcon {...psSmallIconProps} />
      <MegaphoneIcon {...psLargeIconProps} />
    </Container>
  )
}

export default BasicIcon
