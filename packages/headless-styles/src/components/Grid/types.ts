import type { HTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'

export interface GridOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  areas?: GridAreas
  cols?: string
  gap?: GridGap<string>
  rows?: string
}

export interface GridItemOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  area?: string
  col?: string
  row?: string
}

// types

export type GridAreas = string[]
export type PandoGridGapOptions = '6' | '8' | '12' | '16' | '32'
export type GridGap<K extends string> = K | PandoGridGapOptions
