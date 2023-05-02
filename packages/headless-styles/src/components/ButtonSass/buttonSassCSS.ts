import { createClassNameProp } from '../../utils/helpers'
import { createPandoOptions } from '../shared/defaultOptions'
import {
  getDefaultButtonOptions,
  getButtonClasses,
  getIconBtnSize,
} from './shared'
import type { IconOptions } from '../Icon/types'
import type { ButtonOptions, ButtonSize } from './types'
import './buttonSassCSS.scss'

const BTN = 'pando-btn'

export function getButtonSassProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultButtonOptions(options)
  const { sentimentClass, sizeClass, usageClass } =
    getButtonClasses(defaultOptions)

  return {
    disabled: defaultOptions.disabled,
    ...createClassNameProp(
      BTN,
      usageClass,
      sentimentClass,
      sizeClass,
      ...defaultOptions.classNames
    ),
  }
}

export function getButtonIconOptions(size: ButtonSize = 'l') {
  return createPandoOptions<IconOptions>({
    ariaHidden: true,
    size: getIconBtnSize(size),
  })
}
