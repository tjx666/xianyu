import React, { Component } from 'react';
import PoolSectionHeader from '../../components/poolSectionHeader/PoolSectionHeader';
import './HotTheme.scss';

export class HotTheme extends Component {
    render() {
        return (
            <div className="hot-theme">
                <PoolSectionHeader
                    iconType=""
                />
                这是热门主题部分
            </div>
        )
    }
}

export default HotTheme
