import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicIconPreview() {
  return (
    <CodeBlock>{`const MenuIcon = (props) => (
  <span {...getIconProps()} {...props}>
    {menuIcon}
  </span>
)`}</CodeBlock>
  )
}

export function BasicIconFullPreview() {
  return (
    <CodeBlock>{`import { menuIcon } from '@pluralsight/icons'
import { getIconProps } from '@pluralsight/headless-styles'

const MenuIcon = (props) => (
  <span {...getIconProps()} {...props}>
    {menuIcon}
  </span>
)

export default MenuIcon`}</CodeBlock>
  )
}
