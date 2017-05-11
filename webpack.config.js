const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/client.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/public",
  },
  /*
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  */
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};
