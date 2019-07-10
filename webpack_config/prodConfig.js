
let webpack = require("webpack")
let merge = require("webpack-merge")
let baseConfig = require("./baseConfig")
let {resolvePath,checkAndDownLoadDll} = require("./common/utils")
let  {NODE_ENV,publicPath,distPath,port} =  require("./common/const")
let HtmlWebpackPlugin = require("html-webpack-plugin")
let CleanWebpackPlugin = require("clean-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
let CopyWebpackPlugin = require("copy-webpack-plugin")
let AddAssetHtmlPlugin =require("add-asset-html-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
checkAndDownLoadDll()
let plugins =  ((NODE_ENV)=>{
    let plugins = [
        // new BundleAnalyzerPlugin(), // 查看打包树可视化插件
        // 清理产品产出
        new CleanWebpackPlugin(
            [
                resolvePath("./build/*.js"),
                resolvePath("./build/*.css"),
                resolvePath("./build/*.html"),
            ],
            {
                root: resolvePath(""),
                verbose: true
            }
        ),


        // 直接 copy assets 至 build
        new CopyWebpackPlugin(
            [
                {from: resolvePath("./src/assets"), to: resolvePath("./build/assets") },
            ]
        ),
        // 暴露全局变量
        new webpack.ProvidePlugin({
            _: "lodash",
            ly: "ly",
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV" : JSON.stringify(NODE_ENV)
        }),
        // dll 引入
        new webpack.DllReferencePlugin({
            manifest: resolvePath(`./dll/manifest/renderer.json`),
            name: "renderer",
            sourceType: "var"
        }),


        new HtmlWebpackPlugin({
            template: resolvePath('./src/entry/index.html'),
            hash : true,
        }),

        // 页面追加：dll js 资源
        new AddAssetHtmlPlugin({
            filepath: resolvePath(`./build/dll/renderer.js`),
            publicPath: `${publicPath}dll`,
            hash: true,
            includeSourcemap: false,
            typeOfAsset: "js",
            outputPath: "./../node_modules/.dll_cache"  // 插件定向拷贝配置，犀利了。 只好拷贝到看不见的地方……
        }),
    ]

    if(NODE_ENV == "production"){
        plugins = plugins.concat([
            // 提取CSS
            new MiniCssExtractPlugin({
                filename: `[name].css?[hash]`,
                chunkFilename: `[id].css?[hash]`
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp:/\.css$/g,
                cssProcessor:require("cssnano"),
                cssProcessorPluginOptions:{
                    preset:['default',{discardComments:{removeAll:true}}]
                },
                canPrint:true
            })
        ])
    }
    return plugins
})(NODE_ENV)
module.exports =  merge.smart(baseConfig, {
    entry:{
        index : resolvePath("src/entry/main.js")
    },
    output: {
        path: resolvePath(`./build`),
        filename: `[name].js?[hash]`,
        chunkFilename: `[name].js?[chunkhash]`,
        publicPath: `${publicPath}`,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: NODE_ENV == "production"  ? [
                    MiniCssExtractPlugin.loader ,
                    "css-loader",
                    'postcss-loader'
                ] : ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: NODE_ENV == "production"  ?[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader',
                    "sass-loader"
                ] : ["style-loader" ,"css-loader", "sass-loader"]
            },
        ]
    },
    plugins,
    resolve: {
        modules: [resolvePath('node_modules')],
        alias: {
            /* 各种目录 */
            'ly': resolvePath('src/common'),
            'src': resolvePath('src'),
            'assets': resolvePath('src/assets'),
            'store': resolvePath('src/store'),
        },
        extensions: [ '.js','.jsx', 'scss',"css"]
    },
    mode: NODE_ENV == "production" ? "production" :  "development"  ,
    devtool: NODE_ENV == "production" ?  false : 'inline-source-map' ,
    devServer: {
        port,
        hot: true,
        contentBase:distPath,
        historyApiFallback: true,//不跳转,
    },
});
