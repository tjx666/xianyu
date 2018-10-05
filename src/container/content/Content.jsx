import React, { Component } from 'react';
import './Content.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';

export default class Content extends Component {
    render() {
        return (
            <main className="content">
                <Switch>
                    <Route
                        path='/index'
                        component={Home}
                    />
                    <Redirect
                        to="/index"
                    />
                </Switch>
            </main>
        )
    }
}
