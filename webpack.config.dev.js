module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        },
        {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        }]
      }
    ]
  },
  devtool: 'inline-source-map',
  mode: 'development'
};
