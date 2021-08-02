const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
/*entry: './src/index2.tsx', */
/*entry: './src/lesson5/index.tsx', */
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
  }
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
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
