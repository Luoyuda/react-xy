/*
 * @Author: xiaohuolong
 * @Date: 2020-10-15 17:16:34
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-15 17:59:22
 * @FilePath: /react-xy/react-redux/src/TodoList.js
 */
import React from 'react';
import { changeValueAction, addItemAction, deleteItemAction } from './store/actionCreators'
import {connect} from 'react-redux'
const TodoList = (props) => {
    const { inputValue, change, add, list, del } = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={change} />
                <button onClick={add}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => 
                    (<li onClick={() => del(index)} key={index}>{item}</li>))
                }
            </ul>
        </div>
    );
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list : state.list
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        change(e){
            dispatch(changeValueAction(e.target.value))
        },
        add(){
            dispatch(addItemAction())
        },
        del(index){
            dispatch(deleteItemAction(index))
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList);