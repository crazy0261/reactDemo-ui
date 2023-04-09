import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from "../../redux/actions/count";

class Count extends Component {

    add= ()=>{
      // 通知redux +1
      this.props.add(1)

    }
  render() {
    return (
      <div>
        <h2>Count:{this.props.count}</h2>
        <button onClick={this.add}>点我++1</button>

      </div>
    )
  }
}


export default connect(
    // 映射状态
    state => ({count:state}),
    //映射操作状态方法
    {add:createIncrementAction}

)(Count)