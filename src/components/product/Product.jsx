import React, { Component } from 'react';
import VideoHideFloor from '../videoHideFloor/videoHideFloor';
import PropTypes from 'prop-types';
import './Product.scss';

export class Product extends Component {
    static propTypes = {
        isVideo: PropTypes.bool.isRequired,
        imageSrc: PropTypes.string.isRequired,
        introduce: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        wantedCount: PropTypes.number.isRequired,
        avatarSrc: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        sesameCredit: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="product">
                <div>
                    <img className="product-image" alt="产品图片失效" src={this.props.imageSrc} />
                    {this.props.isVideo && (<VideoHideFloor/>)}
                </div>
                <div className="product-info-container">
                    <p className="introduction">{this.props.introduce}</p>
                    <div className="sale-info">
                        <span className="product-price"><span className="yuan">￥</span>{this.props.price}</span>
                        <span className="wanted-count">{this.props.wantedCount}人想要</span>
                    </div>
                    <div className="user-info-container">
                        <img className="avatar" src={this.props.avatarSrc} alt="用户头像加载失败" />
                        <div className="user-info-right">
                            <span className="username">{this.props.username}</span>
                            <span className="sesame-credit">芝麻信用&nbsp;|&nbsp;{this.props.sesameCredit}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
