import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';
import packageJson from './package.json';

const production = !process.env.ROLLUP_WATCH;

const config = [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !production,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !production,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: production,
        inject: {
          insertAt: 'top',
        },
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

export default config;
