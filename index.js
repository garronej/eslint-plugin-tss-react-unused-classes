module.exports = {
  rules: {
    'unused-classes': require('./rule')
  },
  configs: {
    recommended: {
      plugins: ['tss-unused-classes'],
      rules: {
        'tss-unused-classes/unused-classes': 'warn'
      }
    }
  }
}