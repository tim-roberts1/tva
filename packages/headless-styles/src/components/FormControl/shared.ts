import type { CheckboxDirection } from '../types'
import type { FormControlOptions } from './types'

export function getFormControlClasses(direction: CheckboxDirection) {
  return {
    directionClass: `${direction}FormControl` as const,
  }
}

export function getDefaultFormControlOptions(options?: FormControlOptions) {
  return {
    direction: options?.direction ?? 'row',
    disabled: options?.disabled ?? false,
    groupType: options?.groupType ?? 'group',
    invalid: options?.invalid ?? false,
    readOnly: options?.readOnly ?? false,
    required: options?.required ?? false,
  }
}
