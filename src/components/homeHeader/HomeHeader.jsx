import React, { Component } from 'react';
import IconFont from '../iconFont/IconFont';
import './HomeHeader.scss';

export default class HomeHeader extends Component {
    render() {
        return (
            <header className="home-header">
                <span className="text-loge">闲鱼</span>
                <div className="home-search-box">
                    <IconFont iconType="#icon-search" />
                    <span className="hot-search">外套男</span>
                </div>
                <IconFont className="scan-code-icon" iconType="#icon-saoma" />
            </header>
        );
    }
}
