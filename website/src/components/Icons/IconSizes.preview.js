import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IconSizesPreview() {
  return (
    <CodeBlock>{`<span {...getIconProps()}>{menuIcon}</span>
<span {...getIconProps({ size: 'xs' })}>{menuIcon}</span>
<span {...getIconProps({ size: 's' })}>{menuIcon}</span>
<span {...getIconProps({ size: 'm' })}>{menuIcon}</span>
<span {...getIconProps({ size: 'l' })}>{menuIcon}</span>`}</CodeBlock>
  )
}

export function IconSizesFullPreview() {
  return (
    <CodeBlock>{`import { menuIcon } from '@pluralsight/icons'
import { getIconProps } from '@pluralsight/headless-styles'

export default function IconsSizes() {
  return (
    <div>
      <span {...getIconProps()}>{menuIcon}</span>
      <span {...getIconProps({ size: 'xs' })}>{menuIcon}</span>
      <span {...getIconProps({ size: 's' })}>{menuIcon}</span>
      <span {...getIconProps({ size: 'm' })}>{menuIcon}</span>
      <span {...getIconProps({ size: 'l' })}>{menuIcon}</span>
    </div>
  );
}`}</CodeBlock>
  )
}
