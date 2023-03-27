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
  getButtonProps,
  getIconProps,
  getPromptDialogProps,
} from '@pluralsight/headless-styles'
import { DangerDiamondFilledIcon } from '@pluralsight/icons'
import { Label } from './FormLabel'
import { SingleInput } from './Input'

const PROMPT_KEY = 'DELETE'

function PromptAlert(props, triggerRef) {
  const { onClose, onChange, ...promptProps } = props
  const wrapperRef = useRef(null)
  const prompt = getPromptDialogProps(promptProps)
  const isDestructive = promptProps.kind === 'destructive'
  const invalid = prompt.inputOptions.value !== PROMPT_KEY
  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)

  function handleBackdropClick(event) {
    event.stopPropagation()
    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  useEffect(() => {
    setupFocusTrap()
  }, [setupFocusTrap])

  return (
    <div {...prompt.backdrop}>
      <div {...prompt.focusGuard} />

      <div {...prompt.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...prompt.section} ref={ref} onKeyDown={onKeyDown}>
          <header {...prompt.header}>
            {isDestructive && (
              <span {...prompt.iconWrapper}>
                <DangerDiamondFilledIcon
                  {...getIconProps(prompt.iconOptions)}
                />
              </span>
            )}
            <h6 {...prompt.heading}>Delete Repo?</h6>
          </header>

          <div {...prompt.body}>
            <p>
              This action <strong>cannot be undone</strong> and will permanently
              delete all the data associated with this.
            </p>

            <div {...prompt.inputWrapper}>
              <Label htmlFor={prompt.inputOptions.id}>
                Please type DELETE to confirm.
              </Label>
              <SingleInput
                {...prompt.inputOptions}
                invalid={invalid && Boolean(prompt.inputOptions.value)}
                onChange={onChange}
              />
            </div>
          </div>

          <footer {...prompt.buttonGroup}>
            <button
              {...getButtonProps(prompt.cancelBtnOptions).button}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              {...getButtonProps(prompt.agreeBtnOptions).button}
              disabled={invalid}
            >
              Delete
            </button>
          </footer>
        </section>
      </div>

      <div {...confirm.focusGuard} />
    </div>
  )
}

const PromptDialogEl = memo(forwardRef(PromptAlert))

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
          <PromptDialogEl
            headingId="normalAlert-header"
            bodyId="normalAlert-body"
            id="normalAlert"
            inputId="normalAlert-input"
            name="normalAlert"
            onClose={handleCloseAlert}
            onChange={handleOnChange}
            ref={triggerRef}
            value={value}
          />,
          document.getElementById('root')
        )}
      {showDestructiveAlert &&
        createPortal(
          <PromptDialogEl
            headingId="destructiveAlert-header"
            bodyId="destructiveAlert-body"
            id="destructiveAlert"
            inputId="destructiveAlert-input"
            kind="destructive"
            name="destructiveAlert"
            onClose={handleCloseDestructiveAlert}
            onChange={handleOnChange}
            ref={destTriggerRef}
            value={value}
          />,
          document.getElementById('root')
        )}
    </div>
  )
}
