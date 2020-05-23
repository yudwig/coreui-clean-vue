const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ANALYZE_BUILD = !!process.env.ANALYZE_BUILD;
const RELEASE_BUILD = !!process.env.RELEASE_BUILD;

module.exports = {
  mode: RELEASE_BUILD ? 'production' : 'development',
  devtool: "source-map",
  cache: false,
  entry: './src/vue/app/index.js',
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
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
          MiniCssExtractPlugin.loader,
          // {loader: 'style-loader'},
          {loader: 'css-loader'},
          // {loader: 'postcss-loader', options: {plugins: [precss, autoprefixer]}},
          // {loader: 'postcss-loader', options: {plugins: [precss]}},
          {loader: 'postcss-loader', options: {plugins: [autoprefixer]}},
          {loader: 'sass-loader'},
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        // options: {
        //   appendTsSuffixTo: [/\.vue$/]
        // }
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
          // {loader: 'file-loader', options: {outputPath: 'assets'}}
          {loader: 'file-loader', options: {outputPath: 'css/assets'}}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [].concat(
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    })
  ).concat(
    ANALYZE_BUILD ? [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.join(__dirname, './build/stats/app.html'),
        defaultSizes: 'gzip',
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: path.join(__dirname, './build/stats/app.json'),
        statsOptions: null,
        logLevel: 'info'
      })
    ] : []
  )
};

