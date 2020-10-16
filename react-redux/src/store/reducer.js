/*
 * @Author: xiaohuolong
 * @Date: 2020-10-15 17:15:25
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-15 18:04:36
 * @FilePath: /react-xy/react-redux/src/store/reducer.js
 */
import { DELETE_ITEM, ADD_ITEM, CHANGE_VALUE, GET_VALUE } from './actionTypes.js'

const defaultState = {
    inputValue : '123321',
    list :[]
}

export default (state = defaultState, action) =>{
    const newState = JSON.parse(JSON.stringify(state))
    if(action.type === CHANGE_VALUE){
        newState.inputValue = action.value
        return newState
    }else if(action.type === ADD_ITEM){
        newState.list.push(newState.inputValue)
        return newState
    }else if(action.type === DELETE_ITEM){
        newState.list.splice(action.index, 1)
        return newState
    }else if(action.type === GET_VALUE){
        return action.data
    }
    return state
}