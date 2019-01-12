import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFont from '../iconFont/IconFont';
import './MessageItem.scss';

export class MessageItem extends Component {
    static propTypes = {
        isIconFont: PropTypes.bool.isRequired,
        avatarSrc: PropTypes.string.isRequired,
        messageType: PropTypes.string,
        fromWhere: PropTypes.string.isRequired,
        digest: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="message-item">
                {
                    this.props.isIconFont
                        ? <IconFont
                            iconType={this.props.avatarSrc}
                            className={
                                `avatar ${
                                this.props.messageType === 'notice'
                                    ? 'notice'
                                    : this.props.messageType === 'activity-message'
                                        ? 'activity-message'
                                        : ''
                                }`
                            }
                        />
                        : <img className="avatar" src={this.props.avatarSrc} alt="头像缺失" />
                }

                <div className="right">
                    <div className="right-top">
                        <span className="from-where">{this.props.fromWhere}</span>
                        <span className="digest">{this.props.digest}</span>
                    </div>
                    <div className="date">{this.props.date}</div>
                </div>
            </div>
        );
    }
}

export default MessageItem;
