/*
 * @Author: xiaohuolong
 * @Date: 2020-10-14 10:31:06
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-14 10:50:30
 * @FilePath: /react-xy/redux/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
