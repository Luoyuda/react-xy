/*
 * @Author: xiaohuolong
 * @Date: 2020-10-15 17:15:18
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-15 17:46:59
 * @FilePath: /react-xy/react-redux/src/store/index.js
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store