module.exports = {
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'curly': 'error',
    'no-console': 2,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-unused-vars': 2,
    "@typescript-eslint/no-empty-function": "off"
  }
}