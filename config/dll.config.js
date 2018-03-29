const webpack = require('webpack')
const path = require('path')

const vendors = [
    'react',
    'antd'
]

module.exports = {
    context: __dirname,
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].dll.js',
        library: '[name]_[hash]'
    },
    entry: {
        "vendor": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path:  path.join(__dirname, 'build', '[name]-manifest.json'),
            name: '[name]_[hash]',
        })
    ]
}