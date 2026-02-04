import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      curly: "error",
      // Sometimes ts-ignore is handy if we justify it
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-check": "allow-with-description",
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": "allow-with-description"
        }
      ],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unused-vars": "off", // delegate to plugin below that handles both vars and imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_"
        }
      ]
    }
  },
  {
    plugins: {
      // This plugin automatically removes unused imports
      "unused-imports": unusedImports
    }
  },
  {
    files: ["**/*.tsx", "**/*.jsx"],
    rules: {
      "no-console": "error" // Disable no-console rule for .tsx files
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".vercel/**"
  ])
]);
