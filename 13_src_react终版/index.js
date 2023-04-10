// 引入 react 核心库
import React from "react"
// 引入  ReactDOM
import ReactDOM  from "react-dom"
// 引入App
import App from "./App"

import store from "./redux/store"
import { Provider } from "react-redux"



ReactDOM.render(
    // Provider：提供器，在该组件里边的所有组件都可以使用 store，使 React 组件可被连接（connectable）
    // 此处需要用 Provider 包裹app，目的让app所有的后代容器组件都能接收到store
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById("root"))


