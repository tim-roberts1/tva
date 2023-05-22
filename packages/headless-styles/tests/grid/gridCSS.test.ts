import { getGridProps, getGridItemProps } from '../../src/index'

describe('Grid CSS', () => {
  const defaultColSpan = '1 / span 12'

  const gridProps = {
    className: 'pando-grid pando_gridContainer',
    style: {
      gridTemplateAreas: '',
      gridTemplateRows: '1',
      gridTemplateColumns: '12 1fr',
      gap: '1rem',
    },
  }
  const gridItemProps = {
    className: 'pando-grid-item pando_gridItem',
    style: {
      gridArea: '',
      gridColumn: defaultColSpan,
      gridRow: '',
    },
  }

  describe('getGridProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getGridProps()).toEqual(gridProps)
    })

    test('should update the gap when option given', () => {
      expect(getGridProps({ gap: '6' })?.style.gap).toEqual('0.375rem')
      expect(getGridProps({ gap: '8' })?.style.gap).toEqual('0.5rem')
      expect(getGridProps({ gap: '12' })?.style.gap).toEqual('0.75rem')
      expect(getGridProps({ gap: '16' })?.style.gap).toEqual('1rem')
      expect(getGridProps({ gap: '32' })?.style.gap).toEqual('2rem')
      expect(getGridProps({ gap: '0' })?.style.gap).toEqual('0rem')
    })

    test('should update the cols when option given', () => {
      expect(getGridProps({ cols: '12' })?.style.gridTemplateColumns).toEqual(
        '12 1fr'
      )
      expect(getGridProps({ cols: '8' })?.style.gridTemplateColumns).toEqual(
        '8 1fr'
      )
    })
  })

  describe('getGridItemProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getGridItemProps()).toEqual(gridItemProps)
    })

    test('should update the col when option given', () => {
      expect(
        getGridItemProps({ col: defaultColSpan })?.style.gridColumn
      ).toEqual(defaultColSpan)
      expect(getGridItemProps({ col: '3 / span 8' })?.style.gridColumn).toEqual(
        '3 / span 8'
      )
    })

    test('should update the row when option given', () => {
      expect(getGridItemProps({ row: 'auto auto' })?.style.gridRow).toEqual(
        'auto auto'
      )
    })
  })
})
