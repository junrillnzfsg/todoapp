const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {};

config.context = __dirname;

config.devServer = {
  contentBase: path.join(__dirname, 'dist'),
  port: 8080,
};

config.entry = {
  app: path.join(__dirname, 'src', 'app/app.js'),
};

config.output = {
  filename: '[name].bundle.js',
  path: path.join(__dirname, 'dist'),
};

config.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)|spec.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
    },
    {
      test: /\.(scss|sass|css)$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
      ],
    },
    {
      test: /\.html$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'raw-loader',
      },
    },

  ],

};

config.plugins = [
  new HTMLWebpackPlugin({
    template: './src/index.html',
    inject: 'head',
    chunks: ['app'],
  }),
];

module.exports = config;
