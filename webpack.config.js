
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {loader: 'vue-loader'}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          // {loader: 'postcss-loader', options: {plugins: [precss, autoprefixer]}},
          // {loader: 'postcss-loader', options: {plugins: [precss]}},
          {loader: 'postcss-loader', options: {plugins: [autoprefixer]}},
          {loader: 'sass-loader'},
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ttf|woff|woff2|eot|svg)$/,
        use: [
          {loader: 'file-loader', options: {outputPath: 'assets'}}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      // vue: 'vue/dist/vue.common.js'
      // vue: 'vue/dist/vue.esm.js'
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'css/app.css'
    // })
  ]
};

