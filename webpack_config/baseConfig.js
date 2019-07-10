/**
 * Created by mac on 2019/6/3.
 */
/**
 * Base webpack config used across other specific configs
 */


let  webpack  = require("webpack") ;
let { NODE_ENV} = require("./common/const")
module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },{
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 102400,
                        name: "assets/images/[name].[ext]?[hash:7]"
                    }
                }
            },{
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 102400,
                        name: "assets/fonts/[name].[ext]?[hash:7]"
                    }
                }]
            }
        ]
    },

    plugins: [
        //在热加载时直接返回更新文件名，而不是文件的id
        new webpack.NamedModulesPlugin(),
    ],
    mode: NODE_ENV == "production" ? "production" :  "development"  ,
};
