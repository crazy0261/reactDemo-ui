/**
 * 1、该文件是用于创建一个为Count组件服务的renducer，reducer的本质就是一个函数
 * 2、renducer函数会接到两个参数，分别为：之前的状态（preState），动作对象(action)
 */

import { INCREMENT,DECREMENT } from "./constant"

const initStaste = 0
function countReducer(preState=initStaste,action){
    // 从action对象中获取：type、data
    const {type,data} = action
    // 根据type决定如何加工数据
    switch (type){
        case INCREMENT : // 加
            return preState + data
        case DECREMENT : // 减
            return preState-data
        default:
            return preState
    }
}