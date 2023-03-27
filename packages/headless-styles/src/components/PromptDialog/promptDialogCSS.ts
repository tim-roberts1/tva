import { createClassNameProp } from '../../utils/helpers'
import { createDialogIconProps } from '../shared/defaultOptions'
import {
  getDefaultPromptDialogOptions,
  createPromptDialogProps,
} from './shared'
import styles from './promptDialogCSS.module.css'
import type { PromptDialogOptions } from './types'

const PROMPT_DIALOG = 'ps-prompt-dialog'

export function getPromptDialogProps(options?: PromptDialogOptions) {
  const defaultOptions = getDefaultPromptDialogOptions(options)
  const props = createPromptDialogProps(defaultOptions)
  const iconProps = createDialogIconProps(defaultOptions, {
    iconWrapper: {
      ...createClassNameProp(
        `${PROMPT_DIALOG}-icon`,
        styles.promptDialogTitleIcon
      ),
    },
  })

  return {
    ...props,
    ...iconProps,
    body: {
      ...props.body,
      ...createClassNameProp(`${PROMPT_DIALOG}-body`),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-backdrop`,
        styles.promptDialogBackdrop
      ),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-btn-group`,
        styles.promptDialogBtnGroup
      ),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-cancel`,
        styles.promptDialogCancelBtn
      ),
    },
    focusGuard: {
      ...props.focusGuard,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-focus-guard`,
        styles.promptFocusGuard
      ),
    },
    section: {
      ...props.section,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-section`,
        styles.promptDialogSection
      ),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(PROMPT_DIALOG, styles.promptDialogWrapper),
    },
    header: {
      ...props.header,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-header`,
        styles.promptDialogHeader
      ),
    },
    inputWrapper: {
      ...props.inputWrapper,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-inputWrapper`,
        styles.promptInputWrapper
      ),
    },
  }
}
