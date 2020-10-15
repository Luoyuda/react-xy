/*
 * @Author: xiaohuolong
 * @Date: 2020-10-14 18:19:20
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-14 18:23:51
 * @FilePath: /react-xy/redux/src/server.js
 */
const http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'application/json'});
    const obj = {
        inputValue : 'Write Something',
        list:[
            '1',
            '2'
        ]
    }
    // 发送响应数据 "Hello World"
    response.end(JSON.stringify(obj));
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');