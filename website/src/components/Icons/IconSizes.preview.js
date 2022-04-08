import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IconSizesPreview() {
  return (
    <CodeBlock>{`<MenuIcon {...getIconProps()}>{}</MenuIcon>
<MenuIcon {...getIconProps({ size: 'xs' })} />
<MenuIcon {...getIconProps({ size: 's' })} />
<MenuIcon {...getIconProps({ size: 'm' })} />
<MenuIcon {...getIconProps({ size: 'l' })} />`}</CodeBlock>
  )
}

export function IconSizesFullPreview() {
  return (
    <CodeBlock>{`import { MenuIcon } from '@pluralsight/icons'
import { getIconProps } from '@pluralsight/headless-styles'

export default function IconsSizes() {
  return (
    <div>
      <MenuIcon {...getIconProps()} />
      <MenuIcon {...getIconProps({ size: 'xs' })} />
      <MenuIcon {...getIconProps({ size: 's' })} />
      <MenuIcon {...getIconProps({ size: 'm' })} />
      <MenuIcon {...getIconProps({ size: 'l' })} />
    </div>
  );
}`}</CodeBlock>
  )
}
