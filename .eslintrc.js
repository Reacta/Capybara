module.exports = {
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.android.js', '.ios.js'],
      },
    },
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'no-use-before-define': ['error', { variables: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
