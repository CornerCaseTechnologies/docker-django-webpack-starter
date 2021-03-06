import webpack from 'webpack';
import path from 'path';
import postCssConfig from './postcss.config';

export default {
    entry: [
        'babel-polyfill',
        `${path.resolve(__dirname, '../', 'src', 'js')}/index.js`
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/static/',
    },

    module: {
        rules: [{
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }, 'eslint-loader'],
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: postCssConfig
                }, 'sass-loader']
            },
            {
                test: /\.(mp4|webm|mp3|ogg|wav|jpeg|jpg|bmp|ico|png|gif|ttf|otf|woff|eot)$/,
                use: 'file-loader?name=[name].[ext]?[hash]'
            },

        ]
    },
    target: 'web',
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
