import './Pool.scss';

import React, { Component } from 'react';

import BuildPoolCard from '../../components/buildPoolCard/BuildPoolCard';
import Divider from '../../components/divider/Divider';
import GoodsList from '../../containers/goodsList/GoodsList';
import HotThemes from '../../containers/hotThemes/HotThemes';
import PoolSectionHeader from '../../components/poolSectionHeader/PoolSectionHeader';
import SearchPoolBox from '../../components/searchPoolBox/searchPoolBox';

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
          <BuildPoolCard />
          <HotThemes />
          <Divider />
          <PoolSectionHeader
            iconType="#icon-xiaoxi"
            sectionTitle="鱼塘动态"
          />
          <GoodsList />
        </div>
      </div>
    );
  }
}

export default Pool;
