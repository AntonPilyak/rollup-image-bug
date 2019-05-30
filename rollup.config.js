import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'
import image from 'rollup-plugin-image'
import url from 'rollup-plugin-url'
import img from 'rollup-plugin-img'
import inlineImg from 'rollup-plugin-inline-image'

export default [{
  input: 'bug.js',
  output: [
    {
      file: pkg.main,
      name: 'Bug',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
plugins: [
    // image() //doesn't work
    url()  //works with plain javascript
  ]
},{
  input: 'bug-ts.ts',
  output: [
    {
      file: 'bug-ts.js',
      name: 'BugTs',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    //image(),  //doesn't work
    //url(),    //doesn't work
    //img(),    //doesn't work
    inlineImg(),
    typescript({
      typescript: require('typescript'),
    })
  ]
}]