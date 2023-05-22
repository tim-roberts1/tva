import type { GridOptions, GridItemOptions } from './types'

function getFormattedAreas(areas: string[]) {
  return areas.reduce((prev, current) => {
    return `"${prev}"
    "${current}"`
  }, '')
}

// public

export const gapMap = {
  6: 0.375,
  8: 0.5,
  12: 0.75,
  16: 1,
  32: 2,
}

export function getDefaultGridOptions(options?: GridOptions) {
  return {
    areas: options?.areas ?? [],
    classNames: options?.classNames ?? [],
    cols: options?.cols ?? '12',
    gap: options?.gap ?? (16 as const),
    rows: options?.rows ?? '1',
    style: options?.style ?? {},
  }
}

export function getDefaultGridItemOptions(options?: GridItemOptions) {
  return {
    area: options?.area ?? '',
    classNames: options?.classNames ?? [],
    colSpan: options?.colSpan ?? '1 / span 12',
    rowSpan: options?.rowSpan ?? '',
    style: options?.style ?? {},
  }
}

export function createGridProps(options: Required<GridOptions>) {
  const { areas, cols, rows } = options
  const gap = gapMap[options.gap as keyof typeof gapMap] ?? 0

  return {
    style: {
      ...options.style,
      gridTemplateAreas: getFormattedAreas(areas),
      gridTemplateRows: rows ?? `repeat(${rows}, 1fr)`,
      gridTemplateColumns: `${cols} 1fr`,
      gap: `${gap}rem`,
    },
  }
}

export function createGridItemProps(options: Required<GridItemOptions>) {
  const { colSpan, rowSpan } = options
  return {
    style: {
      ...options.style,
      gridArea: options.area,
      gridColumn: colSpan,
      gridRow: rowSpan,
    },
  }
}
