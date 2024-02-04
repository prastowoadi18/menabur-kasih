module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom", "prettier"],
  rules: {
    quotes: ["error", "single"],
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  settings: {
    next: {
      rootDir: ["src/**/"],
    },
  },
};
