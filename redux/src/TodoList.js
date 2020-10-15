/*
 * @Author: xiaohuolong
 * @Date: 2020-10-14 10:49:03
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-15 16:44:51
 * @FilePath: /react-xy/redux/src/TodoList.js
 */
import React, { Component } from 'react';
import store from './store/index'
import { changeValueAction, addItemAction, deleteItemAction, getTodoList } from './store/actionCreators.js'
import TodoListUI from './TodoListUI.js'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        console.log(this.state)
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentDidMount(){
        // axios.get('').then((res)=>{
        //     const data = res.data
            store.subscribe(this.storeChange)
            const action = getTodoList()
            store.dispatch(action)
        // })
    }
    storeChange(){
        this.setState(store.getState())
    }
    deleteItem(index){
        store.dispatch(deleteItemAction(index))
    }
    handleClick(){
        store.dispatch(addItemAction())
    }
    changeInputValue(e){
        store.dispatch(changeValueAction(e.target.value))
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                handleClick={this.handleClick}
                deleteItem={this.deleteItem}
            />
        );
    }
}

export default TodoList;