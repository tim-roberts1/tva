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

  test('should return the appropriate dimensions for "xs" size', () => {
    const props = getJSIconProps({ size: 'xs' })
    expect(props.styles.height).toEqual(sizes['xs'])
    expect(props.styles.width).toEqual(sizes['xs'])
    expect(props.cssProps).toContain(`height: ${sizes['xs']}`)
    expect(props.cssProps).toContain(`width: ${sizes['xs']}`)
  })

  test('should return the appropriate dimensions for "s" size', () => {
    const props = getJSIconProps({ size: 's' })
    expect(props.styles.height).toEqual(sizes['s'])
    expect(props.styles.width).toEqual(sizes['s'])
    expect(props.cssProps).toContain(`height: ${sizes['s']}`)
    expect(props.cssProps).toContain(`width: ${sizes['s']}`)
  })

  test('should return the appropriate dimensions for "m" size', () => {
    const props = getJSIconProps({ size: 'm' })
    expect(props.styles.height).toEqual(sizes['m'])
    expect(props.styles.width).toEqual(sizes['m'])
    expect(props.cssProps).toContain(`height: ${sizes['m']}`)
    expect(props.cssProps).toContain(`width: ${sizes['m']}`)
  })

  test('should return the appropriate dimensions for "l" size', () => {
    const props = getJSIconProps({ size: 'l' })
    expect(props.styles.height).toEqual(sizes['l'])
    expect(props.styles.width).toEqual(sizes['l'])
    expect(props.cssProps).toContain(`height: ${sizes['l']}`)
    expect(props.cssProps).toContain(`width: ${sizes['l']}`)
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
