import { getJSIconProps } from '../../src'

describe('icon JS', () => {
  const baseA11yProps = {
    'aria-hidden': 'false',
    role: 'img',
  }

  test('should return a distinct height and width difference based on the size', () => {
    const xsIconProps = getJSIconProps({ size: 'xs' })
    const mIconProps = getJSIconProps({ size: 'm' })
    const sIconProps = getJSIconProps({ size: 's' })
    const lIconProps = getJSIconProps({ size: 'l' })

    expect(xsIconProps.styles.height).not.toEqual(mIconProps.styles.height)
    expect(xsIconProps.styles.width).not.toEqual(mIconProps.styles.width)
    expect(xsIconProps.styles.height).not.toEqual(sIconProps.styles.height)
    expect(xsIconProps.styles.width).not.toEqual(sIconProps.styles.width)
    expect(xsIconProps.styles.height).not.toEqual(lIconProps.styles.height)
    expect(xsIconProps.styles.width).not.toEqual(lIconProps.styles.width)

    expect(sIconProps.styles.height).not.toEqual(mIconProps.styles.height)
    expect(sIconProps.styles.width).not.toEqual(mIconProps.styles.width)
    expect(sIconProps.styles.height).not.toEqual(lIconProps.styles.height)
    expect(sIconProps.styles.width).not.toEqual(lIconProps.styles.width)

    expect(mIconProps.styles.height).not.toEqual(lIconProps.styles.height)
    expect(mIconProps.styles.width).not.toEqual(lIconProps.styles.width)
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
    expect(getJSIconProps({ ariaHidden: true }).a11yProps).toEqual(a11yProps)
  })
})
