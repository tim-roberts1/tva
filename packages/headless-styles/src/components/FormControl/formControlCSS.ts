import { createClassNameProp } from '../../utils/helpers'
import { getDefaultFormControlOptions, getFormControlClasses } from './shared'
import type { FormControlOptions } from './types'
import './formControlCSS.scss'

const FORM_CONTROL = 'pando-form-control'

export function getFormControlProps(options?: FormControlOptions) {
  const { groupType, direction, ...fieldOptions } =
    getDefaultFormControlOptions(options)
  const { directionClass } = getFormControlClasses(direction)
  const role = {
    role: groupType,
  }

  return {
    control: {
      ...role,
      disabled: fieldOptions.disabled,
      ...createClassNameProp(FORM_CONTROL, directionClass),
    },
    fieldOptions,
  }
}
