module.exports = {
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended-type-checked', 'prettier'],
  plugins: [
    // This plugin automatically removes unused imports
    "unused-imports"
  ],
  rules: {
    'curly': 'error',
    'no-console': 2,
    // Sometimes ts-ignore is handy if we justify it
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-check': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    '@typescript-eslint/no-unused-vars': 'off', // delegate to plugin below that handles both vars and imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*/test-stubs.ts', '**/*/test-helpers.ts'],
      rules: {
        // Handy to have all tests be async even if we don't use it in them
        '@typescript-eslint/require-await': 'off',
        // No need to be super strict with anys in test code
        // Also these don't seem to work well with snapshot matchers
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    {
      //see https://typescript-eslint.io/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
      // This is to avoid errors about this not being in the TSConfig
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js'],
    }
  ],
}
