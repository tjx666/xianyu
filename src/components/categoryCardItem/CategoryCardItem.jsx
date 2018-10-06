import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFont from '../iconFont/IconFont';
import './CategoryCardItem.scss'


export default class CategoryCardItem extends Component {
    static propTypes = {
        iconType: PropTypes.string,
    }
    
    constructor(props) {
      super(props);
    
      this.state = {
         iconType: ''
      }
    }
    
    render() {
        return (
            <div className="category-card-item">
                <IconFont iconType={this.props.iconType}/>
                <span className="icon-text">{this.props.category}</span>
            </div>
        )
    }
}
