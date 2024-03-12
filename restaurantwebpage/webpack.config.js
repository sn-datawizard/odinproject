const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

// module.exports = {
//     mode: 'development',
//   entry: {
//     index: './src/index.js',
//     menu: './src/menu.js'
//     },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

module.exports = {
    mode: 'development',
    entry: {
        index: {
          import: './src/index.js',
          dependOn: 'shared',
        },
        menu: {
          import: './src/menu.js',
          dependOn: 'shared',
        },
        shared: 'lodash',
       },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
      },
};