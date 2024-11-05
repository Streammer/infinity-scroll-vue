import pluginVue from 'eslint-plugin-vue'
export default [

  ...pluginVue.configs['flat/recommended'],
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js"],
    rules: {
         semi: "error",
        "prefer-const": "error"
    }
  }
]