import { resolve, join } from 'path'
import { copyFileSync, renameSync } from 'fs'
import fse from 'fs-extra'

const srcPath = join('build', 'generated')
const buildPath = join('build')

copyFileSync(resolve(srcPath, 'index.ts'), resolve(buildPath, 'wrapper.js'))

fse.copySync(resolve(srcPath, 'svelte'), resolve(buildPath, 'svelte'))

renameSync(
  resolve(buildPath, 'svelte', 'index.ts'),
  resolve(buildPath, 'svelte', 'wrapper.js')
)
