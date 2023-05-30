import type { FormLabelOptions, LabelKind } from './types'

export function getFormLabelClasses(kind: LabelKind) {
  return {
    labelClass: `pando_${kind}FormLabel` as const,
  }
}

export function getDefaultFormLabelOptions(options?: FormLabelOptions) {
  return {
    classNames: options?.classNames ?? [],
    htmlFor: options?.htmlFor ?? '',
    kind: options?.kind ?? 'default',
    required: options?.required ?? false,
    value: options?.value ?? 'Form label',
  }
}

export function getFormValue(
  value: FormLabelOptions['value'],
  required: FormLabelOptions['required']
) {
  let label = value

  if (required) {
    label = `${value} (required)`
  }

  return {
    value: label,
  }
}
