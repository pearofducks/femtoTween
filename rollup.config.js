import sourceMaps from 'rollup-plugin-sourcemaps'
import buble from '@rollup/plugin-buble'
import { terser } from 'rollup-plugin-terser'

const pkg = require('./package.json')
const libraryName = 'femtoTween'
const input = 'index.js'
const sourcemap = true

export default [
  {
    input,
    output: { file: pkg.main, name: libraryName, format: 'umd', sourcemap },
    plugins: [ buble(), terser(), sourceMaps() ]
  },
  {
    input,
    output: { file: pkg.module, format: 'es', sourcemap },
    plugins: [ terser(), sourceMaps() ]
  }
]
