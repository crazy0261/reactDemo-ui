/**
 * 该文件用于汇总所有renducer为一个总的reducer
 */

// 引入combineReducers 用于汇总多个reducer
import {combineReducers} from 'redux';

// 引入Coun组件服务的reducer
import he from './count';

import rens from './person';



// 汇总所有的reducer 变为一个总的reducer
export default combineReducers({
    // he: he,
    // rens: rens

    // 简写
    he,
    rens
})

