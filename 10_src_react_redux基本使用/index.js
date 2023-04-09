// 引入 react 核心库
import React from "react"
// 引入  ReactDOM
import ReactDOM  from "react-dom"
// 引入App
import App from "./App"

import store from "./redux/store"

// 检测redux中状态的改变，如redux的状态发生了变化，那么重新渲染App组件
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById("root"))
})


