import React, { Component } from 'react';
import IconFont from '../iconFont/IconFont';
import './searchPoolBox.scss';

export class searchPoolBox extends Component {
    render() {
        return (
            <div className="search-pool-box">
                <IconFont
                    className="search-icon"
                    iconType="#icon-search"
                />
                <span className="placeholder">搜索你感兴趣的鱼塘</span>
            </div>
        )
    }
}

export default searchPoolBox
