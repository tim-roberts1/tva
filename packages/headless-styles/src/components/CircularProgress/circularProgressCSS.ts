import { createClassNameProp } from '../../utils/helpers'
import {
  createCircularProgressClasses,
  getA11yCircularProgressProps,
  getBaseCircleProps,
  getDefaultCircularProgressOptions,
  getStrokeProps,
  VIEWBOX,
} from './shared'
import type { CircularProgressOptions } from './types'
import './circularProgressCSS.scss'

const CIRC_PROGRESS = 'pando-circular-progress'

export function getCircularProgressProps(options?: CircularProgressOptions) {
  const { classNames, kind, size, ...a11y } =
    getDefaultCircularProgressOptions(options)
  const a11yProps = getA11yCircularProgressProps(a11y, kind)
  const { sizeClass, kindClass } = createCircularProgressClasses(size, kind)
  const now = a11y.now
  const value = `${now}%`

  return {
    containerProps: {
      ...a11yProps,
      ...createClassNameProp(
        CIRC_PROGRESS,
        'pando_circularProgressBase',
        ...classNames
      ),
    },
    svgBoxProps: {
      ...createClassNameProp(`${CIRC_PROGRESS}-box`, sizeClass, kindClass),
      viewBox: VIEWBOX,
    },
    baseCircleProps: {
      ...getBaseCircleProps(),
      ...createClassNameProp(
        `${CIRC_PROGRESS}-base`,
        'pando_circularProgressCircle'
      ),
    },
    nowCircleProps: {
      ...getBaseCircleProps(),
      ...createClassNameProp(
        `${CIRC_PROGRESS}-now`,
        'pando_circularProgressCircleNow',
        kindClass
      ),
      ...getStrokeProps(now),
    },
    labelProps: {
      ...createClassNameProp(
        `${CIRC_PROGRESS}-label`,
        'pando_circularProgressText'
      ),
      value,
    },
  }
}
