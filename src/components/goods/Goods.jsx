import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Goods.scss';

export class Goods extends Component {
    static propTypes = {
        avatarSrc: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        userTitle: PropTypes.string.isRequired,
        userMessage: PropTypes.string.isRequired,
        photos: PropTypes.array.isRequired,
    }

    _renderPhotos = __ => this.props.photos.map((photoSrc, index) => (
        <img className="goods-photo" src={photoSrc} alt="宝贝照片" key={index}/>
    ))

    render() {
        return (
            <div className="goods">
                <div className="goods-header">
                    <img src={this.props.avatarSrc} alt="用户头像加载失败" className="avatar" />
                    <div className="goods-user-info">
                        <span className="user-name">{ this.props.username } <span className="user-title">{ this.props.userTitle}</span></span>
                        <span className="user-message">{ this.props.userMessage }</span>
                    </div>
                </div>
                <div className="goods-photos">
                    {this._renderPhotos()}
                </div>
                <div className="goods-footer"></div>
            </div>
        )
    }
}

export default Goods;
