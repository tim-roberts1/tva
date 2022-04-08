import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const preview = `export default function Menu(props) {
  return (
    <div>
      ...
      <MenuIcon {...getIconProps()} />
      ...
    </div>
  )
}`

export function BasicIconPreview() {
  return <CodeBlock>{preview}</CodeBlock>
}

export function BasicIconFullPreview() {
  return (
    <CodeBlock>{`import { MenuIcon } from '@pluralsight/icons'
import { getIconProps } from '@pluralsight/headless-styles'

${preview}`}</CodeBlock>
  )
}
