import { DELETE_ITEM, ADD_ITEM, CHANGE_VALUE, GET_VALUE } from './actionTypes.js'
import axios from 'axios'

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('http://127.0.0.1:8888/').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}

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