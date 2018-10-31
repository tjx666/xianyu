import React, { Component } from 'react';
import PoolSectionHeader from '../../components/poolSectionHeader/PoolSectionHeader';
import ThemeTag from '../themeTag/ThemeTag';
import './HotTheme.scss';

export class HotTheme extends Component {
    render() {
        return (
            <div className="hot-theme">
                <PoolSectionHeader
                    iconType="#icon-icon-test"
                    sectionTitle="热门主题"
                    iconColor="red"
                />
                <ThemeTag theme={'收藏图'}/>
            </div>
        )
    }
}

export default HotTheme
