const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  remotes: {
    sharedComponents: 'sharedComponents@http://localhost:3010/sharedComponentsEntry.js',
  },
  exposes: {
    './Button': './src/Button',
  },
  filename: 'remoteEntry.js',
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
