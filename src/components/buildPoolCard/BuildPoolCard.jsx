import React, { Component } from 'react';
import builtPoolImage from '../../common/image/built-pool.png';
import './BuildPoolCard.scss';

export class BuildPoolCard extends Component {
    render() {
        return (
            <img className="build-pool-card" src={builtPoolImage} alt="建鱼塘入口">

            </img>
        )
    }
}

export default BuildPoolCard
