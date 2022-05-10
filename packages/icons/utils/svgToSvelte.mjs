import path from 'path'
import fs from 'fs'

const srcPath = path.join('build', 'svg')
const buildPath = path.join('build', 'svelte')
const indexFile = path.resolve(buildPath, 'index.js')
const cjsFile = path.resolve(buildPath, 'index.cjs')

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

      fs.appendFileSync(
        cjsFile,
        `exports.${varName} = void 0;
var ${varName}_1 = require("./${importUrl}");
Object.defineProperty(exports, "${varName}", { enumerable: true, get: function () { return __importDefault(${varName}_1).default; } });\n`
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
if (fs.existsSync(cjsFile)) {
  fs.rmSync(cjsFile)
  fs.writeFileSync(
    cjsFile,
    `"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });\n`
  )
}
svgToSvelte(srcPath)
console.log('done!')
