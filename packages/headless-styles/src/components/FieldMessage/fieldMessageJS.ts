import { createJSProps } from '../../utils/helpers'
import {
  createFieldMessageProps,
  getDefaultFieldMessageOptions,
} from './shared'
import type { FieldMessageOptions } from './types'
import styles from './generated/fieldMessageCSS'

export const ChakraFieldMessage = {
  baseStyle: styles.pando_fieldMessage,
}

export function getJSFieldMessageProps(options?: FieldMessageOptions) {
  const defaultOptions = getDefaultFieldMessageOptions(options)
  const props = createFieldMessageProps(defaultOptions)

  return {
    message: {
      ...props,
    },
    ...createJSProps(styles.pando_fieldMessage),
  }
}
