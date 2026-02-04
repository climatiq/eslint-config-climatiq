# Climatiq ESLint Config

This package provides Climatiq's ESLint configuration as a base config for any project in Climatiq. It uses ESLint 9's flat config format and includes configurations for Next.js, TypeScript, and Prettier.

## Installation

```bash
npm install --save-dev @climatiq/eslint-config
```

or with yarn:

```bash
yarn add --dev @climatiq/eslint-config
```

## Usage

Create an `eslint.config.mjs` file in your project root:

```js
import climatiqConfig from "@climatiq/eslint-config";

export default [
  ...climatiqConfig,
  // Add your custom rules here
];
```

## What's Included

This config includes:

- **Next.js** rules (core web vitals + TypeScript)
- **Prettier** integration
- **Unused imports** detection and auto-removal
- Sensible defaults for TypeScript projects

## Next.js Projects

Next.js has built-in ESLint support. Simply create your `eslint.config.mjs` as shown above and run:

```bash
next lint
```