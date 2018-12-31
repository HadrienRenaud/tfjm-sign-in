const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const pagesDir = path.resolve(__dirname, 'src', 'vue', 'pages');

module.exports = {
    entry: {
        login: path.resolve(pagesDir, 'login.js'),
        home: path.resolve(pagesDir, 'home.js')
        // Rajouter ici les autres points d'entrée
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: "url-loader?mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: "file-loader" },
            { test: /\.vue$/, loader: "vue-loader" },
            { test: /\.(gif|png|jpe?g|svg)$/i, use: [ 'file-loader', { loader: 'image-webpack-loader', options: { bypassOnDebug: true, }, }, ]},
            { test: /\.js$/, loader: 'babel-loader', exclude: [nodeModulesPath] },
        ]
    },

    plugins: [
        // new Webpack.HotModuleReplacementPlugin(),
        // new Webpack.SourceMapDevToolPlugin({ filename: '[name].js.map', exclude: ['vendor.js'] }),
        new VueLoaderPlugin()
    ]
};
