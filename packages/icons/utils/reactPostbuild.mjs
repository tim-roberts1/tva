import { resolve, join } from 'path'
import { copyFileSync } from 'fs'

const srcPath = join('build', 'generated', 'react')
const compiledPath = join('build', 'react')
const buildPath = join('build')

copyFileSync(resolve(srcPath, 'index.ts'), resolve(buildPath, 'wrapper.js'))
copyFileSync(resolve(compiledPath, 'index.js'), resolve(buildPath, 'index.js'))
copyFileSync(
  resolve(compiledPath, 'index.d.ts'),
  resolve(buildPath, 'index.d.ts')
)
