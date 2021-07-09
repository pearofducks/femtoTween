import { terser } from 'rollup-plugin-terser'

export default {
  input: 'index.js',
  output: { file: 'dist/femtotween.js', format: 'esm', sourcemap: true },
  plugins: [terser()]
}

