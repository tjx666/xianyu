import React, { Component } from 'react';
import NavCard2Item from '../../components/navCard2Item/NavCard2Item';
import './NavCard2.scss';

export class NavCard2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    iconType: '#icon-wuuiconxiangjifangda',
                    title: '发布闲置',
                    subtitle: '什么都能买',
                    titleColor: 'rgb(255, 155, 4)',
                },
                {
                    iconType: '#icon-renminbi',
                    title: '淘宝特卖',
                    subtitle: '一键发布',
                    titleColor: 'rgb(255, 80, 1)',
                },
                {
                    iconType: '#icon-xunhuan',
                    title: '信用回收',
                    subtitle: '免费上门取件',
                    titleColor: 'rgb(250, 95, 58)',
                }
            ]
        }
    }

    _renderItems = __ => this.state.items.map(item => (
        <NavCard2Item
            key={item.title}
            iconType={item.iconType}
            title={item.title}
            subtitle={item.subtitle}
            titleColor={item.titleColor}
        />
    ))

    render() {
        return (
            <div className="nav-card2">
                <div className="card2-header">
                    <h2 className="card2-title">卖闲置能换钱</h2>
                    <span className="card2-introduction">最新发布<span className="latest-publish-count">85594</span>件闲置</span>
                </div>
                <div className="card2-items">
                    {this._renderItems()}
                </div>
            </div>
        )
    }
}

export default NavCard2
