import axios from 'axios'
// import {getItem} from '../utils/webStorage'
// import ActionCreator from '../store/actionCreator'
// import store from '../store/store';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // 请求拦截器传递token
    // console.log('请求拦截器',config)
    // let token = getItem('token') || ''
    // config.data.token = token
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // 如果token失效 修改全局状态值弹出模态框
    // let list=[-996,-997,-998,-999]
    // if(list.indexOf(response.data.err) !== -1){
    //   store.dispatch(ActionCreator.setTokenModal())
    // }
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
export default axios