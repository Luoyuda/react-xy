/*
 * @Author: xiaohuolong
 * @Date: 2020-10-13 10:49:29
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 11:46:28
 * @FilePath: /react-xy/demo02/src/text.js
 */
import React, { useContext } from 'react';
import { ColorContext } from './color'

export default function Text () {
    const { color } = useContext(ColorContext)
    return (
        <span style={{color}}>我是什么颜色的？</span>
    )
}