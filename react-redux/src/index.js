/*
 * @Author: xiaohuolong
 * @Date: 2020-10-15 17:04:03
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-15 18:02:50
 * @FilePath: /react-xy/react-redux/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import TodoList from './TodoList'
import store from './store'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
