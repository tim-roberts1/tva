import { createDialogProps } from '../shared/helpers/dialog'
import { createPandoOptions } from '../shared/defaultOptions'
import type { ButtonOptions, InputOptions } from '../../types'
import type { PromptDialogOptions } from './types'

export function getDefaultPromptDialogOptions(options?: PromptDialogOptions) {
  return {
    bodyId: options?.bodyId ?? '',
    headingId: options?.headingId ?? '',
    id: options?.id ?? '',
    inputId: options?.inputId ?? '',
    name: options?.name ?? '',
    value: options?.value ?? '',
  }
}

export function createPromptDialogProps(
  options: Required<PromptDialogOptions>
) {
  const props = createDialogProps(options)

  return {
    ...props,
    cancelBtnOptions: createPandoOptions<ButtonOptions>({
      usage: 'outline',
    }),
    submitBtnOptions: createPandoOptions<ButtonOptions>({
      sentiment: 'action',
    }),
    inputOptions: createPandoOptions<InputOptions>({
      id: options.inputId,
      name: options.name,
      placeholder: '',
      size: 'm',
      type: 'text',
      value: options.value,
    }),
    buttonGroup: {},
    cancelButton: {},
    header: {},
  }
}
