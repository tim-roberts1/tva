import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const preview = `<div style={{
  color: 'var(--ps-danger-text)'
  background: 'var(--ps-danger-background)'
}}>
  ...
  {/* icon color will match text */}
  <WarningIcon />
  ...
</div>`

export function IconColorPreview() {
  return <CodeBlock>{preview}</CodeBlock>
}

export function IconColorFullPreview() {
  return (
    <CodeBlock>{`import { WarningIcon } from '@pluralsight/icons'

const DangerBlock = (
${preview.replace(/^(.)/gm, '  $1')}
)`}</CodeBlock>
  )
}
