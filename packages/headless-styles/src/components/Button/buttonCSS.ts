import type { ClassOptions } from '../../utils/helpers'
import { createClassProp } from '../../utils/helpers'
import { getDefaultOptions, getDefaultDangerOptions } from './shared'
import type { ButtonOptions, ButtonType, DangerOptions } from './types'
import styles from './buttonCSS.module.css'

type AllButtonOptions = ButtonOptions | DangerOptions

function createButton(options: AllButtonOptions, classes: ClassOptions) {
  const tech = options?.tech ?? ''

  return {
    ...createClassProp(tech, classes),
    type: 'button' as ButtonType,
  }
}

// Public

export function getDangerButtonProps(options?: DangerOptions) {
  const defaultOptions = getDefaultDangerOptions(options)
  const { kind, size } = defaultOptions
  const dangerKind = `${kind}Danger`

  return createButton(defaultOptions, {
    defaultClass: `ps-danger-btn ${styles[dangerKind]} ${styles[size]}`,
    svelteClass: `base ${kind}Danger ${size}`,
  })
}

export function getButtonProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultOptions(options)
  const { kind, size } = defaultOptions

  return createButton(defaultOptions, {
    defaultClass: `ps-btn ${styles[kind]} ${styles[size]}`,
    svelteClass: `base ${kind} ${size}`,
  })
}
