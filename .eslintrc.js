module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  plugins: [],

  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'index', 'sibling'],
      },
    ],
    'guard-for-in': 'error',
    'no-console': 'warn',
    'no-bitwise': 'error',
    'no-eval': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'spaced-comment': ['error', 'always', { block: { balanced: true } }],
    'dot-notation': 'error',
    'array-callback-return': 'error',
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
}
