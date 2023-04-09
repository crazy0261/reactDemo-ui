/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore，专门用于创建redux中最为核心的store对象
import {legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux';

// 由于redux 4.2版本createStore废弃，该用configureStore，则需要安装    npm i @reduxjs/toolkit
// 引入Coun组件服务的reducer
import countReducer from './reducers/count';

import personReducer from './reducers/person';
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';


// 汇总所有的reducer 变为一个总的reducer
const  allReducer = combineReducers({
    he: countReducer,
    // rens: personReducer
})


// 暴露 store
export default createStore(allReducer,applyMiddleware(thunk))