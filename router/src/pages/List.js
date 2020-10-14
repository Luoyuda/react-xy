/*
 * @Author: xiaohuolong
 * @Date: 2020-10-13 14:59:05
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-13 15:49:16
 * @FilePath: /react-xy/router/src/pages/List.js
 */
import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: 0
        }
    }
    componentDidMount(){
        console.log(this.props.match)
        this.setState({
            id: this.props.match.params.id
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({
            id: nextProps.match.params.id
        })
    }
    render() { 
        return ( 
            <div>
                List: {this.state.id}
            </div>
        );
    }
}

export default List;