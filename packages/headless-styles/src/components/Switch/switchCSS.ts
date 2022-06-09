import { createClassProp } from '../../utils/helpers'
import { getA11yProps, getDefaultSwitchOptions } from './shared'
import styles from './switchCSS.module.css'
import { SwitchOptions } from './types'

const SWITCH = 'ps-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { size, tech } = defaultOptions
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const trackClass = `${size}Track`

  return {
    input: {
      ...inputProps,
      ...createClassProp(tech, {
        svelteClass: `${SWITCH}-input input`,
        defaultClass: `${SWITCH}-input ${styles.input}`,
      }),
    },
    switchContainer: createClassProp(tech, {
      svelteClass: `${SWITCH}-container container`,
      defaultClass: `${SWITCH}-container ${styles.container}`,
    }),
    switchTrack: {
      ...hidden,
      ...dataProps,
      ...createClassProp(tech, {
        svelteClass: `${SWITCH}-track track ${trackClass}`,
        defaultClass: `${SWITCH}-track ${styles[trackClass]}`,
      }),
    },
    switchThumb: {
      ...dataProps,
      ...createClassProp(tech, {
        svelteClass: `${SWITCH}-thumb thumb`,
        defaultClass: `${SWITCH}-thumb ${styles.thumb}`,
      }),
    },
  }
}
