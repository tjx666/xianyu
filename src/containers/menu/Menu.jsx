import './Menu.scss';

import React, { Component } from 'react';

import MenuItem from '../../components/menuItem/MenuItem';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MenuItems: [
        {
          iconType: 'shouye',
          selectedIconType: 'shouye1',
          navText: '咸鱼',
          navLink: '/index',
          isSelected: true,
        },
        {
          iconType: 'dayongchi',
          selectedIconType: 'dayongchi1',
          navText: '鱼塘',
          navLink: '/pool',
          isSelected: false,
        },
        {
          iconType: 'xiaoxi1',
          selectedIconType: 'xiaoxi',
          navText: '消息',
          navLink: '/message_list',
          isSelected: false,
        },
        {
          iconType: 'geren',
          selectedIconType: 'iconzhengli-',
          navText: '我的',
          navLink: '/my',
          isSelected: false,
        },
      ]
    };
  }

  handleSelect = (navText, event) => {
    for (const tab of this.state.MenuItems) {
      if (tab.navText === navText) {
        if (tab.isSelected) return;
        tab.isSelected = true;
      } else {
        if (tab.isSelected) tab.isSelected = false;
      }
    }

    this.setState({
      MenuItems: this.state.MenuItems,
    });
  }

  _renderTabs = __ => this.state.MenuItems.map(tab => (
    <MenuItem
      key={tab.navText}
      iconType={tab.iconType}
      selectedIconType={tab.selectedIconType}
      navText={tab.navText}
      navLink={tab.navLink}
      isSelected={tab.isSelected}
      onSelect={this.handleSelect}
    />
  ))

  render() {
    return (
      <div className="navbar">
        {this._renderTabs()}
      </div>
    );
  }
}

export default Menu;

