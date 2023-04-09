// 引入Count的UI组件
// import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import { createIncrementAction } from '../../redux/count_action'

// 1、mapStateToProps函数返回的对象
// 2、返回中的key就作为传递给ui组件props的key，value就作为传递给ui组件props的vaalue--状态
// 3、mapStateToProps用于传递状态

// 映射状态
// const mapStateToProps = state =>({count:state})

// 1、mapDispatchToProps函数返回的是一个对象
// 2、返回的对象中的key就作为传递给ui组件props的key，value就作为传递给ui组件props的vaalue--操作状态的方法
// 3、mapDispatchToProps用于传递操作状态的方法

// 映射操作状态的方法
// const mapDispatchToProps = dispatch =>(
//      {
//         jia:number => dispatch(createIncrementAction(number))
//     }
// )

// 定义UI组件
class Count extends Comment{ 
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


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state =>({count:state}),
    dispatch =>(
        {
           jia:number => dispatch(createIncrementAction(number))
       }
   )
)(Count)