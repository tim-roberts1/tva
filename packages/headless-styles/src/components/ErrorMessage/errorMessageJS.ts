import { createJSProps } from '../../utils/helpers'
import {
  createErrorMessageProps,
  getDefaultErrorMessageOptions,
} from './shared'
import styles from './generated/errorMessageCSS'
import type { ErrorMessageOptions } from './types'

export const ChakraErrorMessage = {
  baseStyle: styles.pando_errorMessage,
}

export function getJSErrorMessageProps(options?: ErrorMessageOptions) {
  const defaultOptions = getDefaultErrorMessageOptions(options)
  const errorProps = createErrorMessageProps(defaultOptions)

  return {
    ...errorProps,
    message: {
      ...errorProps.message,
      ...createJSProps(styles.pando_errorMessage),
    },
  }
}
