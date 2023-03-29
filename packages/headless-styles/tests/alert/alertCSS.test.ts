import {
  getAlertBackdropProps,
  getAlertBodyProps,
  getAlertCancelButtonProps,
  getAlertConfirmButtonProps,
  getAlertHeaderProps,
  getAlertHeadingProps,
  getAlertFooterProps,
  getAlertInputProps,
  getAlertLabelProps,
  getAlertProps,
} from '../../src/index'

describe('Alert CSS', () => {
  test('should return the correct props for the alert backdrop', () => {
    const props = getAlertBackdropProps()

    expect(props).toEqual({
      backdrop: {
        className: 'pando-alert-backdrop alertDialogBackdrop',
      },
      focusGuard: {
        'aria-hidden': true,
        'data-focus-guard': true,
        tabIndex: 0,
        className: 'pando-alert-focus-guard alertDialogFocusGuard',
      },
      wrapper: {
        'data-focus-lock-disabled': false,
        tabIndex: -1,
        className: 'pando-alert alertDialogWrapper',
      },
    })
  })

  test('should return the correct props for the alert body', () => {
    const bodyId = 'body-id'
    const props = getAlertBodyProps(bodyId)

    expect(props).toEqual({
      id: bodyId,
      className: 'pando-alert-body',
    })
  })

  test('should return the correct props for the alert cancel button', () => {
    const props = getAlertCancelButtonProps()

    expect(props).toEqual({
      btnOptions: {
        usage: 'outline',
      },
      button: {
        className: 'pando-alert-cancel alertDialogCancelBtn',
      },
    })
  })

  test('should return the correct props for the alert confirm button', () => {
    expect(getAlertConfirmButtonProps('non-destructive')).toEqual({
      btnOptions: {
        sentiment: 'action',
      },
      button: {
        className: 'pando-alert-confirm',
      },
    })
    expect(getAlertConfirmButtonProps('destructive')).toEqual({
      btnOptions: {
        sentiment: 'danger',
      },
      button: {
        className: 'pando-alert-confirm',
      },
    })
  })

  test('should return the correct props for the alert header', () => {
    const result = {
      header: {
        className: 'pando-alert-header alertDialogHeader',
      },
    }

    expect(getAlertHeaderProps('non-destructive')).toEqual(result)
    expect(getAlertHeaderProps('destructive')).toEqual({
      ...result,
      iconOptions: {
        ariaHidden: true,
        size: 'm',
      },
      iconWrapper: {
        className: 'pando-alert-icon alertDialogTitleIcon',
      },
    })
  })

  test('should return the correct props for the alert heading', () => {
    const id = 'heading-id'
    const props = getAlertHeadingProps(id)

    expect(props).toEqual({
      id: id,
      className: 'pando-alert-heading',
    })
  })

  test('should return the correct props for the alert footer', () => {
    const props = getAlertFooterProps()

    expect(props).toEqual({
      className: 'pando-alert-footer alertDialogFooter',
    })
  })

  test('should return the correct props for the alert input', () => {
    const options = {
      id: 'input-id',
      placeholder: 'input-placeholder',
      name: 'input-name',
      type: 'text' as const,
      value: 'input-value',
    }
    const props = getAlertInputProps(options)

    expect(props).toEqual({
      inputOptions: {
        ...options,
        size: 'l',
      },
      inputWrapper: {
        className: 'pando-alert-input-wrapper alertDialogInputWrapper',
      },
    })
  })

  test('should return the correct props for the alert label', () => {
    const id = 'label-id'
    const props = getAlertLabelProps(id)

    expect(props).toEqual({
      htmlFor: id,
      className: 'pando-alert-label alertDialogLabel',
    })
  })

  test('should return the correct props for the alert', () => {
    const id = 'alert-id'
    const headingId = 'alert-header-id'
    const bodyId = 'alert-body-id'
    const props = getAlertProps({
      bodyId,
      headingId,
      id,
    })

    expect(props).toEqual({
      'aria-modal': true,
      'aria-describedby': bodyId,
      'aria-labelledby': headingId,
      className: 'pando-alert-section alertDialogSection',
      id: id,
      role: 'alertdialog',
      tabIndex: -1,
    })
  })
})
