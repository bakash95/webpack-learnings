const commonWebPack = require('./webpack.config')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(commonWebPack,{
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'build',
        hot: true,//HMR (only specific content is replaced for eg background color change will only change and not relod)
    },
})