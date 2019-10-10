module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'camelcase': 0,
    'comma-dangle': 0,
    'indent': [2, 4, { 'SwitchCase': 1 }],
    'no-trailing-spaces': 0,
    'space-in-parens': 0,
    'no-multiple-empty-lines': 0,
    'no-unused-vars': 1,
    'import/order': 0,
    'no-console': 0,
    'template-curly-spacing': [2, 'always'],
    'arrow-parens': 0,
    'curly': 0,
  }
}
