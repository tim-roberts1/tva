import type { HTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'

export interface GridOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  areas?: string[]
  cols?: string
  gap?: GridGap
  rows?: string
}

export interface GridItemOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  area?: keyof GridOptions['areas'] | string
  colSpan?: string
  rowSpan?: string | null
}

// types

export type GridGap = 6 | 8 | 12 | 16 | 32 | number
