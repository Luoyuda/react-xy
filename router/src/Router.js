/*
 * @Author: xiaohuolong
 * @Date: 2020-10-13 14:55:08
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 18:05:42
 * @FilePath: /react-xy/router/src/Router.js
 */
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Index from './pages/Index.js'
import List from './pages/List.js'

function AppRouter() {
    return (
        <Router>
            <ul>
                <li> <Link to="/index">首页</Link> </li>
                <li><Link to={`/list/1`}>1</Link> </li>
                <li><Link to={`/list/2`}>2</Link> </li>
                <li><Link to={`/list/3`}>3</Link> </li>
            </ul>
            <Route path="/index" component={Index} />
            <Route path="/list/:id" component={List} />
        </Router>
    );
}
export default AppRouter;