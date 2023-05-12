import { createJSProps } from '../../utils/helpers'
import { getDefaultFormControlOptions, getFormControlClasses } from './shared'
import type { FormControlOptions } from './types'
import styles from './generated/formControlCSS'

export function getJSFormControlProps(options?: FormControlOptions) {
  const { groupType, direction, ...fieldOptions } =
    getDefaultFormControlOptions(options)
  const { directionClass } = getFormControlClasses(direction)

  return {
    a11yProps: {
      role: groupType,
      disabled: fieldOptions.disabled,
    },
    control: {
      ...createJSProps(styles[directionClass]),
    },
    fieldOptions,
  }
}
