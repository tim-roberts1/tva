import { createClassNameProp } from '../../utils/helpers'
import type { IconButtonOptions, IconOptions } from '../../types'
import { createPandoOptions } from '../shared/defaultOptions'
import {
  createAdmonitionProps,
  getDefaultAdmonitionOptions,
  getAdmonitionClasses,
} from './shared'
import type { AdmonitionOptions } from './types'
import './admonitionCSS.scss'

const ADMONITION = 'pando-admonition'

export function getAdmonitionProps(options?: AdmonitionOptions) {
  const { sentiment } = getDefaultAdmonitionOptions(options)
  const { sentimentClass, iconClass, textClass } =
    getAdmonitionClasses(sentiment)
  const props = createAdmonitionProps()

  return {
    ...props,
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassNameProp(`${ADMONITION}-icon`, iconClass),
    },
    textContainer: {
      ...props.textContainer,
      ...createClassNameProp(`${ADMONITION}-text-container`, textClass),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(ADMONITION, sentimentClass),
    },
  }
}

export function getAdmonitionHeadingProps(classNames: string[] = []) {
  return {
    ...createClassNameProp(
      `${ADMONITION}-heading`,
      'admonitionTitle',
      ...classNames
    ),
  }
}

export function getAdmonitionTextProps(classNames: string[] = []) {
  return {
    ...createClassNameProp(
      `${ADMONITION}-text`,
      'admonitionDescription',
      ...classNames
    ),
  }
}

export function getAdmonitionCloseButtonProps(classNames: string[] = []) {
  return createPandoOptions<IconButtonOptions>({
    ariaLabel: 'Close admonition',
    classNames,
    usage: 'text',
    size: 'm',
  })
}

export function getAdmonitionIconProps() {
  return createPandoOptions<IconOptions>({
    ariaHidden: true,
    size: 'm',
  })
}
