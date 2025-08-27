import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  // Base configuration for all files
  {
    ignores: [
      'node_modules/**',
    ]
  },
  
  // JavaScript files
  {
    files: ['**/*.js', '**/*.mjs'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly'
      }
    }
  },

  // TypeScript files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        project: './tsconfig.json'
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        NodeJS: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier: prettier,
      import: importPlugin
    },
    rules: {
      // TypeScript specific rules
      ...typescript.configs.recommended.rules,
      ...typescript.configs['recommended-requiring-type-checking'].rules,
      
      // Custom TypeScript rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-const': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      
      // Import rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external', 
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always'
        }
      ],
      'import/no-unresolved': 'off', // TypeScript handles this
      'import/extensions': ['error', 'never', { json: 'always' }],
      
      // General rules
      'no-console': 'off',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'comma-dangle': ['error', 'es5'],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': 'error',
      
      // Prettier integration
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          printWidth: 100,
          endOfLine: 'lf'
        }
      ]
    }
  }
];