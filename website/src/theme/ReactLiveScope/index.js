import React from 'react'
import {
  getButtonProps,
  getIconProps,
  unstable_getPaginationProps as getPaginationProps,
} from '@pluralsight/headless-styles'
import { PlaceholderIcon } from '@pluralsight/icons'

const ReactLiveScope = {
  React,
  ...React,
  getButtonProps,
  getIconProps,
  getPaginationProps,
  PlaceholderIcon,
}

export default ReactLiveScope
