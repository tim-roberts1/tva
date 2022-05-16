import { getJSIconProps } from '../../src'

describe('icon JS', () => {
  const baseA11yProps = {
    'aria-hidden': 'false',
    role: 'img',
  }

  test('should return a distinct height and width difference based on the size', () => {
    const mIconProps = getJSIconProps()
    const xsIconProps = getJSIconProps({ size: 'xs' })
    expect(mIconProps.styles.height).toEqual('1.5rem')
    expect(mIconProps.styles.width).toEqual('1.5rem')
    expect(xsIconProps.styles.height).toEqual('1rem')
    expect(xsIconProps.styles.width).toEqual('1rem')
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
