import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useReducer,
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
const UPDATE_PROMPT = 'UPDATE_PROMPT'

const AlertContext = createContext(getPromptDialogProps())

function reducer(state, action) {
  if (action.type === UPDATE_PROMPT) {
    return { ...state, ...action.payload }
  }

  return state
}

function updatePropsAction(dispatch, options) {
  return dispatch({ type: UPDATE_PROMPT, payload: options })
}

function AlertProvider(props) {
  const { children, ...promptOptions } = props
  const [state, dispatch] = useReducer(
    reducer,
    getPromptDialogProps(promptOptions)
  )

  const prompt = useMemo(() => {
    return { ...state, dispatch }
  }, [state, dispatch])

  return (
    <AlertContext.Provider value={prompt}>{children}</AlertContext.Provider>
  )
}

function AlertEl(props, triggerRef) {
  const { onClose, ...promptProps } = props
  const wrapperRef = useRef(null)
  const { backdrop, focusGuard, section, wrapper, ...remainingPromptProps } =
    getPromptDialogProps(promptProps)
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
    <div {...backdrop}>
      <div {...focusGuard} />

      <div {...wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...section} ref={ref} onKeyDown={onKeyDown}>
          <AlertProvider {...remainingPromptProps}>
            {props.children}
          </AlertProvider>
        </section>
      </div>

      <div {...focusGuard} />
    </div>
  )
}

const Alert = memo(forwardRef(AlertEl))

function AlertHeader(props) {
  const prompt = useContext(AlertContext)

  return (
    <header {...prompt.header}>
      {prompt.kind === 'destructive' && (
        <span {...prompt.iconWrapper}>
          <DangerDiamondFilledIcon {...getIconProps(prompt.iconOptions)} />
        </span>
      )}
      {props.children}
    </header>
  )
}

function AlertTitle(props) {
  const { headingId } = props
  const { dispatch, heading } = useContext(AlertContext)

  useEffect(() => {
    if (headingId !== heading.id) {
      console.log({
        headingId,
        heading: heading.id,
        payload: getPromptDialogProps({ headingId }),
      })
      updatePropsAction(dispatch, getPromptDialogProps({ headingId }))
    }
  }, [headingId, heading.id, dispatch])

  return <h6 {...heading}>{props.children}</h6>
}

function AlertBody(props) {
  const { bodyId } = props
  const { dispatch, ...prompt } = useContext(AlertContext)

  useEffect(() => {
    if (bodyId) {
      updatePropsAction(dispatch, getPromptDialogProps({ bodyId }))
    }
  }, [bodyId, dispatch])

  return <div {...prompt.body}>{props.children}</div>
}

function AlertText(props) {
  return <p>{props.children}</p>
}

function AlertInput(props) {
  const { inputId, onChange, name, value } = props
  const { dispatch, ...prompt } = useContext(AlertContext)
  const invalid = prompt.inputOptions.value !== PROMPT_KEY

  useEffect(() => {
    if (value) {
      updatePropsAction(
        dispatch,
        getPromptDialogProps({ inputId, name, value })
      )
    }
  }, [inputId, dispatch, name, value])

  return (
    <div {...prompt.inputWrapper}>
      <Label htmlFor={prompt.inputOptions.id}>{props.children}</Label>
      <SingleInput
        {...prompt.inputOptions}
        invalid={invalid && Boolean(prompt.inputOptions.value)}
        onChange={onChange}
      />
    </div>
  )
}

function AlertFooter(props) {
  const { buttonGroup } = useContext(AlertContext)
  return <footer {...buttonGroup}>{props.children}</footer>
}

function AlertCancelButton(props) {
  const prompt = useContext(AlertContext)

  return (
    <button {...getButtonProps(prompt.cancelBtnOptions).button} {...props}>
      {props.children}
    </button>
  )
}

function AlertActionButton(props) {
  const prompt = useContext(AlertContext)
  const btnOptions =
    prompt.kind === 'destructive'
      ? prompt.dangerButtonOptions
      : prompt.buttonOptions

  return (
    <button {...getButtonProps(btnOptions).button} {...props}>
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
            id="non-destructive-alert"
            kind="non-destructive"
            onClose={handleCloseAlert}
            ref={triggerRef}
          >
            <AlertHeader>
              <AlertTitle headingId="non-destructiveAlert-heading">
                Non-destructive Alert
              </AlertTitle>
            </AlertHeader>
            <AlertBody bodyId="non-destructiveAlert-body">
              <AlertText>
                This action <strong>cannot be undone</strong> and will
                permanently delete all the data associated with this.
              </AlertText>
              <AlertInput
                inputId="non-destructiveAlert-input"
                onChange={handleOnChange}
                name="non-destructive-input"
                value={value}
              >
                Please type <strong>DELETE</strong> to confirm.
              </AlertInput>
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton>Confirm</AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.getElementById('root')
        )}
      {showDestructiveAlert &&
        createPortal(
          <Alert
            id="destructive-alert"
            kind="destructive"
            onClose={handleCloseDestructiveAlert}
            ref={destTriggerRef}
          >
            <AlertHeader>
              <AlertTitle headingId="destructiveAlert-heading">
                Destructive Alert
              </AlertTitle>
            </AlertHeader>
            <AlertBody bodyId="destructiveAlert-body">
              <AlertText>
                This action <strong>cannot be undone</strong> and will
                permanently delete all the data associated with this.
              </AlertText>
              <AlertInput
                inputId="destructiveAlert-input"
                onChange={handleOnChange}
                name="destructive-input"
                value={value}
              >
                Please type <strong>DELETE</strong> to confirm.
              </AlertInput>
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseDestructiveAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton>Confirm</AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.getElementById('root')
        )}
    </div>
  )
}
