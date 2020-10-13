/*
 * @Author: xiaohuolong
 * @Date: 2020-10-13 10:57:42
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 11:58:36
 * @FilePath: /react-xy/demo02/src/color.js
 */
import React, { createContext, useReducer } from 'react';
export const ColorContext = createContext({})
export const UPDATE_COLOR = 'UPDATE_COLOR'
export const RESET_COLOR = 'RESET_COLOR'
export const DEFAULT_COLOR = 'green'
const reducer = (state, action) => {
    switch (action.type){
        case RESET_COLOR:
            return DEFAULT_COLOR
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}
export const Color = props => {
    const [ color, dispatch ] = useReducer(reducer, DEFAULT_COLOR)
    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}