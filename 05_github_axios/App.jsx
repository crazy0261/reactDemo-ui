//创建外壳组件APP
import React,{Component} from 'react'
import Header from './Header';
import List from './List'

class App extends Component{
    
    state = { // 初始化状态
        Git:[], // 初始值为数组
        isFrist:true, // 是否为第一次打开页面
        isLoad:false,   // 表示是否处于加载中
        isError:''  // 存储请求相关的错误信息
    }

    // gitHub = (value) =>{
    //     this.setState({Git:value}) 
    // }

    updateAppState = (stateObj) =>{
        this.setState(stateObj) 
    }
    
    render(){
        //通过 ...将状态中的全部赋值过去
        return ( 
            <div className="container">
                <Header updateAppState = {this.updateAppState} />
                
                <List {...this.state} />
            </div>    
            
        )
    }
}