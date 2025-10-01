import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // TypeScript / generell regler
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
  
      // React / JSX regler
      // React / JSX regler
      "react-refresh/only-export-components": "warn",
      "react-refresh/only-export-components": "warn",
  
      // Generelle regler
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
    }
  },
  {
    files: ["src/components/ui/**"], // shadcn/ui filer
    rules: {
      "react-refresh/only-export-components": "off"
    }
  },
  {
    files: ["*.config.js", "vite.config.ts", "eslint.config.js"], // node config filer
    languageOptions: {
      globals: globals.node,
    },
    rules: { "no-console": "off" }
  }  
])
