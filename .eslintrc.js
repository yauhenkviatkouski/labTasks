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
    "ecmaVersion": 6
  },
  "rules": {
    "require-jsdoc": false
  },
  "plugins": [
  ],
  "extends": [
    "eslint:recommended",
    "google"
  ]
};
