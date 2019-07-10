import axios from "axios"
export var request = axios.request

axios.interceptors.request.use(function(config){
    return config;
},function(error){
    //请求错误时做些事
    return Promise.reject (error);
});

//添加响应拦截器
axios.interceptors.response.use(function(response){
    return response;
},function(error){
    //请求错误时做些事
    return Promise.reject(error);
});

function restApi(optsDefault, opts) {
    if (_.isString(opts)) opts = {
        url: opts,
        method: "get"
    }
    opts = _.merge({}, optsDefault, opts)

    let url = opts.url
    if (_.indexOf(url, "?") == -1 && _.last(url) != "/") {
        opts.url = url + "/"
    }
    return request(opts)
}
const APIOptsDefault = {
    baseURL: "/",
    responseType: "json",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
}
export function fetchApi(opts) {
    return restApi(APIOptsDefault, opts)
}
