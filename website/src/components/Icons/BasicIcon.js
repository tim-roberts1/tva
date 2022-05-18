import React from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import { MegaphoneIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const psSmallIconProps = getIconProps({ size: 's' })
const psIconProps = getIconProps()
const psLargeIconProps = getIconProps({ size: 'l' })

function BasicIcon() {
  return (
    <Container>
      <MegaphoneIcon {...psSmallIconProps} />
      <MegaphoneIcon {...psIconProps} />
      <MegaphoneIcon {...psLargeIconProps} />
    </Container>
  )
}

export default BasicIcon
