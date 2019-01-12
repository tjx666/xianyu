import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PersonalInfo.scss';
import avatar from '../../assets/image/avatar.jpg';

const CountColumn = ({ count, type }) => (
    <div className="count-column">
        <span className="count">{count}</span>
        <span className="type">{type}</span>
    </div>
);

export class PersonalInfo extends Component {
    static propTypes = {
    }

    constructor(props) {
        super(props);

        this.state = {
            nickName: '年轻不读书',
            countColumns: [666, 999, 500000],
            avatarSrc: '/assets/image/avatar.jpg',
        };
    }

    _renderCountColumns = __ => ['超赞', '关注数', '粉丝数'].map((type, index) => <CountColumn
        key={index}
        count={this.state.countColumns[index]}
        type={type}
    />)

    render() {
        return (
            <div className="personal-info">
                <div className="info-top">
                    <div className="text-info">
                        <span className="nick-name">{this.state.nickName}</span>
                        <span className="motto">{'虽然没挣到钱，但是在闲鱼开心就好'}</span>
                    </div>
                    <div className="avatar-container">
                        <img src={avatar} alt="头像" className="avatar" />
                        <span className="greater-signal">></span>
                    </div>
                </div>
                <div className="count-columns"> {this._renderCountColumns()} </div>
            </div>
        );
    }
}

export default PersonalInfo;
