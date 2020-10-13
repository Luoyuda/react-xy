/*
 * @Author: xiaohuolong
 * @Date: 2020-10-13 10:49:29
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 11:59:21
 * @FilePath: /react-xy/demo02/src/btn.js
 */
import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR, RESET_COLOR } from './color.js'
const Colors = [
    'blue',
    'red',
    'white',
    'black',
]

export default function Btn () {
    const { dispatch, color } = useContext(ColorContext)
    return (
        <div>
            {Colors.map(c => <button style={{fontWeight: c === color ? 'bold' : ''}} onClick={() => dispatch({ type: UPDATE_COLOR, color: c})} key={c} >{c}</button>)}
            <button onClick={() => dispatch({ type: RESET_COLOR})}>reset</button>
        </div>
    )
}