import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './app.css';
import About from '../about';
import Home from '../home';
import Test from '../test';

const News = () => {
    return (
        <div>
            <h1>this is News page</h1>
        </div>
    )
};

export default class App extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/new" component={News}/>
                <Route path="/test" component={Test}/>
            </Switch>
        );
    }
}