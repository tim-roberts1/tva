import { resolve, join } from 'path'
import { copyFileSync } from 'fs'

const srcPath = join('build', 'generated')
const buildPath = join('build')

copyFileSync(resolve(srcPath, 'index.ts'), resolve(buildPath, 'wrapper.js'))
