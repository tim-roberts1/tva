import { getJSIconProps } from '../../src'
import type { Size } from '../../src/components/Icon/types'

describe('icon JS', () => {
  const baseA11yProps = {
    'aria-hidden': 'false',
    role: 'img',
  }
  const sizes: Record<Size, string> = {
    xs: '1rem',
    s: '1.25rem',
    m: '1.5rem',
    l: '3rem',
  }

  function testDimensions(size: Size) {
    const props = getJSIconProps({ size: size })
    expect(props.styles.height).toEqual(sizes[size])
    expect(props.styles.width).toEqual(sizes[size])
    expect(props.cssProps).toContain(`height: ${sizes[size]}`)
    expect(props.cssProps).toContain(`width: ${sizes[size]}`)
  }

  test('should return the appropriate dimensions for "xs" size', () => {
    testDimensions('xs')
  })

  test('should return the appropriate dimensions for "s" size', () => {
    testDimensions('s')
  })

  test('should return the appropriate dimensions for "m" size', () => {
    testDimensions('m')
  })

  test('should return the appropriate dimensions for "l" size', () => {
    testDimensions('l')
  })

  test('should accept a label', () => {
    const customLabel = 'custom label'
    const a11yProps = {
      ...baseA11yProps,
      'aria-label': customLabel,
    }
    expect(getJSIconProps({ label: customLabel }).a11yProps).toEqual(a11yProps)
  })

  test('should accept an ariaHidden flag', () => {
    const a11yProps = {
      ...baseA11yProps,
      'aria-hidden': 'true',
    }
    expect(getJSIconProps({ ariaHidden: 'true' }).a11yProps).toEqual(a11yProps)
  })
})
