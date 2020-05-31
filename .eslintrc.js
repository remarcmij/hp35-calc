module.exports = {
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
    es6: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
