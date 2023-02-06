import type { StyleKey } from '../types'
import type { IconOptions } from '../Icon/types'
import type {
  ButtonOptions,
  ButtonSentiment,
  ButtonSize,
  ButtonUsage,
  DefaultButtonOptions,
} from './types'

function getIconBtnSize(size?: ButtonSize) {
  switch (size) {
    case 'm':
      return 's'

    case 'l':
      return 'm'

    default:
      return 'm'
  }
}

function createBtnClass<T extends string>(name: T) {
  const KEY = 'Button'

  return `${name}${KEY}`
}

// public

export function getDefaultButtonOptions(options?: ButtonOptions) {
  return {
    disabled: options?.disabled ?? false,
    icon: options?.icon ?? '',
    sentiment: options?.sentiment ?? 'action',
    usage: options?.usage ?? 'filled',
    size: options?.size ?? 'l',
  }
}

type SentimentClass = `${ButtonSentiment}Button`
type SizeClass = `${ButtonSize}Button`
type UsageClass = `${ButtonUsage}Button`

interface ButtonStyleKeys<SM> {
  sentimentClass: Extract<StyleKey<SM>, SentimentClass>
  sizeClass: Extract<StyleKey<SM>, SizeClass>
  usageClass: Extract<StyleKey<SM>, UsageClass>
}

export function getButtonClasses<StyleModule>(
  options: DefaultButtonOptions
): ButtonStyleKeys<StyleModule> {
  return {
    sentimentClass: createBtnClass<ButtonSentiment>(
      options.sentiment
    ) as Extract<StyleKey<StyleModule>, SentimentClass>,
    sizeClass: createBtnClass<ButtonSize>(options.size) as Extract<
      StyleKey<StyleModule>,
      SizeClass
    >,
    usageClass: createBtnClass<ButtonUsage>(options.usage) as Extract<
      StyleKey<StyleModule>,
      UsageClass
    >,
  }
}

export function createButtonProps(options: ButtonOptions) {
  const iconProps = options.icon && {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: '',
      size: getIconBtnSize(options.size),
    } as IconOptions,
  }

  return {
    ...iconProps,
    button: {
      disabled: options.disabled,
    },
  }
}
