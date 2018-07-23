const path = require('path');

module.exports = {
    BUILD_DIR: `${__dirname}/build`,
    LEGACY_DIR: path.resolve(__dirname, 'src', 'legacy'),
    PUBLIC_PATH: '/build/',
    IMAGE_ENCODE_SIZE_LIMIT: 3000,
    FONT_ENCODE_SIZE_LIMIT: 3000,
    NODE_MODULE_FILES: /node_modules/,
    SASS_FILES: /\.scss$/,
    CSS_FILES: /\.css$/,
    IMAGE_FILES: /\.(png|jpg|gif|svg)$/,
    FONT_FILES: /\.(eot|ttf|woff|woff2)$/,
    SCRIPTS: /[\\/]src[\\/].*(\.jsx|\.js)$/,
};
