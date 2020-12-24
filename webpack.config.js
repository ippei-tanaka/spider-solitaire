const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: './src/index.ts'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },
    ]
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dest'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dest'),
    writeToDisk: true
    // compress: true,
    // publicPath: "/dist/",
    // host: "127.0.0.1",
    // port: 8080,
    // open: true
  },

  plugins: [
    new CopyPlugin({
      patterns: ['assets'],
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
