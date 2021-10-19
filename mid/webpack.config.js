const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: "webpack.tsconfig.json"
          }
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
       }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client'),
    clean: true,
    publicPath: '/'
  },
  devServer: {
    static: './dist/client',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/client/index.html',
      inject: 'body'
    })
  ]
};