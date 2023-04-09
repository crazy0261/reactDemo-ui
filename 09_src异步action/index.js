// 引入 react 核心库
import React from "react"
// 引入  ReactDOM
import ReactDOM  from "react-dom"
// 引入App
import App from "./App"

import store from "./redux/store"

// 监听，每次调用，diff低频 react
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById("root"))
})


