import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './categoryNavTab.scss';

export class categoryNavTab extends Component {
    static propTypes = {
        isSelected: PropTypes.bool.isRequired,
        category: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }


    render() {
        return (
            <div 
                className={ `category-nav-tab ${this.props.isSelected ? 'selected-nav-tab' : ''}`}
                onClick={this.props.onSelect}
            >
                {this.props.category}
            </div>
        )
    }
}

export default categoryNavTab
