const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
/*entry: './src/index.tsx', */
  entry: './src/lesson5/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,

/*      test: /\ts|.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }, */
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    host: '127.0.0.1'
//  disableHostCheck: true
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
