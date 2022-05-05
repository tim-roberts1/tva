import path from 'path'
import fs from 'fs'

const srcPath = path.join('build', 'generated', 'react')
const buildPath = path.join('build', 'react')

fs.copyFileSync(
  path.resolve(srcPath, 'index.ts'),
  path.resolve(buildPath, 'wrapper.js')
)
