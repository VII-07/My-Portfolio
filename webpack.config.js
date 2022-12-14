const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        watchContentBase: true
    },
};
if (module.hot) {
    module.hot.accept('reducers', () => {
        const nextReducer = require('./reducers').default
        store.replaceReducer(nextReducer)
    })
}

module.exports = ({
    develop
}) => ({
    mode: develop ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './styles/main.css'
        })
    ],
    module: {
        rules: [{
                test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
                type: 'asset/inline'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
        ],
        
    },
    ...devServer(develop),
});