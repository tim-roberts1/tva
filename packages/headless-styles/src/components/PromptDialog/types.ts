import type { ConfirmDialogOptions } from '../../types'

export interface PromptDialogOptions extends ConfirmDialogOptions {
  inputId?: string
  name?: string
  value?: string
}
