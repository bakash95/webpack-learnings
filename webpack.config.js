const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin')
const cleanOutputFolder = require('clean-webpack-plugin')["CleanWebpackPlugin"]
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
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