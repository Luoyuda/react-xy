/*
 * @Author: xiaohuolong
 * @Date: 2020-10-14 17:58:09
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-14 18:08:41
 * @FilePath: /react-xy/redux/src/TodoListUI.js
 */
import React from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const TodoListUI = (props) => { 
    return ( 
        <>
        <div style={{margin:'10px'}}>
            <Input 
                placeholder={props.inputValue} 
                style={{ width:'250px', marginRight:'10px'}}
                onChange={props.changeInputValue}
            />
            <Button type='primary' onClick={props.handleClick}>增加</Button>
        </div>
        <div style={{margin:'10px',width:'300px'}}>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item, index)=>(<List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>)}
            />    
        </div>
    </>
    );
}

export default TodoListUI;