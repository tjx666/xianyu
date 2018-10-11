import React, { Component } from 'react';
import SearchPoolBox from '../../components/searchPoolBox/searchPoolBox';
import BuildPoolCard from '../../components/buildPoolCard/BuildPoolCard';
import HotTheme from '../../container/hotTheme/HotTheme';
import './Pool.scss';

export class Pool extends Component {
    render() {
        return (
            <div className="pool">
                <div className="title-container">
                    <span className="find-pool">发现鱼塘</span>
                    <span className="my-pool">我的鱼塘</span>
                </div>
                <SearchPoolBox />
                <div className="pool-content">
                    <BuildPoolCard/>
                    <HotTheme/>
                </div>
            </div>
        )
    }
}

export default Pool
