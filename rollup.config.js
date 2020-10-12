import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'postcss'
import cssnano from 'cssnano'
import sassRuntime from 'sass'

const dev = process.env.ROLLUP_WATCH

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    dev && serve('./dist'),
    dev && livereload('./dist'),
    typescript(),
    sass({
      runtime: sassRuntime,
      output: './dist/bundle.css', 
      processor: css => postcss(dev ? [] : [cssnano])
        .process(css)
        .then(result => result.css)
    }),
    !dev && terser({ mangle: true })
  ]
}