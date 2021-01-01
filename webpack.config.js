const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const packageJson = require("./package.json");

const VERSION = packageJson.version;
const NODE_MODE = process.env.NODE_MODE === "development" ? "development" : "production";

module.exports = {

  mode: NODE_MODE,

  entry: {
    app: './src/index.ts'
  },

  devtool: NODE_MODE === "development"
    ? 'inline-source-map' : undefined,

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
    filename: `[name]-${VERSION}.js`,
    path: NODE_MODE === "development"
      ? path.resolve(__dirname, 'dist')
      : path.resolve(__dirname, 'docs'),
    chunkFilename: `[name]-${VERSION}.js`,
    publicPath: NODE_MODE === "development"
      ? "/"
      : '/spider-solitaire/',
  },

  devServer: NODE_MODE === "development" ? {
    contentBase: path.resolve(__dirname, 'dist'),
    writeToDisk: true,
    // compress: true,
    // publicPath: "/dist/",
    host: "192.168.8.150",//"127.0.0.1",
    // port: 8080,
    // open: true
  } : undefined,

  plugins: [
    new CopyPlugin({
      patterns: ['assets'],
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "index.hbs"),
      output: path.join(
        process.cwd(),
        NODE_MODE === "development" ? 'dist' : 'docs',
        "[name].html"
      ),
      data: {version: VERSION},
    })
  ],

  // optimization: {
  //   splitChunks: {
  //       cacheGroups: {
  //           default: false,
  //           vendors: false,
  //           // vendor chunk
  //           vendor: {
  //               // name of the chunk
  //               name: 'vendor',
  //
  //               // async + async chunks
  //               chunks: 'all',
  //
  //               // import file path containing node_modules
  //               test: /node_modules/,
  //
  //               // priority
  //               priority: 20
  //           },
  //       }
  //   }
  // }

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // }
};
