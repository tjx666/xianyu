import './GoodsList.scss';

import React, { Component } from 'react';
import Faker from 'faker';

import Divider from '../../components/divider/Divider';
import Goods from '../../components/goods/Goods';

export class GoodsList extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);

    this.state = {
      goodsList: Array.from({ length: 5 }).map(__ => ({
        avatarSrc: Faker.image.avatar(),
        username: Faker.name.findName(),
        userTitle: '塘主',
        userMessage: '我的鱼塘上新了宝贝',
        photos: Array.from({ length: 3 }).map(__ => Faker.image.avatar())
      })),
    };
  }

  _renderGoodsList = __ => this.state.goodsList.map((goods, index) => (
    <div className="goods-wrapper" key={index}>
      <Goods
        avatarSrc={goods.avatarSrc}
        username={goods.username}
        userTitle={goods.userTitle}
        userMessage={goods.userMessage}
        photos={goods.photos}
      />
      <Divider />
    </div>
  ))


  render() {
    return (
      <div className="goods-list">
        {this._renderGoodsList()}
      </div>
    );
  }
}

export default GoodsList;
