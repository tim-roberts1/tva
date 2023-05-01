import { convert } from './css-to-ts'

function getOutputPath(path) {
  const splitPath = path.split('/')
  splitPath.pop()
  return `${splitPath.join('/')}/generated`
}

function compileFileToTS(id, content) {
  const outputPath = getOutputPath(id)
  convert(content, { id, outputType: 'file', outputPath })
  return undefined
}

export function transformCSStoTS(regexPath, order) {
  return {
    name: 'transform-css-to-js',
    enforce: order,

    transform(_, id) {
      const fileRegex = regexPath ?? /\.(css)$/

      if (fileRegex.test(id)) {
        return {
          code: compileFileToTS(id, _),
          map: null,
        }
      }
    },
  }
}
