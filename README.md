# Climatiq ESLint Config

This package provides Climatiq's ESLint configuration as a base config for any project in Climatiq.

## Getting started

If using npm

```bash
npm install --save-dev @climatiq/eslint-config
```

If using yarn
```bash
yarn add -D @climatiq/eslint-config
```

Now create an ESLint configuration file for your project that extends Climatiq's rules:

```json
# .eslintrc.json
{
    "extends": ["@climatiq"]
}
```