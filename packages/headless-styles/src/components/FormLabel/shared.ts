import type { FormLabelOptions, Kind } from './types'

export function getFormLabelClasses(kind: Kind) {
  return {
    labelClass: `pando_${kind}FormLabel` as const,
  }
}

export function getDefaultFormLabelOptions(options?: FormLabelOptions) {
  return {
    htmlFor: options?.htmlFor ?? '',
    kind: options?.kind ?? 'default',
    required: options?.required ?? false,
    value: options?.value ?? 'Form label',
  }
}

export function getFormValue(value: string, required: boolean) {
  let label = value

  if (required) {
    label = `${value} (required)`
  }

  return {
    value: label,
  }
}
