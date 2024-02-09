const { dependencies } = require('./package.json');

module.exports = {
  name: 'sharedComponents',
  exposes: {
    './Header': './shared/Header',
    './Footer': './shared/Footer',
  },
  filename: 'sharedComponentsEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
