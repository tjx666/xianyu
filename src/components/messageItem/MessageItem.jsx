import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MessageItem.scss';

export class MessageItem extends Component {
    static propTypes = {
        avatarSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        digest: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="message-item">
                <img className="avatar" src={this.props.avatarSrc} alt="头像缺失"/>
                <div className="right">
                    <h2 className="message-type"></h2>
                    <span className="title"></span>
                    <span className="date"></span>
                </div>
            </div>
        )
    }
}

export default MessageItem;
