import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const dev = process.env.ROLLUP_WATCH

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    dev && serve('dist'),
    dev && livereload('dist'),
    typescript(),
    sass({ output: './dist/bundle.css' })
  ]
}