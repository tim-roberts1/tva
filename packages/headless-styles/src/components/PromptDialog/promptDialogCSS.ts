import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultPromptDialogOptions,
  createPromptDialogProps,
} from './shared'
import styles from './promptDialogCSS.module.css'
import type { PromptDialogOptions } from './types'

const PROMPT_DIALOG = 'ps-prompt-dialog'

export function getConfirmDialogProps(options?: PromptDialogOptions) {
  const defaultOptions = getDefaultPromptDialogOptions(options)
  const props = createPromptDialogProps(defaultOptions)

  return {
    ...props,
    body: {
      ...props.body,
      ...createClassNameProp(`${PROMPT_DIALOG}-body`),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-backdrop`,
        styles.confirmDialogBackdrop
      ),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-btn-group`,
        styles.confirmDialogBtnGroup
      ),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-cancel`,
        styles.confirmDialogCancelBtn
      ),
    },
    focusGuard: {
      ...props.focusGuard,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-focus-guard`,
        styles.confirmFocusGuard
      ),
    },
    section: {
      ...props.section,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-section`,
        styles.confirmDialogSection
      ),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(PROMPT_DIALOG, styles.confirmDialogWrapper),
    },
    header: {
      ...props.header,
      ...createClassNameProp(
        `${PROMPT_DIALOG}-header`,
        styles.confirmDialogHeader
      ),
    },
  }
}
