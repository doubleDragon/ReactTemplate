const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const px2rem = require('postcss-px2rem');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src')
};

module.exports = {

    entry: [
        path.join(paths.SRC, 'index.js'),
        'whatwg-fetch'
    ],

    output: {
        filename: '[hash].bundle.js',
        path: paths.DIST,
        publicPath: '/'
    },
    devtool: "cheap-module-eval-source-map",

    devServer: {
        port: 3000,
        proxy: {
            "/api": {
                target: "https://recommender-api-ms.juejin.im/v1/",
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //[name] means origin name
                            name: '[hash].[ext]',
                            outputPath: 'images/'
                        }
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        // {loader: "css-loader"},
                        "css-loader",
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => {
                                    return [
                                        px2rem({remUnit: 75})
                                    ]
                                }
                            }
                        }
                    ]
                })
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-template app',
            template: path.join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('css/styles.css')
    ]
};