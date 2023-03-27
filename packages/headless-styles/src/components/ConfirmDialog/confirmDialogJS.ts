import { createJSProps } from '../../utils/helpers'
import {
  createConfirmDialogIconProps,
  createConfirmDialogProps,
  getDefaultConfirmDialogOptions,
} from './shared'
import type { ConfirmDialogOptions } from './types'
import styles from './generated/confirmDialogCSS.module'
import animationStyles from '../shared/generated/keyframes.module'

export function getJSConfirmDialogProps(options?: ConfirmDialogOptions) {
  const defaultOptions = getDefaultConfirmDialogOptions(options)
  const props = createConfirmDialogProps(defaultOptions)
  const iconProps = createConfirmDialogIconProps(defaultOptions)

  return {
    ...props,
    ...iconProps,
    iconWrapper: {
      ...iconProps.iconWrapper,
      ...createJSProps(styles.confirmDialogTitleIcon),
    },
    header: {
      ...props.header,
      ...createJSProps(styles.confirmDialogHeader),
    },
    heading: {
      a11yProps: {
        ...props.heading,
      },
    },
    body: {
      a11yProps: {
        ...props.body,
      },
    },
    backdrop: {
      ...props.backdrop,
      ...createJSProps(styles.confirmDialogBackdrop),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createJSProps(styles.confirmDialogBtnGroup),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createJSProps(styles.confirmDialogCancelBtn),
    },
    focusGuard: {
      a11yProps: {
        ...props.focusGuard,
      },
      ...createJSProps(styles.confirmFocusGuard),
    },
    section: {
      a11yProps: {
        ...props.section,
      },
      keyframes: {
        ...createJSProps(animationStyles.keyframesFadeInAnimation),
      },
      ...createJSProps(styles.confirmDialogSection),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(styles.confirmDialogWrapper),
    },
  }
}
