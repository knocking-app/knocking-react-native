module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'newline-before-return': 'error',
    'no-unused-vars': 'off',
    'no-dupe-else-if': 'error',
    'no-duplicate-imports': 'error',
    camelcase: 'error',
    'no-console': 'error',
    'no-magic-numbers': 'error',
    'prefer-const': 'error',
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'default-case': 'error',
    // eslint-disable-next-line no-magic-numbers
    'max-params': ['error', 3],
    '@typescript-eslint/no-unused-vars': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: ['error', 'never'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'error',
    'react/function-component-definition': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
}
