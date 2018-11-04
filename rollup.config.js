import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript'

const pkg = require('./package.json')
const libraryName = 'femtoTween'
const input = 'index.ts'
const sourcemap = true

export default [
{
	input,
	output: { file: pkg.main, name: libraryName, format: 'umd', sourcemap },
	plugins: [ typescript({ target: 'es5' }), sourceMaps() ]
},
{
	input,
	output: { file: pkg.module, format: 'es', sourcemap },
	plugins: [ typescript(), sourceMaps() ]
}
]
