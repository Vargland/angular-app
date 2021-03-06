var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname +"/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: './index.html',
            inject: "head"
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            server: { baseDir: './build' }
        }),
    ]
};