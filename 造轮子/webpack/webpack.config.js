const path = require('path');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');


const config = {
    mode: 'development',
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin()
    ]
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map'
    }
    console.log(env)
    if (argv.mode === 'production') {
        config.devtool = 'none'
    }
    return config
}