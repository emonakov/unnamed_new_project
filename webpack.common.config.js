const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const constants = require('./webpack.constants.js');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
});

module.exports = {
    entry: {
        ['main-page-app']: './src/main-page/home.jsx',
    },
    output: {
        path: constants.BUILD_DIR,
        publicPath: constants.PUBLIC_PATH,
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: constants.SCRIPTS,
                exclude: constants.NODE_MODULE_FILES,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitError: true,
                            emitWarning: true,
                            failOnWarning: false,
                            failOnError: true,
                        },
                    },
                ],
            },
            {
                test: constants.CSS_FILES,
                exclude: constants.NODE_MODULE_FILES,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                                sourceMap: true,
                                minimize: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                    ],
                }),
            },
            {
                test: constants.SASS_FILES,
                exclude: constants.NODE_MODULE_FILES,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                                sourceMap: true,
                                minimize: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
            {
                test: constants.IMAGE_FILES,
                exclude: constants.NODE_MODULE_FILES,
                loader: 'url-loader',
                options: {
                    name: './images/[hash].[ext]',
                    limit: constants.IMAGE_ENCODE_SIZE_LIMIT,
                },
            },
            {
                test: constants.FONT_FILES,
                exclude: constants.NODE_MODULE_FILES,
                loader: 'url-loader',
                options: {
                    name: './fonts/[hash].[ext]',
                    limit: constants.FONT_ENCODE_SIZE_LIMIT,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        mainFields: ['loader', 'main'],
    },
    resolveLoader: {
        modules: [path.resolve(__dirname, 'src/loaders'), 'node_modules'],
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: true,
            dry: false,
            exclude: [],
            watch: false,
        }),
        extractSass,
        new webpack.LoaderOptionsPlugin({
            debug: false,
        }),
        new StyleLintPlugin({
            files: ['src/scenes/**/*.s?(a|c)ss', 'src/shared/**/*.s?(a|c)ss'],
            emitErrors: true,
            failOnError: false,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'manifest', minChunks: Infinity }),
    ],
    stats: 'minimal',
};
