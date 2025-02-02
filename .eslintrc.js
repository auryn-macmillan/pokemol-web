module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  // extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  extends: ['plugin:react/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    localStorage: true,
    fetch: true,
    window: true,
    sessionStorage: true,
    alert: true,
    document: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // default rules
    'no-console': 'off',
    'no-unused-vars': 'warn', // change to 'error' 🙏
    'no-param-reassign': 'off', // priority 1, easy
    'no-shadow': 'off', // priority 1, med
    'no-nested-ternary': 'off', // priority 2, med
    'no-restricted-globals': 'off', // priority 1, med
    'no-restricted-syntax': 'off', // priority 2, harder
    'guard-for-in': 'off', // priority 2, two instances
    'no-return-assign': 'off', // priority 1, easy
    'consistent-return': 'off', // priority 2, harder basically all the services
    radix: 'off', // priority 1, parseInt ??
    'no-unused-expressions': 'off', // priority 2, formatPeriods() conditional appends
    // import rules
    'import/prefer-default-export': 'off', // priority 2, med
    'import/no-named-as-default': 'off', // priority 1, easy
    'import/no-extraneous-dependencies': 'off', // priority 1, harder
    'import/no-cycle': 'off', // priority 2, harder in contexts
    // react rules
    'react/prop-types': 'off', // can stay off
    'react/jsx-props-no-spreading': 'off', // priority 3, hard
    'react/no-array-index-key': 'off', // priority 1, easy-ish
    'react/jsx-wrap-multilines': 'off', // priority 3, conflicting with prettier formatting only
    'react/jsx-curly-newline': 'off', // priority 2, harder conflicting with prettier
    'jsx-quotes': ['error', 'prefer-single'], // leave
    // misc
    // 'prettier/prettier': 'warn',
  },
};
