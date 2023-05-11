import { createJSProps } from '../../utils/helpers'
import {
  createCircularProgressClasses,
  getA11yCircularProgressProps,
  getBaseCircleProps,
  getDefaultCircularProgressOptions,
  getStrokeProps,
  VIEWBOX,
} from './shared'
import type { CircularProgressOptions } from './types'
import styles from './generated/circularProgressCSS'

export function getJSCircularProgressProps(options?: CircularProgressOptions) {
  const { kind, size, ...a11y } = getDefaultCircularProgressOptions(options)
  const a11yProps = getA11yCircularProgressProps(a11y, kind)
  const { sizeClass, kindClass } = createCircularProgressClasses(size, kind)
  const now = a11y.now
  const value = `${now}%`
  const svgBoxStyles = {
    ...styles[sizeClass],
    ...styles[kindClass],
  }
  const nowStyles = {
    ...styles.pando_circularProgressCircleNow,
    ...styles[kindClass],
  }

  return {
    containerProps: {
      a11yProps,
      ...createJSProps(styles.pando_circularProgressBase),
    },
    svgBoxProps: {
      ...createJSProps(svgBoxStyles),
      keyframes: styles.keyframesSpin['@keyframes spin'],
      svgProps: {
        viewBox: VIEWBOX,
      },
    },
    baseCircleProps: {
      svgProps: getBaseCircleProps(),
      ...createJSProps(styles.pando_circularProgressCircle),
    },
    nowCircleProps: {
      keyframes: styles.keyframesLoading['@keyframes loading'],
      svgProps: {
        ...getBaseCircleProps(),
        ...getStrokeProps(now),
      },
      ...createJSProps(nowStyles),
    },
    labelProps: {
      ...createJSProps(styles.pando_circularProgressText),
      value,
    },
  }
}
