import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { Component } from 'react';

const Default = () => (<div>index/default</div>)
const User = () => (<div>index/user</div>)
const Info = () => (<div>index/info</div>)

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Router>
                    <ul>
                        <li><Link to={`/index/user`}>user</Link> </li>
                        <li><Link to={`/index/info`}>info</Link> </li>
                    </ul>
                    <Route path="/index" exact component={Default} />
                    <Route path="/index/user" component={User} />
                    <Route path="/index/info" component={Info} />
                </Router>
            </div>
        );
    }
}

export default Index;