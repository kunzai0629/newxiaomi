module.exports = {
  root: true,
  env: {
    node: false
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {

  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "process": true,
    "error": true

    },
}
