import { getJSGridProps, getJSGridItemProps } from '../../src'

describe('Grid JS', () => {
  describe('getJSGridProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSGridProps().cssProps).toContain('display: grid')
      expect(getJSGridProps().styles.display).toEqual('grid')
    })

    test('should accept a cols option', () => {
      expect(getJSGridProps({ cols: '12' }).cssProps).toContain(
        'grid-template-columns: 12 1fr'
      )
      expect(getJSGridProps({ cols: '12' }).styles.gridTemplateColumns).toEqual(
        '12 1fr'
      )
    })
  })

  describe('getJSGridItemProps', () => {
    test('should allow no props to be passed in', () => {
      expect(getJSGridItemProps().cssProps).toContain(
        'grid-column: 1 / span 12'
      )
      expect(getJSGridItemProps().styles.gridColumn).toEqual('1 / span 12')
      expect(getJSGridItemProps().cssProps).toContain('min-width: 0')
      expect(getJSGridItemProps().styles.minWidth).toEqual('0')
    })

    test('should accept a colSpan option', () => {
      const colSpan = '3 / span 8'

      expect(getJSGridItemProps({ colSpan }).cssProps).toContain(
        'grid-column: 3 / span 8'
      )
      expect(getJSGridItemProps({ colSpan }).styles.gridColumn).toEqual(
        '3 / span 8'
      )
      expect(getJSGridItemProps({ colSpan }).cssProps).toContain('min-width: 0')
      expect(getJSGridItemProps({ colSpan }).styles.minWidth).toEqual('0')
    })
  })
})
