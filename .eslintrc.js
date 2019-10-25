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
  "extends": ["eslint:recommended", "google"],
  "rules": {
    "require-jsdoc": 0,
  },
  "plugins": [
  ],
  "parserOptions": {
    "sourceType": "module"
  }
};
