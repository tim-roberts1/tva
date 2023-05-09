import type { AdmonitionOptions, AdmonitionSentiment } from './types'

export function getDefaultAdmonitionOptions(options?: AdmonitionOptions) {
  return {
    classNames: options?.classNames ?? [],
    sentiment: options?.sentiment ?? 'info',
  }
}

export function getAdmonitionClasses(sentiment: AdmonitionSentiment) {
  return {
    sentimentClass: `pando_${sentiment}Admonition` as const,
    iconClass: `pando_${sentiment}IconWrapper` as const,
    textClass: `pando_${sentiment}TextContainer` as const,
  }
}

export function createAdmonitionProps() {
  return {
    iconWrapper: {},
    textContainer: {},
    wrapper: {
      role: 'region',
    },
  }
}
