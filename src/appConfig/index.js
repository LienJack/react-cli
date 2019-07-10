
const APP_ID = '6b177334218a48bd83941a666a41f0fa';
const version = '1.0.21';
const subCmd={
    ping:1,
    serverRequest:2,//服务器要求客户端上传状态
    uploadStatusToServer:3,//上报PC端状态
    ownJoin:100,
    userJoin:101,
    userLeave:102,
    leaveClass:103,
    changeBoard:10001,
    micro:10002,
    lessionEnd:10003,
    eightMode:10004,
    moveStudent:10005,
    singleTalk:10006,
    clearSingleTalk:10007,
    userRejoin:10008,
    studentAsk:30000,
    sendCupToAll:30001,
    sendCup:30002,
    pptControl:30003,
    exitPPT:30004,
    whiteBoard:30005,
    coursewareControl:30007    
}
/* 0 客户端登录请求
1 服务端登录成功
2 服务端登录失败 */
const LoginSubcmd={
    loginSuccess:1,
    loginFail:2,
    kickOut:3//被踢出登录
}
/* 本地存储的数据 */
const localstorage={
    loginData:'loginData',
    teacherData:'teacherData',
    classroomData:'classroomData',
    curCourseWareData:'curCourseWareData',
    deviceId:'deviceId',//PC物理地址
    videoDeviceIndex:'videoDeviceId',//视频设备
    audioDevicesIndex:'audioDevicesId',//麦克风设备
    audioPlaybackDevicesIndex:'audioPlaybackDevicesId'//扬声器设备
}

let server_env = process.env.NODE_ENV

const devServer = 'http://appdev.61draw.com';
const productServer = 'https://weblive.61draw.com/backend-api';
const testServer='https://weblivetest.61draw.com/backend-api';

const collectDevServer = 'http://dc-dev.61draw.com'
const collectTestServer = 'https://dc-test.61draw.com'
const collectProductServer = 'https://dc.61draw.com'

let host = ''
let collectHost = ''
if(server_env === 'development'){
    host = devServer
    collectHost = collectDevServer
}else if(server_env === 'test'){
    host = testServer
    collectHost = collectTestServer
}else if(server_env === 'production'){
    host = productServer
    collectHost = collectProductServer
}

export {
    APP_ID,
    subCmd,
    LoginSubcmd,
    localstorage,
    host,
    version,
    collectHost
}