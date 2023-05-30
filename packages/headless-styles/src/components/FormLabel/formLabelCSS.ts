import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultFormLabelOptions,
  getFormLabelClasses,
  getFormValue,
} from './shared'
import { FormLabelOptions } from './types'
import './formLabelCSS.scss'

const FORM_LABEL = 'pando-form-label'

export function getFormLabelProps(options?: FormLabelOptions) {
  const { value, ...defaultOptions } = getDefaultFormLabelOptions(options)
  const label = getFormValue(value, defaultOptions.required)
  const { labelClass } = getFormLabelClasses(defaultOptions.kind)

  return {
    htmlFor: defaultOptions.htmlFor,
    ...label,
    ...createClassNameProp(
      FORM_LABEL,
      labelClass,
      ...defaultOptions.classNames
    ),
  }
}
