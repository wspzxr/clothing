// import 'antd/dist/antd.css' 配置了按需引入所以不需要这个了
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Router/router' // Router组件为根组件
import axios from './utils/axios'
import * as serviceWorker from './serviceWorker'

// 将axios挂载到react的组件原型上
React.Component.prototype.$axios = axios
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
