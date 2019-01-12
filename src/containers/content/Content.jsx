import './Content.scss';

import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../../pages/home/Home';
import MessageList from '../../pages/messageList/MessageList';
import My from '../../pages/my/My';
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
                    <Route
                        path="/message_list"
                        component={MessageList}
                    />
                    <Route
                        path="/my"
                        component={My}
                    />
                </Switch>
            </div>
        );
    }
}
