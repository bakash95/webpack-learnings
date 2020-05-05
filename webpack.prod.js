const commonWebPack = require('./webpack.config')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(commonWebPack,{
    mode:'production'
})