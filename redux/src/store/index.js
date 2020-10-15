/*
 * @Author: xiaohuolong
 * @Date: 2020-10-14 11:01:13
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-15 16:40:40
 * @FilePath: /react-xy/redux/src/store/index.js
 */
import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import thunk from 'redux-thunk'
import reducer from './reducer.js'
const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer, enhancer)          // 创建数据存储仓库
export default store                 //暴露出