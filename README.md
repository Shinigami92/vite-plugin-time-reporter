<h1 align="center">vite-plugin-time-reporter</h1>

<p align="center">
  <a href="https://github.com/Shinigami92/vite-plugin-time-reporter/blob/main/LICENSE">
    <img alt="license: MIT" src="https://img.shields.io/github/license/Shinigami92/vite-plugin-time-reporter.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-time-reporter" target="_blank">
    <img alt="NPM package" src="https://img.shields.io/npm/v/vite-plugin-time-reporter.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-time-reporter" target="_blank">
    <img alt="downloads" src="https://img.shields.io/npm/dt/vite-plugin-time-reporter.svg?style=flat-square">
  </a>
  <a href="https://github.com/prettier/prettier" target="_blank">
    <img alt="Code style: Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <a href="https://github.com/vitejs/awesome-vite#transformers" target="_blank">
    <img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome">
  </a>
  <a href="https://github.com/Shinigami92/vite-plugin-time-reporter/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://github.com/Shinigami92/vite-plugin-time-reporter/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>
</p>

<p align="center">
  Time reporting for <a href="https://github.com/vitejs/vite" target="_blank">Vite</a> project.
</p>

## Usage

1. Install as `devDependencies`

   ```bash
   npm add --save-dev vite-plugin-time-reporter
   # or
   yarn add --dev vite-plugin-time-reporter
   # or
   pnpm add --save-dev vite-plugin-time-reporter
   ```

2. Inject `vite-plugin-time-reporter` using the `vite.config.ts` module

   ```ts
   import vue from '@vitejs/plugin-vue';
   import { defineConfig } from 'vite';
   import timeReporter from 'vite-plugin-time-reporter';

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [timeReporter()],
   });
   ```

## More Awesome Vite Plugins

Can be found here: [Awesome Vite.js](https://github.com/vitejs/awesome-vite#readme)
