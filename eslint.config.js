import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginReact from 'eslint-plugin-react'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            pluginReact.configs.flat.recommended,
            pluginReact.configs.flat['jsx-runtime'],
            pluginQuery.configs['flat/recommended'],
        ],
        files: ['**/*.{ts,tsx}'],
        settings: {
            react: {
                version: 'detect',
            },
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            react: pluginReact,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'simple-import-sort': simpleImportSort,
            '@tanstack/query': pluginQuery,
        },
        rules: {
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'react/jsx-sort-props': ['error'],
        },
    },
)
