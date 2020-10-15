/*
 * @Author: xiaohuolong
 * @Date: 2020-10-14 11:02:03
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-15 16:28:05
 * @FilePath: /react-xy/redux/src/store/reducer.js
 */
import { DELETE_ITEM, ADD_ITEM, CHANGE_VALUE, GET_VALUE } from './actionTypes.js'
const defaultState = {
    inputValue : '',
    list:[]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    console.log(action)
    if(action.type === CHANGE_VALUE){
        const newState = { ...state }
        newState.inputValue = action.value
        return newState
    }else if(action.type === ADD_ITEM){
        const newState = { ...state }
        newState.list.push(newState.inputValue)
        return newState
    }else if(action.type === DELETE_ITEM){
        const newState = { ...state }
        newState.list.splice(action.index, 1)
        return newState
    }else if(action.type === GET_VALUE){
        return action.data
    }
    return state
}