var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './js.js',
    entry: {
        js: './src/app.js',
        common:[
          'normalize.css',
          'vue',
          'vue-router',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // vue-loader options go here
                }
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }, {
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            },
            { test: /iview.src.*?js$/, loader: 'babel-loader' },
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            // vue:'vue/dist/vue.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: true
    },
    // devtool: '#eval-source-map',
    devtool: 'hidden-source-map',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.optimize.CommonsChunkPlugin({names: ['common'], minChunks: Infinity}),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"production"'
        //     }
        // }),
        // new webpack.DefinePlugin({
        //     // minimize: true,
        //     __aaa__:true,
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
    ]
}
