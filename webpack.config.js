const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin')
const cleanOutputFolder = require('clean-webpack-plugin')["CleanWebpackPlugin"]

console.log('webpack config ran')

module.exports = {
    entry: { home: './src/index.js', newModule: './src/newModule.js' },
    output: {
        filename: '[name].bundle.js',
        chunkFilename:'[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new cleanOutputFolder(),
        new htmlWebPackPlugin()
    ],
    devtool : 'inline-source-map',
    devServer : {
        contentBase: 'build'
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
    },
    optimization:{
        splitChunks:{
            chunks : 'all'
        }
    }
};