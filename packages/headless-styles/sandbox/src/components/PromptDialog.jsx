import {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  memo,
} from 'react'
import { createPortal } from 'react-dom'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
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
  getButtonProps,
  getFormControlProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { DangerDiamondFilledIcon } from '@pluralsight/icons'
import { SingleInput } from './Input'

const CONFIRM_KEY = 'CONFIRM'
const PROMPT_KEY = 'DELETE'

function AlertBackdrop(props) {
  const { onClose } = props
  const wrapperRef = useRef(null)
  const { focusGuard, ...backdropProps } = getAlertBackdropProps()

  function handleBackdropClick(event) {
    event.stopPropagation()
    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  return (
    <div {...backdropProps.backdrop}>
      <div {...focusGuard} />
      <div
        {...backdropProps.wrapper}
        ref={wrapperRef}
        onClick={handleBackdropClick}
      >
        {props.children}
      </div>
      <div {...focusGuard} />
    </div>
  )
}

function AlertEl(props, triggerRef) {
  const { onClose, children, ...alertDialogProps } = props
  const alertProps = getAlertProps(alertDialogProps)
  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)

  useEffect(() => {
    setupFocusTrap()
  }, [setupFocusTrap])

  return (
    <AlertBackdrop onClose={onClose}>
      <section {...alertProps} ref={ref} onKeyDown={onKeyDown}>
        {children}
      </section>
    </AlertBackdrop>
  )
}

const Alert = memo(forwardRef(AlertEl))

function AlertHeader(props) {
  const headerProps = getAlertHeaderProps(props)

  return (
    <header {...headerProps.header}>
      {props.kind === 'destructive' && (
        <span {...headerProps.iconWrapper}>
          <DangerDiamondFilledIcon {...getIconProps(headerProps.iconOptions)} />
        </span>
      )}
      {props.children}
    </header>
  )
}

function AlertHeading(props) {
  const heading = getAlertHeadingProps(props.id)
  return <h4 {...heading}>{props.children}</h4>
}

function AlertBody(props) {
  const body = getAlertBodyProps(props.id)
  return <div {...body}>{props.children}</div>
}

function AlertText(props) {
  return <p>{props.children}</p>
}

function AlertLabel(props) {
  const label = getAlertLabelProps(props.htmlFor)
  return <label {...label}>{props.children}</label>
}

function AlertInput(props) {
  const { onChange, ...inputOptions } = props
  const { fieldOptions } = getFormControlProps({
    invalid: Boolean(props.value) && props.value !== props.confirmKey,
  })
  const input = getAlertInputProps({
    ...fieldOptions,
    ...inputOptions,
  })

  return (
    <div {...input.inputWrapper}>
      <SingleInput {...input.inputOptions} onChange={onChange} />
    </div>
  )
}

function AlertFooter(props) {
  const footer = getAlertFooterProps()
  return <footer {...footer}>{props.children}</footer>
}

function AlertCancelButton(props) {
  const btnProps = getAlertCancelButtonProps()

  return (
    <span {...btnProps.button}>
      <button {...getButtonProps(btnProps.btnOptions).button} {...props}>
        {props.children}
      </button>
    </span>
  )
}

function AlertActionButton(props) {
  const btnProps = getAlertConfirmButtonProps(props)

  return (
    <button {...getButtonProps(btnProps.btnOptions).button} {...props}>
      {props.children}
    </button>
  )
}

export default function PromptDialog() {
  const triggerRef = useRef(null)
  const destTriggerRef = useRef(null)
  const [value, setValue] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [showDestructiveAlert, setShowDestructiveAlert] = useState(false)

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false)
  }, [])

  function handleShowAlert() {
    setShowAlert(true)
  }

  const handleCloseDestructiveAlert = useCallback(() => {
    setShowDestructiveAlert(false)
  }, [])

  function handleShowDestructiveAlert() {
    setShowDestructiveAlert(true)
  }

  function handleOnChange(event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <h2>Prompt Dialog</h2>

      <h3>CSS API</h3>
      <div className="App-container">
        <button
          {...getButtonProps().button}
          onClick={handleShowAlert}
          ref={triggerRef}
        >
          non-destructive
        </button>
        <button
          {...getButtonProps({ sentiment: 'danger' }).button}
          onClick={handleShowDestructiveAlert}
          ref={destTriggerRef}
        >
          destructive
        </button>
      </div>

      {showAlert &&
        createPortal(
          <Alert
            bodyId="non-destructiveAlert-body"
            headingId="non-destructiveAlert-heading"
            id="non-destructive-alert"
            onClose={handleCloseAlert}
            ref={triggerRef}
          >
            <AlertHeader kind="non-destructive">
              <AlertHeading id="non-destructiveAlert-heading">
                Non-destructive Alert
              </AlertHeading>
            </AlertHeader>
            <AlertBody id="non-destructiveAlert-body">
              <AlertText>
                This action <strong>cannot be undone</strong> and will
                permanently delete all the data associated with this.
              </AlertText>
              <AlertLabel htmlFor="non-destructiveAlert-input">
                Please type <strong>CONFIRM</strong> to continue.
              </AlertLabel>
              <AlertInput
                confirmKey={CONFIRM_KEY}
                id="non-destructiveAlert-input"
                name="non-destructive-input"
                onChange={handleOnChange}
                value={value}
              >
                Please type <strong>DELETE</strong> to confirm.
              </AlertInput>
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton kind="non-destructive">
                Confirm
              </AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.getElementById('root')
        )}
      {showDestructiveAlert &&
        createPortal(
          <Alert
            bodyId="destructiveAlert-body"
            headingId="destructiveAlert-header"
            id="destructive-alert"
            onClose={handleCloseDestructiveAlert}
            ref={destTriggerRef}
          >
            <AlertHeader kind="destructive">
              <AlertHeading headingId="destructiveAlert-heading">
                Destructive Alert
              </AlertHeading>
            </AlertHeader>
            <AlertBody bodyId="destructiveAlert-body">
              <AlertText>
                This action <strong>cannot be undone</strong> and will
                permanently delete all the data associated with this.
              </AlertText>
              <AlertLabel htmlFor="destructiveAlert-input">
                Please type <strong>DELETE</strong> to confirm.
              </AlertLabel>
              <AlertInput
                confirmKey={PROMPT_KEY}
                id="destructiveAlert-input"
                name="destructive-input"
                onChange={handleOnChange}
                value={value}
              >
                Please type <strong>DELETE</strong> to confirm.
              </AlertInput>
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseDestructiveAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton kind="destructive">Confirm</AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.getElementById('root')
        )}
    </div>
  )
}
