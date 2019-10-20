module.exports = {
  "env": {
    "browser": true,
    "es6": false
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 5
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
