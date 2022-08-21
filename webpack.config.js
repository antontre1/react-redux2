const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
  entry: ['./src/',],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // if 404 it serves index as an answer
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 8080,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mybundle.js',
    clean: true,
  },
  // resolve help to resolve file extension reseach when it is imported in one of the files loaded
  // (ex: import foo from '../src/foo' --> it looks into the extensions in resolve jsx then tsx ...)
   resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'img/',
            publicPath: 'img/',
            esModule: true,
          }
        }
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS - first step to translate SCSS for webpack (here in css)
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },


    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My React App 2022",
      template: path.join(__dirname, "src", "index.html"),
      hash: true
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
      inlineAll: true,
    })
  ],
}
