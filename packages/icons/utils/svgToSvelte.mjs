import path from 'path'
import fs from 'fs'

const srcPath = path.join('build', 'svg')
const buildRoot = path.join('build', 'generated')
const buildPath = path.join(buildRoot, 'svelte')
const indexFile = path.resolve(buildPath, 'wrapper.js')

function toPascalCase(name) {
  return name
    .replace(/-(\w)/g, (x) => x.toUpperCase())
    .replace(/-/g, '')
    .replace(/^([a-z])/, (x) => x.toUpperCase())
}

function buildSvelteFiles(pathName) {
  const files = fs.readdirSync(pathName, { withFileTypes: true })
  const outputPath = pathName.replace(srcPath, buildPath)

  if (!fs.existsSync(path.resolve(outputPath))) {
    fs.mkdirSync(path.resolve(outputPath), { recursive: true })
  }

  files.forEach(async (file) => {
    if (file.isDirectory()) {
      svgToSvelte(path.join(pathName, file.name))
    } else if (/\.svg$/.test(file.name)) {
      const fileName = path.basename(file.name, '.svg')
      const varName = `${toPascalCase(fileName)}Icon`
      const outputFile = `${varName}.svelte`

      const svgIconContent = fs.readFileSync(
        path.resolve(pathName, file.name),
        { encoding: 'utf-8' }
      )

      const svelteIconContent = svgIconContent.replace(
        /<svg (.*?)>/gm,
        `<svg $1 {...$$$$restProps}>`
      )

      fs.writeFileSync(path.resolve(outputPath, outputFile), svelteIconContent)

      const importUrl = path
        .relative(buildPath, outputPath)
        .split(path.sep)
        .concat([outputFile])
        .join('/')

      fs.appendFileSync(
        indexFile,
        `export { default as ${varName} } from './${importUrl}'\n`
      )
    }
  })
}

function svgToSvelte(currentPath) {
  buildSvelteFiles(currentPath)
}

console.log('Generating Svelte icons...')
if (fs.existsSync(indexFile)) {
  fs.rmSync(indexFile)
}
svgToSvelte(srcPath)
console.log('done!')
