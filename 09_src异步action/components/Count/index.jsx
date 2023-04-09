import React, { Component } from 'react'
import store from "../../redux/store"
import { createIncrementAsynAction } from '../../redux/count_action'

export default class Count extends Comment{

    componentDidMount(){
        // 检测rendux中状态的变化，只要变化，就会调用render
        store.subscrible(()=>{
            // {}调用空对象
            this.setState({})
        })
    }
    // 加
    increment = () =>{
        const {value} = this.selectNumer
        store.dispatch({type:"increment",data:value*1})
    }

    // 异步加
    incrementAsync = () =>{
        const {value} = this.selectNumer
        store.dispatch(createIncrementAsynAction(value *1,500))
    }
    render(){

        return(
            <div>
                <h1>当前求和：{store.getState()}</h1>
                <select ref={c=>this.selectNumer =c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>&nbsp
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}