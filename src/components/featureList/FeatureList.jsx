import React, { Component } from 'react';
import IconFont from '../iconFont/IconFont';
import { checkIfLogin } from '../../util/checkLogin';

import './FeatureList.scss';

const FeatureItem = ({ iconType, feature, count }) => (
    <div className="feature-item">
        <div className="item-left">
            <IconFont
                className="feature-icon"
                iconType={`#${iconType}`}
            />
            <span className="feature">{feature}</span>
        </div>
        
        <div className="item-right">
            { checkIfLogin() && <span className="count">{ count }</span> }
            <span className="greater-signal">></span>
           </div>
    </div>
);

export class FeatureList extends Component {
    static propTypes = {

    }

    constructor(props) {
        super(props);
        this.state = {
            featureItems: [
                {
                    iconType: 'icon-fabu1',
                    feature: '我发布的',
                    count: 5,
                },
                {
                    iconType: 'icon-maichu',
                    feature: '我卖出的',
                    count: 6
                },
                {
                    iconType: 'icon-mairu',
                    feature: '我买到的',
                    count: 10,
                },
                {
                    iconType: 'icon-dayongchi',
                    feature: '我的鱼塘',
                    count: 20,
                },
                {
                    iconType: 'icon-tubiao207',
                    feature: '我的闲鱼币',
                    count: 2000
                }
            ]
        };

    }

    _renderFeatureList = featureItems => featureItems.map((featureItem, index) => (
        <FeatureItem
            key={index}
            iconType={featureItem.iconType}
            feature={featureItem.feature}
            count={featureItem.count}
        />
    ))

    render() {
        return (
            <div className="feature-list">
                {this._renderFeatureList(this.state.featureItems)}
            </div>
        );
    }
}

export default FeatureList;
