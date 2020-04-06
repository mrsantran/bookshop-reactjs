"use strict";

const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const path = require( 'path' );
module.exports = {
    // Set debugging source maps to be "inline" for
    // simplicity and ease of use
    mode: 'production',
    devtool: "inline-source-map",
    // The application entry point
    entry: "./src/index.tsx",

    // Where to compile the bundle
    // By default the output directory is `dist`
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
    },

    // Supported file loaders
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                include: [path.join(__dirname, "src/assets")],
                loader: "file-loader?name=assets/[name].[ext]"
            },
            {
                test: /\.(jpe?g|png|gif|json|ico)(\?.*)?$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]',
                    publicPath: 'http://localhost:5000/',
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ]
    },
    
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new ForkTsCheckerWebpackPlugin({ silent: true }),
        new ManifestPlugin()
    ],

    // File extensions to support resolving
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};