const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  
  Object.assign(fallback, {
    "buffer": require.resolve("buffer"),
    "stream": require.resolve("stream-browserify"),
    "timers": require.resolve("timers-browserify"),
    "process": require.resolve("process/browser"),
  });
  
  config.resolve.fallback = fallback;
  
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);
  
  return config;
}
