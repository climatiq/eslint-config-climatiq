module.exports = {
  extends: ['plugin:@typescript-eslint/recommended-type-checked', 'plugin:@typescript-eslint/stylistic-type-checked', 'prettier'],
  rules: {
    'curly': 'error',
    'no-console': 2,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-unused-vars': 2,
    "@typescript-eslint/no-empty-function": "off"
  }
}