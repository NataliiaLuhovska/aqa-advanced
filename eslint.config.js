import globals from 'globals'
import pluginJs from '@eslint/js'
import importPlugin from 'eslint-plugin-import'

export default [
    // Підключення базових правил ESLint
    pluginJs.configs.recommended,

    // Основна конфігурація ESLint
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.node,
        },
        plugins: {
            import: importPlugin, // Плагін додається як об'єкт
        },
        rules: {
            'no-unused-vars': 'error', // Правило для невикористаних змінних
            'import/order': [
                'error',
                { groups: [['builtin', 'external', 'internal']] },
            ], // Правило для порядку імпорту
        },
    },

    // Ігнорування файлів і папок
    {
        ignores: [
            'node_modules/',
            'dist/',
            'build/',
            'lesson11/task2.js',
            'lesson-1-3/',
            'lesson7/',
            'lesson9/',
            'lesson12/',
        ],
    },
]
