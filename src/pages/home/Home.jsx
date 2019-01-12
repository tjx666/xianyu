import React, { Component } from 'react';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import CategoryCard from '../../containers/categoryCard/CategoryCard';
import NavCard1 from '../../containers/navCard1/NavCard1';
import NavCard2 from '../../containers/navCard2/NavCard2';
import ProductsContainer from '../../containers/productsContainer/ProductsContainer';
import './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <HomeHeader/>
                <CategoryCard/>
                <NavCard1/>
                <NavCard2/>
                <ProductsContainer/>
            </div>
        );
    }
}
