import './Navbar.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavTab from '../navTab/NavTab';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navTabs: [
                {
                    iconType: 'shouye',
                    selectedIconType: 'shouye1',
                    navText: "咸鱼",
                    navLink: '/index'
                },
                {
                    iconType: 'dayongchi',
                    selectedIconType: 'dayongchi1',
                    navText: "鱼塘",
                    navLink: '/pool'
                },
                {
                    iconType: 'xiaoxi1',
                    selectedIconType: 'xiaoxi',
                    navText: "消息",
                    navLink: '/message'
                },
                {
                    iconType: 'geren',
                    selectedIconType: 'iconzhengli-',
                    navText: "我的",
                    navLink: '/self'
                },
            ]
        }
    }



    _renderTabs = __ => this.state.navTabs.map(tab => (
        <NavTab
            key={tab.navText}
            iconType={tab.iconType}
            selectedIconType={tab.selectedIconType}
            navText={tab.navText}
            navLink={tab.navLink}
        />
    ))

    render() {
        return (
            <div className="navbar">
                {this._renderTabs()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

