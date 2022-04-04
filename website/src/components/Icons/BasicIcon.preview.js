import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const preview = `export default function MenuIcon(props) {
  return (
    <span {...getIconProps()} {...props}>
      {menuIcon}
    </span>
  )
}`

export function BasicIconPreview() {
  return <CodeBlock>{preview}</CodeBlock>
}

export function BasicIconFullPreview() {
  return (
    <CodeBlock>{`import { menuIcon } from '@pluralsight/icons'
import { getIconProps } from '@pluralsight/headless-styles'

${preview}`}</CodeBlock>
  )
}
