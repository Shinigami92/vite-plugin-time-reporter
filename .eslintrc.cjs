// @ts-check
const { defineConfig } = require('eslint-define-config');
const { readGitignoreFiles } = require('eslint-gitignore');

/// <reference types="@eslint-types/prettier" />
/// <reference types="@eslint-types/typescript-eslint" />

module.exports = defineConfig({
  ignorePatterns: [
    ...readGitignoreFiles(),
    '.eslintrc.cjs', // Skip self linting
  ],
  root: true,
  env: {
    es6: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    curly: ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-case-declarations': 'warn',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],

    '@typescript-eslint/array-type': [
      'error',
      { default: 'array-simple', readonly: 'generic' },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        selector: ['class', 'interface', 'typeAlias', 'enumMember'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['PascalCase'],
        selector: ['typeParameter'],
        prefix: ['T'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreParameters: true },
    ],
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true, allowBoolean: true },
    ],
    '@typescript-eslint/unbound-method': 'off',
  },
});
