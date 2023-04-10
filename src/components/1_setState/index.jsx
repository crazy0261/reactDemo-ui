import React, { Component } from 'react'

export default class Demo extends Component {

    state = {count:0}

    add =() =>{
        // 获取count值
        const {count} = this.state
        // 更新状态
        this.setState({count:count + 1})
    }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
 