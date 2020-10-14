/*
 * @Author: xiaohuolong
 * @Date: 2020-10-13 14:32:27
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 14:35:02
 * @FilePath: /react-xy/router/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
