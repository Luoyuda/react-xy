/*
 * @Author: xiaohuolong
 * @Date: 2020-10-15 17:24:52
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-15 17:26:41
 * @FilePath: /react-xy/react-redux/src/store/actionCreators.js
 */
import { DELETE_ITEM, ADD_ITEM, CHANGE_VALUE, GET_VALUE } from './actionTypes.js'

export const changeValueAction = value => {
    return {
        type: CHANGE_VALUE,
        value
    }
}
export const addItemAction = () => {
    return {
        type: ADD_ITEM
    }
}
export const deleteItemAction = index => {
    return {
        type: DELETE_ITEM,
        index
    }
}
export const getListAction = data => ({
    type: GET_VALUE,
    data
})