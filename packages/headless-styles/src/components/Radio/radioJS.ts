import { createJSProps } from '../../utils/helpers'
import { createCheckboxFieldProps } from '../shared/defaultOptions'
import { getDefaultRadioOptions } from './shared'
import styles from './generated/radioCSS.module'
import type { RadioOptions } from './types'

export function getJSRadioProps(options?: RadioOptions) {
  const defaultOptions = getDefaultRadioOptions(options)
  const props = createCheckboxFieldProps(defaultOptions)
  const controlStyles = {
    ...styles.radioControl,
    '&[dataChecked="true"]:hover': {
      ...styles.radioControl_data_checked__true['&:hover'],
    },
    '&[dataChecked="true"]::before': {
      ...styles.radioControl_data_checked__true['&::before'],
    },
    '&[dataInvalid="true"]:hover': {
      ...styles.radioControl_data_invalid__true['&:hover'],
    },
  }

  return {
    input: {
      a11yProps: {
        ...props.input,
        type: 'radio',
      },
      ...createJSProps(styles.radioInput),
    },
    radioContainer: {
      a11yProps: {
        ...props.container,
      },
      ...createJSProps(styles.radioContainer),
    },
    radioControl: {
      a11yProps: {
        ...props.control,
      },
      ...createJSProps(controlStyles),
    },
  }
}
