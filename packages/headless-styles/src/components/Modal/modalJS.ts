import { createJSProps } from '../../utils/helpers'
import animationStyles from '../shared/generated/keyframes.module'
import { createModalProps, getDefaultModalOptions } from './shared'
import type { ModalOptions } from './types'
import styles from './generated/modalCSS.module'

export function getJSModalProps(options?: ModalOptions) {
  const defaultOptions = getDefaultModalOptions(options)
  const props = createModalProps(defaultOptions)
  return {
    ...props,
    heading: {
      a11yProps: {
        ...props.heading,
      },
      ...createJSProps(styles.modalHeader),
    },
    body: {
      a11yProps: {
        ...props.body,
      },
      ...createJSProps(styles.modalBody),
    },
    backdrop: {
      ...props.backdrop,
      ...createJSProps(styles.modalBackdrop),
    },
    buttonWrapper: {
      ...props.buttonWrapper,
      ...createJSProps(styles.modalButtonWrapper),
    },
    focusGuard: {
      a11yProps: {
        ...props.focusGuard,
      },
      ...createJSProps(styles.modalFocusGuard),
    },
    section: {
      a11yProps: {
        ...props.section,
      },
      keyframes: {
        ...createJSProps(animationStyles.keyframesFadeInAnimation),
      },
      ...createJSProps(styles.modalSection),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(styles.modalWrapper),
    },
  }
}
