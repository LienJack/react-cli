let {resolvePath} = require("./utils")
module.exports ={
    NODE_ENV: process.env.NODE_ENV,
    port: 3000,
    publicPath: process.env.catalog ? `${process.env.catalog}/` : "/",
    context: resolvePath('./src'),
    distPath: resolvePath(`./build`),
    dllPath: resolvePath(`./dll`),
}