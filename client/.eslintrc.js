module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:storybook/recommended',
    // "plugin:typescript-eslint/recommended",
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
      },
    ],
    'no-underscore-dangle': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/object-curly-newline': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
