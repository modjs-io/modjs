/*eslint-disable*/
const path = require('path')

module.exports = {
    mode: 'development',
    entry: [path.join(__dirname, 'packages/icons/src', 'index.ts')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devtool: false,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}
