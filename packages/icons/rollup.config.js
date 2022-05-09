import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'

const pkg = require('./package.json')

export default {
  input: 'build/generated/svelte/index.js',
  output: [
    // { file: pkg.exports['./svelte'].require, format: 'cjs' },
    { file: pkg.exports['./svelte'].import, format: 'es' },
  ],
  plugins: [svelte(), resolve()],
}
