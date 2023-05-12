import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultGridOptions,
  getDefaultGridItemOptions,
  createGridProps,
  createGridItemProps,
} from './shared'
import type { GridOptions, GridItemOptions } from './types'
import './gridCSS.scss'

const GRID = 'pando-grid'

export function getGridProps(options?: GridOptions) {
  const defaultOptions = getDefaultGridOptions(options)
  const props = createGridProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(
      GRID,
      'pando_gridContainer',
      ...defaultOptions.classNames
    ),
  }
}

export function getGridItemProps(options?: GridItemOptions) {
  const defaultOptions = getDefaultGridItemOptions(options)
  const props = createGridItemProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(
      `${GRID}-item`,
      'pando_gridItem',
      ...defaultOptions.classNames
    ),
  }
}
