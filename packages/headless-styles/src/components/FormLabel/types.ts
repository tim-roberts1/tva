import type { LabelHTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'

export interface FormLabelOptions
  extends DefaultOptions,
    Required<Pick<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>> {
  kind?: LabelKind
  required?: boolean
  value: string
}

export type LabelKind = 'default' | 'hidden'
