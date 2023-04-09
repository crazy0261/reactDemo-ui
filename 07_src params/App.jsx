//创建外壳组件APP
import React,{Component} from 'react'
import Header from './components/Header';
import List from './components/List'
import { Link, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

class App extends Component{
    
    
    render(){
        //通过 ...将状态中的全部赋值过去
        return ( 
            <div className="container">
                <Header  />
                
                <List />
            </div>    
            
        )
    }
}

{

    replaceShow = {id,title} => {

        //replace跳转+携带params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        //replace跳转+携带search参数
        this.props.history.replace(`/home/message/detail?id={id}&title={title}`)

        //replace跳转+携带state参数
        this.props.history.replace(`/home/message/detail`,{id,title})
    }

    pushShow = {id,title} => {

        //push跳转+携带params参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)

        //push跳转+携带search参数
        this.props.history.push(`/home/message/detail?id={id}&title={title}`)

        //push跳转+携带state参数
        this.props.history.push(`/home/message/detail`,{id,title})
    }
    
    render(){
        const {messageArr} = this.this.state
        return (
            <div>
                <ul>
                    {messageArr.map((mesObj)=>{
                        {/*向路由组件传递params参数 */}
                        <Link to={`/home/message/detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link>

                        {/*向路由组件传递search参数 */}
                        <Link to={`/home/message/detail/?id={mesObj.id}&title={mesObj.title}`}>{mesObj.title}</Link>

                        {/*向路由组件传递state参数 */}
                        <Link to={{pathname:'/home/message/detail',state:{id:mesObj.id,title:mesObj.title}}}>{mesObj.title}</Link>
                    })}
                </ul>
                {/* 声明接收params参数 */}
                <Route path="/home/message/detail/:id/:title" component={Detail}/>

                {/* search参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail/:id/:title" component={Detail}/>

                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        )
    }

}

{
    render(){
        // 接收params参数
        const {id,title} = this.props.match.params

        // 接收search参数
        const {search} = this.props.location
        const (id,title) = qr.parse(search.slice(1))

        // 接收state参数
        const {id,title} = this.props.location.state || {}
    }
}

{   
    // 回退
    back =()=>{
        this.props.history.back
    }
    // 前进
    forword =() =>{
        this.props.history.goForword
    }

    // 前进n步，后退n步；整数前进，负数后退
    go =() =>{
        this.props.history.go(n)
    }
}