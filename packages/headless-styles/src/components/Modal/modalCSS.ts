import { createClassNameProp } from '../../utils/helpers'
import { getDefaultModalOptions, createModalProps } from './shared'
import styles from './modalCSS.module.css'
import type { ModalOptions } from './types'

const MODAL = 'ps-modal'

export function getModalProps(options?: ModalOptions) {
  const defaultOptions = getDefaultModalOptions(options)
  const props = createModalProps(defaultOptions)

  return {
    ...props,
    heading: {
      ...props.heading,
      ...createClassNameProp(`${MODAL}-heading`, styles.modalHeader),
    },
    body: {
      ...props.body,
      ...createClassNameProp(`${MODAL}-body`, styles.modalBody),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassNameProp(`${MODAL}-backdrop`, styles.modalBackdrop),
    },
    buttonWrapper: {
      ...props.buttonWrapper,
      ...createClassNameProp(`${MODAL}-btn-wrapper`, styles.modalButtonWrapper),
    },
    focusGuard: {
      ...props.focusGuard,
      ...createClassNameProp(`${MODAL}-focus-guard`, styles.modalFocusGuard),
    },
    section: {
      ...props.section,
      ...createClassNameProp(`${MODAL}-section`, styles.modalSection),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(MODAL, styles.modalWrapper),
    },
  }
}
