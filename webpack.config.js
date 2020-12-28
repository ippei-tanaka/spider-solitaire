const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const NODE_MODE = process.env.NODE_MODE === "development" ? "development" : "production";

module.exports = {
  mode: NODE_MODE,

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
    path: NODE_MODE === "development"
      ? path.resolve(__dirname, 'dist')
      : path.resolve(__dirname, 'docs'),
  },

  devServer: {
    contentBase: NODE_MODE === "development"
      ? path.resolve(__dirname, 'dist') 
      : path.resolve(__dirname, 'docs'),
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
