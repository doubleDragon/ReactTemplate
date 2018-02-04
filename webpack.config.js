const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const px2rem = require('postcss-px2rem');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src')
};

console.log(paths.DIST);

module.exports = {
    entry: path.join(paths.SRC, 'index.js'),

    output: {
        filename: 'bundle.js',
        path: paths.DIST,
        publicPath: '/'
    },
    devtool: "cheap-module-eval-source-map",

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                return [
                                    px2rem({remUnit: 75})
                                ]
                            }
                        }
                    },]
            },
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-template app',
            template: path.join(paths.SRC, 'index.html')
        })
    ]
};