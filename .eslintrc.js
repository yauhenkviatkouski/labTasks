module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
  },
  "plugins": [
    "es5"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:es5/no-es2015"
  ]
};
