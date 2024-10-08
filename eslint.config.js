import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: [
      '**',  // Ignore everything by default
      '!lesson12/**'  // Un-ignore the `lesson12` folder and its content
    ],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,  // Включити всі глобальні змінні Node.js
        console: "readonly",  // Визначити `console` як глобальну змінну
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",  // Невикористані змінні — попередження
      "no-undef": "off",        // Невизначені змінні — попередження
      "no-console": "off",
      "import/order": "off",
    },
  },
  
];
