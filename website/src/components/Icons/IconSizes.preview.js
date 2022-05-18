import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IconSizesPreview() {
  return (
    <CodeBlock>{`<StarIcon {...getIconProps({ size: 's' })} />
<StarIcon {...getIconProps({ size: 'm' })} />
<StarIcon {...getIconProps({ size: 'l' })} />`}</CodeBlock>
  )
}

export function IconSizesFullPreview() {
  return (
    <CodeBlock>{`import { StarIcon } from '@pluralsight/icons'
import { getIconProps } from '@pluralsight/headless-styles'

export default function IconsSizes() {
  return (
    <div>
      <StarIcon {...getIconProps({ size: 's' })} />
      <StarIcon {...getIconProps({ size: 'm' })} />
      <StarIcon {...getIconProps({ size: 'l' })} />
    </div>
  );
}`}</CodeBlock>
  )
}
