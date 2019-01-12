import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Content from './containers/content/Content';
import Menu from './containers/menu/Menu';
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import './App.scss';

const Main = __ => (
    <div className="main">
        <Content />
        <Menu />
    </div>
);

class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route
                        path="/login"
                        component={LoginPage}
                    />
                    <Route
                        path="/register"
                        component={RegisterPage}
                    />
                    <Route
                        path="/"
                        component={Main}
                    />
                    <Redirect
                        to="/"
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
