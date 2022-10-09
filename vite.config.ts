/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vite-plugin-time-reporter',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    minify: false,
    target: 'esnext',
  },
  plugins: [dts()],
});
