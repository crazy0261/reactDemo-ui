import React, { Component } from 'react'
import store from "../../redux/store"
import { createIncrementAsynAction } from '../../redux/count_action'

export default class Count extends Comment{ 
    // 加
    increment = () =>{
        const {value} = this.selectNumer
        this.props.jia(value * 1)
    }

    // 异步加
    incrementAsync = () =>{
        const {value} = this.selectNumer
        store.dispatch(createIncrementAsynAction(value *1,500))
    }
    render(){

        return(
            <div>
                <h1>当前求和：{this.props.this.count}</h1>
                <select ref={c=>this.selectNumer =c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>&nbsp
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}