const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new HardSourceWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
            },
        }),
    ],
    devtool: 'cheap-module-eval-source-map',
});
