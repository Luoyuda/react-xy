/*
 * @Author: xiaohuolong
 * @Date: 2020-10-13 14:15:51
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 14:16:34
 * @FilePath: /react-xy/demo02/src/size.js
 */
import React, { useState, useCallback, useEffect } from 'react';

function useWinSize(){
    const [ size , setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })
    const onResize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[]) 
    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])
    return size;
}
export default function Size(){
    const size = useWinSize()
    return <div>页面Size:{size.width}x{size.height}</div>
}