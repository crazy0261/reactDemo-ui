/**
 * 该文件专门为Count组件生成action对象
 */

import { INCREMENT,DECREMENT } from "./constant"

// ({type:INCREMENT,data}) 中小括号由于是一个对象，则加一个小括号返回，返回非对象可不加小括号
// 同步action，就是指action得值为Object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})


// 异步action，就是指action得值为函数，异步action中一般会调用同步action,异步action不是必须要用的
export const createIncrementAsynAction = (data,time) =>{
    return (dispatch) =>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}