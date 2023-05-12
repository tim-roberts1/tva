import { createJSProps } from '../../utils/helpers'
import {
  createSelectProps,
  createSelectOptionProps,
  getDefaultSelectOptionOptions,
  getDefaultSelectOptions,
  createSelectClasses,
} from './shared'
import type { SelectOptions, SelectOptionOptions } from './types'
import styles from './generated/selectCSS'

export function getJSSelectProps(options?: SelectOptions) {
  const defaultOptions = getDefaultSelectOptions(options)
  const props = createSelectProps(defaultOptions)
  const { baseSizeClass } = createSelectClasses(defaultOptions.size)

  return {
    ...props,
    fieldWrapper: {
      ...createJSProps(styles.pando_selectFieldWrapper),
    },
    iconWrapper: {
      ...createJSProps(styles.pando_selectIcon),
    },
    select: {
      a11yProps: { ...props.select },
      ...createJSProps({
        ...styles.pando_selectBase,
        ...styles[baseSizeClass],
      }),
    },
    selectWrapper: {
      ...createJSProps(styles.pando_selectWrapper),
    },
  }
}

export function getJSSelectOptionProps(options?: SelectOptionOptions) {
  const defaultOptions = getDefaultSelectOptionOptions(options)
  const props = createSelectOptionProps(defaultOptions)

  return {
    option: {
      a11yProps: { ...props },
      ...createJSProps(styles.pando_selectOption),
    },
  }
}
