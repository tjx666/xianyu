import './navCard.scss';

import React, { Component } from 'react';

import { NavCardItem } from '../../components/navCardItem/NavCardItem';

export class NavCard1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          title: '逛同城',
          subtitle: '3533人在线',
          imageSrc: 'balance-car.jpg',
          imageAlt: '平衡车',
        },
        {
          title: '免费送',
          introduction: 'HOT',
          introductionStyle: { backgroundColor: 'rgb(255, 93, 61)' },
          subtitle: '24.9万件宝贝',
          imageSrc: 'dragon-fruit.jpg',
          imageAlt: '火龙果',
        },
        {
          title: '租房',
          introduction: '免中介费',
          introductionStyle: { backgroundColor: 'rgb(255, 136, 32)' },
          subtitle: '真实房东',
          imageSrc: 'room.jpg',
          imageAlt: '室内',
        },
        {
          title: '闲鱼币',
          subtitle: '福利天天有',
          imageSrc: 'xianyu-currency.png',
          imageAlt: '闲鱼币',
        }
      ]
    };
  }

  _renderItems = __ => {
    let isBottomBorder = false;
    let isRightBorder = false;
    return this.state.navItems.map((item, index) => {
      if (index / 2 === 0) {
        isBottomBorder = !isBottomBorder;
      }
      isRightBorder = !isRightBorder;
      return (
        <NavCardItem
          key={item.title}
          isBottomBorder={isBottomBorder}
          isRightBorder={isRightBorder}
          title={item.title}
          introduction={item.introduction}
          introductionStyle={item.introductionStyle}
          subtitle={item.subtitle}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
        />
      );
    });
  }

  render() {
    return (
      <div className="nav-card1">
        {this._renderItems()}
      </div>
    );
  }
}

export default NavCard1;
