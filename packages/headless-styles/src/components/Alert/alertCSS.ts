import { getDialogA11yLabel } from '../../utils/a11yHelpers'
import { createClassNameProp } from '../../utils/helpers'
import type { ButtonOptions, InputOptions } from '../../types'
import type { ConfirmDialogKind } from '../ConfirmDialog/types'
import {
  createDialogIconProps,
  createPandoOptions,
} from '../shared/defaultOptions'
import type { DialogOptions } from '../types'
import styles from './alertCSS.module.css'

const ALERT = 'pando-alert'

export function getAlertBackdropProps() {
  return {
    backdrop: {
      ...createClassNameProp(`${ALERT}-backdrop`, styles.alertDialogBackdrop),
    },
    focusGuard: {
      'aria-hidden': true,
      'data-focus-guard': true,
      tabIndex: 0,
      ...createClassNameProp(
        `${ALERT}-focus-guard`,
        styles.alertDialogFocusGuard
      ),
    },
    wrapper: {
      'data-focus-lock-disabled': false,
      tabIndex: -1,
      ...createClassNameProp(ALERT, styles.alertDialogWrapper),
    },
  }
}

export function getAlertProps(options: DialogOptions) {
  return {
    'aria-modal': true,
    'aria-describedby': options.bodyId,
    id: options.id,
    role: 'alertdialog',
    tabIndex: -1,
    ...getDialogA11yLabel(options),
    ...createClassNameProp(`${ALERT}-section`, styles.alertDialogSection),
  }
}

export function getAlertHeaderProps(kind: ConfirmDialogKind) {
  const iconProps = createDialogIconProps(
    { kind },
    {
      iconWrapper: {
        ...createClassNameProp(`${ALERT}-icon`, styles.alertDialogTitleIcon),
      },
    }
  )

  return {
    ...iconProps,
    header: {
      ...createClassNameProp(`${ALERT}-header`, styles.alertDialogHeader),
    },
  }
}

export function getAlertHeadingProps(id: string) {
  return {
    id,
    ...createClassNameProp(`${ALERT}-heading`),
  }
}

export function getAlertBodyProps(id: string) {
  return {
    id,
    ...createClassNameProp(`${ALERT}-body`),
  }
}

export function getAlertLabelProps(htmlFor: string) {
  return {
    htmlFor,
    ...createClassNameProp(`${ALERT}-label`, styles.alertDialogLabel),
  }
}

export function getAlertInputProps(options: InputOptions) {
  return {
    inputOptions: createPandoOptions<InputOptions>({
      ...options,
      size: 'l',
      type: 'text',
    }),
    inputWrapper: {
      ...createClassNameProp(
        `${ALERT}-input-wrapper`,
        styles.alertDialogInputWrapper
      ),
    },
  }
}

export function getAlertFooterProps() {
  return {
    ...createClassNameProp(`${ALERT}-footer`, styles.alertDialogFooter),
  }
}

export function getAlertCancelButtonProps() {
  return {
    btnOptions: createPandoOptions<ButtonOptions>({
      usage: 'outline',
    }),
    button: {
      ...createClassNameProp(`${ALERT}-cancel`, styles.alertDialogCancelBtn),
    },
  }
}

export function getAlertConfirmButtonProps(kind: ConfirmDialogKind) {
  return {
    btnOptions: createPandoOptions<ButtonOptions>({
      sentiment: kind === 'destructive' ? 'danger' : 'action',
    }),
    button: {
      ...createClassNameProp(`${ALERT}-confirm`),
    },
  }
}
