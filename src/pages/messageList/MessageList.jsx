import React, { Component } from 'react';
import MessageItem from "../../components/messageItem/MessageItem";
import MessageListHeader from "../../components/messageListHeader/MessageListHeader";
import PropTypes from 'prop-types';
import './MessageList.scss';

export class MessageList extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="message-list">
                <MessageListHeader/>
                <MessageItem
                    isIconFont={true}
                    avatarSrc={"#icon-huodongzhongxin"}
                    messageType="activity-message"
                    fromWhere="活动消息"
                    digest={"9.9元清仓"}
                    date={"7小时前"}
                />
                <MessageItem
                    isIconFont={true}
                    avatarSrc={"#icon-tongzhi"}
                    messageType="notice"
                    fromWhere={"通知"}
                    digest={"实名认证"}
                    date={"2天前"}
                />
            </div>
        )
    }
}

export default MessageList;
