import { createClassProp, transformProperty } from '../../utils/helpers'
import { getDefaultFormLabelOptions, getFormValue } from './shared'
import styles from './formLabelCSS.module.css'
import { FormLabelOptions } from './types'

const FORM_LABEL = 'ps-form-label'

export function getFormLabelProps(options?: FormLabelOptions) {
  const { htmlFor, size, tech, value, ...defaultOptions } =
    getDefaultFormLabelOptions(options)
  const sizeClass = `${size}Label`
  const label = getFormValue(value, defaultOptions.required)
  const htmlForProp = transformProperty('htmlFor', tech)

  return {
    [htmlForProp]: htmlFor,
    ...label,
    ...createClassProp(tech, {
      svelteClass: `${FORM_LABEL} formLabelBase ${size}Label`,
      defaultClass: `${FORM_LABEL} ${styles[sizeClass]}`,
    }),
  }
}
