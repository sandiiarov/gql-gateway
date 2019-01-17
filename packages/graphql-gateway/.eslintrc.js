module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: 'eslint-plugin-typescript/parser',
  plugins: ['typescript'],
  extends: ['plugin:typescript/recommended', 'plugin:prettier/recommended'],
  rules: {
    'typescript/no-var-requires': 0,
    'typescript/indent': 0,
    'typescript/explicit-function-return-type': 0,
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
  },
};
