/*
 * @Author: xiaohuolong
 * @Date: 2020-10-12 16:10:35
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 14:16:50
 * @FilePath: /react-xy/demo02/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { FilterableProductTable, PRODUCTS } from './test.js';
import Hooks from './hooks.js'
import Area from './area.js'
import Child from './child.js'
import Size from './size.js'

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <div>
    <Hooks />
    <FilterableProductTable products={PRODUCTS} />
    <Area />
    <Child />
    <Size />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
