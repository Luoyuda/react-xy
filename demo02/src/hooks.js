/*
 * @Author: xiaohuolong
 * @Date: 2020-10-12 18:12:13
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-12 18:35:47
 * @FilePath: /react-xy/demo02/src/hooks.js
 */
import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';
const Context = createContext()

function Span(){
    const value = useContext(Context)
    return (
        <span>{value}</span>
    )
}
export default function Hooks () {
    const [ name, setName ] = useState('下雨')
    const [ age, dispatch ] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state
        }
    },0)
    useEffect(()=>{
        console.log(`useEffect=>${name}, ${age}`)
        return ()=>{
            console.log(`useEffect-end=>${name}, ${age}`)
        }
    })
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Context.Provider value={name}>
                <Span />
            </Context.Provider>
            <button onClick={() => dispatch('sub')}>-</button>
            <Context.Provider value={age}>
                <Span />
            </Context.Provider>
            <button onClick={() => dispatch('add')}>+</button>
        </div>
    )
}