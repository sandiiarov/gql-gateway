module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
  },
};
