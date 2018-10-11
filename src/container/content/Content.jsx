import React, { Component } from 'react';
import './Content.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Pool from '../../pages/pool/Pool';

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route
                        path='/index'
                        component={Home}
                    />
                    <Route
                        path='/pool'
                        component={Pool}
                    />
                    <Redirect
                        to="/pool"
                    />
                </Switch>
            </div>
        )
    }
}
