import React, { Component } from 'react';
import CategoryNavbar from '../../components/categoryNavbar/CategoryNavBar';
import ProductList from '../productList/ProductList';
import PropTypes from 'prop-types';
import './ProductsContainer.scss';

export class ProductsContainer extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="products-container">
                <CategoryNavbar/>
                <ProductList/>
            </div>
        );
    }
}

export default ProductsContainer;
