const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development', // 编译模式，开发/生产
  entry: './src/index.tsx', // js入口
  output: {
    path: __dirname + '/dist/', // production时，编译文件输出到哪
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // 对于所有.ts、.tsx文件
        resolve: {
          extensions: ['.ts', '.tsx'], // 由于ts、tsx文件引用时不能写.ts、.tsx后缀，得在这里加上否则无法编译
        },
        use: 'ts-loader', // 用tsc编译ts文件
      },
      {
        test: /\.(css|scss)$/, // 对于所有.css、.scss文件
        use: [
          MiniCssExtractPlugin.loader, // 把css文件从js中抽出来
          'css-loader', // 编译@import、url()等，以及js引用css
          'sass-loader' // 编译scss为css
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/, // 对于所有.png、.jpg、.jpeg、.webp文件
        type: 'asset/resource', // 作为静态文件引用
      },
    ],
  },
  devtool: prod ? false : 'source-map', // 开发模式开启source map
  devServer: {
    open: true, // 自动打开浏览器
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }), // 在index.html里加script后复制到dist
    new MiniCssExtractPlugin(), // 把js引用的css抽成文件，通过<link>引入html
  ],
};
