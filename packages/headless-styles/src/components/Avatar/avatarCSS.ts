import { createClassNameProp } from '../../utils/helpers'
import {
  createAvatarSelectorClasses,
  getDefaultAvatarOptions,
  createAvatarIconOptions,
  createAvatarLabalProps,
} from './shared'
import type {
  AvatarImageOptions,
  AvatarLabelOptions,
  AvatarOptions,
  AvatarSize,
} from './types'
import './avatarCSS.scss'

const AVATAR = 'pando-avatar'

export function getAvatarProps(options?: AvatarOptions) {
  const defaultOptions = getDefaultAvatarOptions(options)
  const { sentimentClass, sizeClass } = createAvatarSelectorClasses(
    defaultOptions.sentiment,
    defaultOptions.size
  )

  return {
    ...createClassNameProp(
      AVATAR,
      sentimentClass,
      sizeClass,
      ...defaultOptions.classNames
    ),
  }
}

export function getAvatarImageProps(options: AvatarImageOptions) {
  return {
    ...createClassNameProp(
      `${AVATAR}-image`,
      'pando_avatarImage',
      ...(options.classNames ?? [])
    ),
    alt: options.alt ?? 'user avatar',
    src: options.src ?? '',
  }
}

export function getAvatarLabelProps(options: AvatarLabelOptions) {
  const props = createAvatarLabalProps(options)
  const { labelClass } = createAvatarSelectorClasses(
    'default',
    options.size ?? 'm'
  )

  return {
    ...props,
    ...createClassNameProp(
      `${AVATAR}-label`,
      'pando_avatarLabel',
      labelClass,
      ...(options.classNames ?? [])
    ),
  }
}

export function getAvatarIconOptions(size: AvatarSize) {
  return createAvatarIconOptions(size)
}
