import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFont from '../iconFont/IconFont';
import './MessageListHeader.scss'

export class MessageListHeader extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="message-list-header">
            <span className="nav-text">消息</span>
            <IconFont
                iconType="#icon-bangzhu"
                className="help"
            />
      </div>
    )
  }
}

export default MessageListHeader
