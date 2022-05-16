module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  root: true,
  rules: {
    "import/no-unresolved": [2, { caseSensitive: false }],
    "react/button-has-type": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "require-jsdoc": "off",
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-use-before-define": ["warn"],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "react/jsx-filename-extension": [0],
    "import/extensions": "off",
    "import/namespace": [0, { allowComputed: false }],
    "arrow-body-style": 0,
    "react/function-component-definition": [
      0,
      {
        namedComponents: "function-declaration",
      },
    ],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-named-as-default": 0,
    "react/jsx-uses-react": "off",
    "import/no-duplicates": "off",
    "import/prefer-default-export": "off",
    "react/destructuring-assignment": 0,
    "no-param-reassign": [2, { props: false }],
    "no-shadow": "warn",
    "@typescript-eslint/no-shadow": ["off"],
    "react-hooks/exhaustive-deps": 2,
    "react-hooks/rules-of-hooks": 2,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": [0],
    "react/jsx-no-useless-fragment": "off",
    "no-console": 1,
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "max-len": [
      "off",
      {
        code: 100,
      },
    ],
    "react/forbid-elements": [
      "error",
      {
        forbid: [
          {
            element: "h1",
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: "h2",
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: "h3",
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: "h4",
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: "h5",
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: "h6",
            message: "Use MaterialUI's <Typography> instead",
          },
          {
            element: "p",
            message: "Use MaterialUI's <Typography> instead",
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
