import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const name = 'AlgoValidationAgent';

export default {
  input: './src/index.ts',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  // external: [],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'] })
  ],

  output: [
    {
      file: 'dist/algo-validation-agent.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/algo-validation-agent.esm.js',
      format: 'es'
    },
    {
      file: 'dist/algo-validation-agent.iife.js',
      format: 'iife',
      name,

      // https://rollupjs.org/guide/en#output-globals-g-globals
      globals: {
        v8n: 'v8n'
      }
    },
    {
      file: 'dist/algo-validation-agent.iife.min.js',
      format: 'iife',
      name,
      plugins: [terser()],
      globals: {
        v8n: 'v8n'
      }
    }
  ]
};
