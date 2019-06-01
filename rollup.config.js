import sourceMaps from 'rollup-plugin-sourcemaps'
import buble from 'rollup-plugin-buble'

const pkg = require('./package.json')
const libraryName = 'femtoTween'
const input = 'index.js'
const sourcemap = true

export default [
  {
    input,
    output: { file: pkg.main, name: libraryName, format: 'umd', sourcemap },
    plugins: [ buble(), sourceMaps() ]
  },
  {
    input,
    output: { file: pkg.module, format: 'es' }
  }
]
