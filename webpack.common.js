const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  components: path.resolve(__dirname, 'src', 'components'),
  styles: path.resolve(__dirname, 'src', 'styles'),
  test: path.resolve(__dirname, 'src', 'test'),
}

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
  },
  resolve: {
    alias: {
      src: PATHS.src,
      components: PATHS.components,
      styles: PATHS.styles,
      test: PATHS.test,
    },
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules'],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
  ]
}