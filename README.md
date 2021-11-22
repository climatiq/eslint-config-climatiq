# Climatiq ESLint Config

This package provides Climatiq's ESLint configuration as a base config for any project in Climatiq and requires `@next/eslint-plugin-next` ,`@typescript-eslint/eslint-plugin` ,`@typescript-eslint/parser` ,`eslint` ,`eslint-config-next` ,`eslint-config-prettier` ,`eslint-plugin-prettier` ,`eslint-webpack-plugin` ,`prettier` ,`typescript`

## Installation

To install this config and the peerDependencies (note the `npx` command). If you are using yarn, the command will detect it and will prompt to use yarn command instead.

```bash
npx install-peerdeps --dev @climatiq/eslint-config
```

Now create an ESLint configuration file for your project that extends Climatiq's rules:

```json
{
    "extends": ["@climatiq"]
}
```

Or use it directly on the command line:

```bash
npx eslint -c @climatiq/eslint-config ./src
```

## Running ESLint while webpack is in development mode

When webpack is running and watching for changes, the `eslint-webpack-plugin` allows to run ESLint while watching by adding these lines to your `webpooack.config.js` file:

```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [
      // ...,
      new ESLintPlugin({
        extensions: ['js', 'ts', 'tsx', 'jsx'],
        exclude: ['/node_modules/'],
        failOnError: false,
        files: [], // List of files/folders to run the lint while linting
      })
  ]
}

```

### Next.js configuration

You can extend Next configuration to modify the webpack configuration object in a similar way:

```js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    reactStrictMode: true,
    webpack: (config, { dev }) => {
        if (dev) {
            config.plugins.push(
                new ESLintPlugin({
                    extensions: ['js', 'ts', 'tsx', 'jsx'],
                    exclude: ['/node_modules/', '/.next/', '/public/'],
                    failOnError: false,
                    files: [], // List of files/folders to run the lint while linting
                }),
            );
        }
        return config;
    },
};
```
