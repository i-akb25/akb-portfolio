import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

const eslintConfig = {
  extends: ['next', 'plugin:react/recommended'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'import/prefer-default-export': 'off', // Added rule to avoid import errors
  },
};

export default eslintConfig;
