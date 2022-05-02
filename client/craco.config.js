const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './src',
        aliases: {
          '@app': './app',
          '@assets': './assets',
          '@components': './components',
          '@containers': './containers',
          '@pages': './pages',
          '@features': './features',
          '@service': './service',
          '@constants': './constants',
        },
      },
    },
  ],
};
