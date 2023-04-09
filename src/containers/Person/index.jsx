import React,{Component} from "react"
import { nanoid } from "nanoid"
import { connect } from "react-redux"

class Person extends Component{

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        console.log(personObj);
    }


render() {
    return(
        <div>
            <h2>我是person组件</h2>
            <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
            <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
            <button onClick={this.addPerson}>添加</button>

            {/* <ul>
                {
                    this.props.yiduiren.map((p) => {
                        return <li key={p.id}>{p.name}---{p.age}</li>
                    })
                }
            </ul> */}
        </div>
        )
    }
}

export default connect(
    state => ({yiduiren:state.rens}), // 映射状态
    {}
)(Person)