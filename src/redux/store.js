/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore，专门用于创建redux中最为核心的store对象
import {legacy_createStore as createStore,applyMiddleware} from 'redux';

// 引入汇总之后的reducer
import allReducer from './reducers'

// 引入redux-thunk，用于支持哈异步action
import thunk from 'redux-thunk';


// 暴露 store
export default createStore(allReducer,applyMiddleware(thunk))