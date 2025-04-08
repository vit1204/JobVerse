import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  rules: {
    'no-console': 'off',
    'unused-imports/no-unused-import': 'off',
    'vue/camelcase': 'off',
    'vue/custom-event-name-casing': 'off',

  },

})
