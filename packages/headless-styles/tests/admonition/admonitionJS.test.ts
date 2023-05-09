import { getJSAdmonitionProps } from '../../src'
import styles from '../../src/components/Admonition/generated/admonitionCSS'

describe('Admonition JS', () => {
  const result = {
    inlineBlock: 'display: inline-block',
    flex: 'display: flex',
  }

  test('should allow no props to be passed in', () => {
    const props = getJSAdmonitionProps()
    expect(props.wrapper.cssProps).toContain('align-items: flex-start')
    expect(props.wrapper.styles).toMatchObject(styles.pando_infoAdmonition)
    expect(props.wrapper.a11yProps).toMatchObject({
      role: 'region',
    })
  })

  test('should accept a info sentiment option', () => {
    const props = getJSAdmonitionProps({ sentiment: 'info' })

    expect(props.iconWrapper.cssProps).toContain(result.inlineBlock)
    expect(props.iconWrapper.styles).toMatchObject(styles.pando_infoIconWrapper)

    expect(props.textContainer.cssProps).toContain(result.flex)
    expect(props.textContainer.styles).toMatchObject(
      styles.pando_infoTextContainer
    )

    expect(props.wrapper.cssProps).toContain(
      'background-color: var(--ps-info-border)'
    )
    expect(props.wrapper.styles).toMatchObject(styles.pando_infoAdmonition)
  })

  test('should accept a success sentiment option', () => {
    const props = getJSAdmonitionProps({ sentiment: 'success' })

    expect(props.iconWrapper.cssProps).toContain(result.inlineBlock)
    expect(props.iconWrapper.styles).toMatchObject(
      styles.pando_successIconWrapper
    )

    expect(props.textContainer.cssProps).toContain(result.flex)
    expect(props.textContainer.styles).toMatchObject(
      styles.pando_successTextContainer
    )

    expect(props.wrapper.cssProps).toContain(
      'background-color: var(--ps-success-border)'
    )
    expect(props.wrapper.styles).toMatchObject(styles.pando_successAdmonition)
  })

  test('should accept a warning sentiment option', () => {
    const props = getJSAdmonitionProps({ sentiment: 'warning' })

    expect(props.iconWrapper.cssProps).toContain(result.inlineBlock)
    expect(props.iconWrapper.styles).toMatchObject(
      styles.pando_warningIconWrapper
    )

    expect(props.textContainer.cssProps).toContain(result.flex)
    expect(props.textContainer.styles).toMatchObject(
      styles.pando_warningTextContainer
    )

    expect(props.wrapper.cssProps).toContain(
      'background-color: var(--ps-warning-border)'
    )
    expect(props.wrapper.styles).toMatchObject(styles.pando_warningAdmonition)
  })

  test('should accept a danger sentiment option', () => {
    const props = getJSAdmonitionProps({ sentiment: 'danger' })

    expect(props.iconWrapper.cssProps).toContain(result.inlineBlock)
    expect(props.iconWrapper.styles).toMatchObject(
      styles.pando_dangerIconWrapper
    )

    expect(props.textContainer.cssProps).toContain(result.flex)
    expect(props.textContainer.styles).toMatchObject(
      styles.pando_dangerTextContainer
    )

    expect(props.wrapper.cssProps).toContain(
      'background-color: var(--ps-danger-border)'
    )
    expect(props.wrapper.styles).toMatchObject(styles.pando_dangerAdmonition)
  })
})
