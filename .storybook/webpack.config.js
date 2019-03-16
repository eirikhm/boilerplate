const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(new ProvidePlugin({
        React: "react",
    }))
    return config;
  };