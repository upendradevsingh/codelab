const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        main: path.resolve(__dirname, 'public/src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

module.exports = config;
