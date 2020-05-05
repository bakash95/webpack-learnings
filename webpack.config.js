const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin')
const cleanOutputFolder = require('clean-webpack-plugin')["CleanWebpackPlugin"]
const MinifyPlugin = require('babel-minify-webpack-plugin')

console.log('webpack config ran ' + process.env.NODE_ENV)

module.exports = {
    mode: process.env.NODE_ENV,
    entry: { home: './src/index.js' },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new cleanOutputFolder(),
        new MinifyPlugin(),
        new htmlWebPackPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'build',
        hot: true,//HMR (only specific content is replaced for eg background color change will only change and not relod)
    },
    optimization: {
        usedExports: true,
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
};