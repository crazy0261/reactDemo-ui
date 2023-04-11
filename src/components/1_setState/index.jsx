import React, { Component } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export default class Demo extends Component {

    state = {count:0}

    add =() =>{
    //   // 对象式的state
    //     // 获取count值
    //     const {count} = this.state
    //     // 更新状态
    //     this.setState({count:count + 1},()=>{
    //       console.log(this.state.count)
    //     })

          // 函数式的setState
           toast.success("成功")
          this.setState( state => ({count:state.count +1}))
    }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <Toaster/>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
 