import './Home.scss';

import React, { Component } from 'react';

import CategoryCard from '../../containers/categoryCard/CategoryCard';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import NavCard from '../../containers/navCard/NavCard';
import IdleGoods from '../../containers/idleGoods/IdleGoods';
import ProductsContainer from '../../containers/productsContainer/ProductsContainer';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeHeader />
        <CategoryCard />
        <NavCard />
        <IdleGoods />
        <ProductsContainer />
      </div>
    );
  }
}
