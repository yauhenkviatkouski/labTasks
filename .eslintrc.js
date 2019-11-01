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
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "extends": ["eslint:recommended", "google"],
  "rules": {
    "require-jsdoc": 0,
  },
  "plugins": [
  ]
};
