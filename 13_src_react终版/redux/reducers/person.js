import { ADD_PERSON } from '../constant'

// 初始化人的列表 
const initStaste = [{id:'001',name:'tom',age:18}]

export default function personReducer(perState=initStaste,action){
    console.log(ADD_PERSON)
    const {type,data} = action
    console.log(type.value)
    switch (type) {
        case ADD_PERSON: // 若是添加一个人
            return [data, ...perState]
    
        default:
            return perState
    }
}