import React, { Component } from 'react';
import MessageItem from "../../components/messageItem/MessageItem";
import PropTypes from 'prop-types';
import './MessageList.scss';

export class MessageList extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="message-list">
                <MessageItem
                    avatarSrc={}
                />
            </div>
        )
    }
}

export default MessageList;
