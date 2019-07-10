
let path = require("path")
let fs = require("fs")
let chalk = require("chalk")
let {execSync}  = require("child_process")

var staticRootDir = path.resolve(__dirname, '../../');//整个项目的根目录
function resolvePath(subPath){
    return path.resolve(staticRootDir, subPath)
}

function  checkAndDownLoadDll (){
    let dllPath = resolvePath(`./dll`)
    const manifest = path.resolve(dllPath,"./manifest", './renderer.json');
    if (!(fs.existsSync(dllPath) && fs.existsSync(manifest))) {
        console.log(chalk.black.bgYellow.bold('The DLL files are missing. Sit back while we build them for you with "yarn build-dll"'));
        execSync('yarn build-dll');
    }
}

module.exports = {
    resolvePath,
    checkAndDownLoadDll
}
