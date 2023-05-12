import { createClassNameProp } from '../../utils/helpers'
import {
  createInputClasses,
  createInputInvalidIconProps,
  createInputLeadingIconProps,
  createInputProps,
  getDefaultInputOptions,
} from './shared'
import type { InputOptions } from './types'
import './inputCSS.scss'

const INPUT = 'pando-input'

export function getInputProps(options?: InputOptions) {
  const defaultOptions = getDefaultInputOptions(options)
  const { baseSizeClass, kindClass } = createInputClasses(defaultOptions)
  const props = createInputProps(defaultOptions)
  const leadingIconProps = createInputLeadingIconProps(defaultOptions, {
    iconWrapper: {
      ...createClassNameProp(`${INPUT}-leading-icon`, 'pando_inputLeadingIcon'),
    },
  })
  const invalidIconProps = createInputInvalidIconProps(defaultOptions, {
    invalidIconWrapper: {
      ...createClassNameProp(`${INPUT}-icon`, 'pando_inputIcon'),
    },
  })

  return {
    ...props,
    ...invalidIconProps,
    ...leadingIconProps,
    input: {
      ...props.input,
      ...createClassNameProp(INPUT, kindClass, baseSizeClass),
    },
    inputWrapper: {
      ...props.inputWrapper,
      ...createClassNameProp(`${INPUT}-wrapper`, 'pando_inputWrapper'),
    },
  }
}
