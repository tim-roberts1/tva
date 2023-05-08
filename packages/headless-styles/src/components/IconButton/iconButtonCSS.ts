import { createClassNameProp } from '../../utils/helpers'
import {
  createIconButtonProps,
  getDefaultIconButtonOptions,
  getIconButtonClasses,
} from './shared'
import type { IconButtonOptions } from './types'
import './iconButtonCSS.scss'

const ICON_BTN = 'pando-icon-btn'

export function getIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const props = createIconButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getIconButtonClasses(defaultOptions)

  return {
    ...props,
    button: {
      ...props.button,
      ...createClassNameProp(
        ICON_BTN,
        usageClass,
        sentimentClass,
        sizeClass,
        ...defaultOptions.classNames
      ),
    },
  }
}
