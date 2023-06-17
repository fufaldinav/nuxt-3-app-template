require('@rushstack/eslint-patch/modern-module-resolution');

const prettierConfig = require('./.prettierrc.json');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['unused-imports', 'tailwindcss', 'simple-import-sort'],
  rules: {
    'no-undef': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/no-required-prop-with-default': ['error', { autofix: false }],
    'vue/no-unused-properties': ['warn', { groups: ['props'] }],
    'vue/no-unused-refs': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-prop-type-boolean-first': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/no-ref-object-destructure': 'warn',
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case',
      { ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'] },
    ],
    'vue/next-tick-style': ['error', 'promise'],
    'prettier/prettier': ['error', prettierConfig],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/exports': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^node:'], ['^@?\\w'], ['^'], ['^\\.']],
      },
    ],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
  },
};
