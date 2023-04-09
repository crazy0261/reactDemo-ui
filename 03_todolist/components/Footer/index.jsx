import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选chebox回调
  handleCheckAll = (event) =>{
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除所有已完成状态
  handleClearAllDone = ()=>{
    this.props.handleClearAllDone()
  }

  render() {
    const {todos} = this.props

    // 已完成个数
    const doneCount = todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0)
    // 总数
    const total = todos.length
    console.log(total)

    return (
        <div className='todo-footer'>
        <label>
            <input type='checkbox' onChange={this.handleCheckAll} checked={doneCount === total && total !==0 ? true:false}/>
        </label>
        <span>
            <span>已完成{doneCount} / 全部{total}</span>
        </span>
        <button onClick={this.handleClearAllDone} className='btn btn-danger'>清楚已完成任务</button>
    </div>
    )
  }
}
