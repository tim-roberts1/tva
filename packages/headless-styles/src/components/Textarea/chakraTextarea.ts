import styles from './generated/textareaCSS.module'

const baseTextareaStyles = styles.initialTextarea
const chakraTextareaStyle = {
  ...baseTextareaStyles,
  border: `${baseTextareaStyles.borderWidth} ${baseTextareaStyles.borderStyle} ${baseTextareaStyles.borderColor}`,
  _active: {
    ...baseTextareaStyles['&:focus'],
  },
  _hover: {
    ...baseTextareaStyles["&:not(:disabled, [dataReadonly='true']):hover"],
  },
  _focus: {
    ...baseTextareaStyles['&:focus'],
    borderColor: 'none',
  },
  _disabled: {
    ...styles.textareaBase['&:disabled'],
    _hover: {
      ...styles.textareaBase['&:disabled'],
    },
  },
  _invalid: {
    ...styles.textareaBase["&[dataInvalid='true']"],
  },
  _readOnly: {
    ...styles.textareaBase["&:is(:disabled, [dataReadonly='true'])"],
    _hover: {
      ...styles.textareaBase["&:is(:disabled, [dataReadonly='true'])"],
    },
  },
}

const textAreaSize = {
  ...baseTextareaStyles,
}

export const ChakraTextarea = {
  baseStyle: baseTextareaStyles,
  sizes: {
    xs: textAreaSize,
    sm: textAreaSize,
    m: textAreaSize,
    lg: textAreaSize,
  },
  variants: {
    outline: chakraTextareaStyle,
    filled: chakraTextareaStyle,
    flushed: chakraTextareaStyle,
    unstyled: chakraTextareaStyle,
  },
}
