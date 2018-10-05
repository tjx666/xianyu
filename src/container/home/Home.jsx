import React, { Component } from 'react';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import CategoryCard from '../categoryCard/CategoryCard';
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <HomeHeader/>
                <CategoryCard/>
            </div>
        )
    }
}
