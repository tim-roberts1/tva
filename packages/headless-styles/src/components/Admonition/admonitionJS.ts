import { createJSProps } from '../../utils/helpers'
import {
  createAdmonitionProps,
  getAdmonitionClasses,
  getDefaultAdmonitionOptions,
} from './shared'
import styles from './generated/admonitionCSS'
import type { AdmonitionOptions } from './types'

export function getJSAdmonitionProps(options?: AdmonitionOptions) {
  const defaultOptions = getDefaultAdmonitionOptions(options)
  const props = createAdmonitionProps()
  const { sentimentClass, iconClass, textClass } = getAdmonitionClasses(
    defaultOptions.sentiment
  )

  return {
    ...props,
    description: {
      ...createJSProps(styles.admonitionDescription),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createJSProps(styles[iconClass]),
    },
    textContainer: {
      ...props.textContainer,
      ...createJSProps(styles[textClass]),
    },
    title: {
      ...createJSProps(styles.admonitionTitle),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(styles[sentimentClass]),
    },
  }
}
