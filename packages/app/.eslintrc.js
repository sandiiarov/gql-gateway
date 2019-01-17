module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'eslint-plugin-typescript/parser',
  plugins: ['typescript', 'react', 'jsx-a11y'],
  extends: [
    'plugin:typescript/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'typescript/no-var-requires': 0,
    'typescript/indent': 0,
    'typescript/explicit-function-return-type': 0,
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'react/prop-types': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  },
};
