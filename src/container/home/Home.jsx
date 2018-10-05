import React, { Component } from 'react';
import CategoryCard from '../categoryCard/CategoryCard';
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <CategoryCard/>
            </div>
        )
    }
}
