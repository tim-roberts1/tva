import type { IconButtonOptions } from '../IconButton/types'
import type { IconSize } from '../types'
import type { AdmonitionOptions, AdmonitionSentiment } from './types'

export function getDefaultAdmonitionOptions(options?: AdmonitionOptions) {
  return {
    sentiment: options?.sentiment ?? 'info',
  }
}

export function getAdmonitionClasses(sentiment: AdmonitionSentiment) {
  return {
    sentimentClass: `${sentiment}Admonition` as const,
    iconClass: `${sentiment}IconWrapper` as const,
    textClass: `${sentiment}TextContainer` as const,
  }
}

export function createAdmonitionProps() {
  return {
    iconButtonOptions: {
      ariaLabel: 'Close admonition',
      usage: 'text',
      size: 'm',
    } as IconButtonOptions,
    iconOptions: {
      size: 'm' as IconSize,
    },
    description: {},
    iconWrapper: {},
    textContainer: {},
    title: {},
    wrapper: {
      role: 'alert',
    },
  }
}
