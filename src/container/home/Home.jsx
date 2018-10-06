import React, { Component } from 'react';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import CategoryCard from '../categoryCard/CategoryCard';
import NavCard1 from '../navCard1/NavCard1';
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <HomeHeader/>
                <CategoryCard/>
                <NavCard1/>
            </div>
        )
    }
}
