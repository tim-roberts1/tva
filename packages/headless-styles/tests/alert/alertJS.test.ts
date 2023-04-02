import {
  getAlertBackdropJSProps,
  getAlertBodyJSProps,
  getAlertCancelButtonJSOptions,
  getAlertConfirmButtonJSOptions,
  getAlertFooterJSProps,
  getAlertHeaderJSProps,
  getAlertHeadingJSProps,
  getAlertInputJSProps,
  getAlertLabelJSProps,
  getAlertJSProps,
} from '../../src/index'
import styles from '../../src/components/Alert/generated/alertCSS.module'
import animationStyles from '../../src/components/shared/generated/keyframes.module'

describe('Alert JS', () => {
  test('should return the correct props for the alert', () => {
    const props = getAlertJSProps()

    expect(props.a11yProps).toEqual({
      'aria-modal': true,
      role: 'document',
      tabIndex: -1,
    })
    expect(props.cssProps).toContain('animation-delay: 100ms')
    expect(props.styles).toMatchObject(styles.alertDialogSection)
    expect(props.keyframes).toMatchObject(
      animationStyles.keyframesFadeInAnimation
    )
  })

  test('should return the correct props for the alert backdrop', () => {
    const id = 'alert-id'
    const headingId = 'alert-header-id'
    const bodyId = 'alert-body-id'
    const props = getAlertBackdropJSProps({
      bodyId,
      headingId,
      id,
    })

    expect(props.focusGuard.a11yProps).toEqual({
      'aria-hidden': true,
      'data-focus-guard': true,
      tabIndex: 0,
    })
    expect(props.focusGuard.cssProps).toContain('overflow: hidden')
    expect(props.focusGuard.styles).toMatchObject(styles.alertFocusGuard)

    expect(props.wrapper.a11yProps).toEqual({
      'aria-describedby': bodyId,
      'aria-labelledby': headingId,
      'data-focus-lock-disabled': false,
      id: id,
      role: 'alertdialog',
      tabIndex: -1,
    })
    expect(props.wrapper.cssProps).toContain('display: flex')
    expect(props.wrapper.styles).toMatchObject(styles.alertDialogWrapper)
  })

  test('should return the correct props for the alert body', () => {
    const bodyId = 'body-id'
    const props = getAlertBodyJSProps(bodyId)

    expect(props).toMatchObject({
      a11yProps: {
        id: bodyId,
      },
    })
  })

  test('should return the correct props for the alert cancel button', () => {
    const props = getAlertCancelButtonJSOptions()

    expect(props).toMatchObject({
      btnOptions: {
        usage: 'outline',
      },
    })
  })

  test('should return the correct props for the alert confirm button', () => {
    expect(getAlertConfirmButtonJSOptions('non-destructive')).toMatchObject({
      btnOptions: {
        sentiment: 'action',
      },
    })
    expect(getAlertConfirmButtonJSOptions('destructive')).toMatchObject({
      btnOptions: {
        sentiment: 'danger',
      },
    })
  })

  test('should return the correct props for the alert header', () => {
    expect(getAlertHeaderJSProps('non-destructive').header.cssProps).toContain(
      'align-items: center'
    )
    expect(getAlertHeaderJSProps('destructive').header.styles).toMatchObject(
      styles.alertDialogHeader
    )

    expect(getAlertHeaderJSProps('destructive').iconOptions).toMatchObject({
      ariaHidden: true,
      size: 'm',
    })
    expect(
      getAlertHeaderJSProps('destructive').iconWrapper?.cssProps
    ).toContain('line-height: initial')
    expect(
      getAlertHeaderJSProps('destructive').iconWrapper?.styles
    ).toMatchObject(styles.alertDialogTitleIcon)
  })

  test('should return the correct props for the alert heading', () => {
    const id = 'heading-id'
    const props = getAlertHeadingJSProps(id)

    expect(props).toMatchObject({
      a11yProps: {
        id,
      },
    })
  })

  test('should return the correct props for the alert footer', () => {
    const props = getAlertFooterJSProps()
    expect(props.cssProps).toContain('justify-content: flex-end')
    expect(props.styles).toMatchObject(styles.alertDialogFooter)
  })

  test('should return the correct props for the alert input', () => {
    const options = {
      id: 'input-id',
      placeholder: 'input-placeholder',
      name: 'input-name',
      type: 'text' as const,
      value: 'input-value',
    }
    const props = getAlertInputJSProps(options)

    expect(props.inputOptions).toMatchObject({
      ...options,
      size: 'l',
    })
    expect(props.inputWrapper.cssProps).toContain('margin-top: 1rem')
    expect(props.inputWrapper.styles).toMatchObject(
      styles.alertDialogInputWrapper
    )
  })

  test('should return the correct props for the alert label', () => {
    const id = 'label-id'
    const props = getAlertLabelJSProps(id)

    expect(props.a11yProps).toEqual({
      htmlFor: id,
    })
    expect(props.cssProps).toContain('margin-top: 1.2rem')
    expect(props.styles).toMatchObject(styles.alertDialogLabel)
  })
})
