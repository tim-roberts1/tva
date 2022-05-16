import { getJSIconProps } from '../../src'

describe('icon JS', () => {
  const baseA11yProps = {
    'aria-hidden': 'false',
    role: 'img',
  }

  test('should accept an "xs" size', () => {
    const xsIconProps = getJSIconProps({ size: 'xs' })

    expect(xsIconProps.cssProps).not.toHaveLength(0)
    expect(xsIconProps.styles).toBeDefined()
  })

  test('should accept an "s" size', () => {
    const sIconProps = getJSIconProps({ size: 's' })

    expect(sIconProps.cssProps).not.toHaveLength(0)
    expect(sIconProps.styles).toBeDefined()
  })

  test('should accept an "m" size', () => {
    const mIconProps = getJSIconProps({ size: 'm' })

    expect(mIconProps.cssProps).not.toHaveLength(0)
    expect(mIconProps.styles).toBeDefined()
  })

  test('should accept an "l" size', () => {
    const lIconProps = getJSIconProps({ size: 'l' })

    expect(lIconProps.cssProps).not.toHaveLength(0)
    expect(lIconProps.styles).toBeDefined()
  })

  test('should return the appropriate dimensions for "xs" size', () => {
    const xsIconProps = getJSIconProps({ size: 'xs' })
    expect(xsIconProps.styles.height).toBe('1rem')
    expect(xsIconProps.styles.width).toBe('1rem')
  })

  test('should return the appropriate dimensions for "s" size', () => {
    const sIconProps = getJSIconProps({ size: 's' })
    expect(sIconProps.styles.height).toBe('1.25rem')
    expect(sIconProps.styles.width).toBe('1.25rem')
  })

  test('should return the appropriate dimensions for "m" size', () => {
    const mIconProps = getJSIconProps({ size: 'm' })
    expect(mIconProps.styles.height).toBe('1.5rem')
    expect(mIconProps.styles.width).toBe('1.5rem')
  })

  test('should return the appropriate dimensions for "l" size', () => {
    const lIconProps = getJSIconProps({ size: 'l' })
    expect(lIconProps.styles.height).toBe('3rem')
    expect(lIconProps.styles.width).toBe('3rem')
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
