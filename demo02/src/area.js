/*
 * @Author: xiaohuolong
 * @Date: 2020-10-13 10:54:39
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 11:45:44
 * @FilePath: /react-xy/demo02/src/area.js
 */
import React from 'react';
import Btn from './btn.js'
import { Color } from './color.js'
import Text from './text.js'

export default function Area(){
    return (
        <div>
            <Color>
                <Text></Text>
                <Btn></Btn>
            </Color>
        </div>
    )
}