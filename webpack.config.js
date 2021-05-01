const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
process.env.PUBLIC_URL = './hey'
module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
    path: path.resolve(__dirname + '/build'),
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    contentBase: path.resolve('./build'),
    index: 'index.html',
    port: 5000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  mode: 'development',
}
