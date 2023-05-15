import { createClassNameProp } from '../../utils/helpers'
import {
  createPaginationClasses,
  createPaginationProps,
  getDefaultPaginationOptions,
} from './shared'
import type { PaginationOptions } from './types'
import './paginationCSS.scss'

const PAGINATION = 'pando-pagination'

export function getPaginationProps(options?: PaginationOptions) {
  const defaultOptions = getDefaultPaginationOptions(options)
  const props = createPaginationProps(defaultOptions)
  const classes = createPaginationClasses(defaultOptions)

  return {
    ...props,
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassNameProp(
        `${PAGINATION}-buttonGroup`,
        classes.buttonGroupClass
      ),
    },
    container: {
      ...props.container,
      ...createClassNameProp(PAGINATION, classes.containerClass),
    },
    text: {
      ...props.text,
      ...createClassNameProp(`${PAGINATION}-text`, classes.textClass),
    },
  }
}
