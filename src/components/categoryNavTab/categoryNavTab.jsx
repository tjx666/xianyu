import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './categoryNavTab.scss';

export class categoryNavTab extends Component {
    static propTypes = {
        isSelected: PropTypes.bool.isRequired,
        category: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired,
        setTabWidth: PropTypes.func.isRequired,
    }


    handleClick = (event) => {
        const clientX = event.clientX;
        const offsetX = event.offsetX;
        this.props.onSelect(this.props.category, clientX, offsetX);
    }

    componentDidMount() {
        this._setWidth();
    }

    componentDidUpdate() {
        this._setWidth();
    }


    _setWidth = __ => {
        const tabDOM = this.refs.categoryNavTab;
        this.props.setTabWidth(this.props.category, tabDOM.clientWidth);
    }

    render() {
        return (
            <div
                className={`category-nav-tab ${this.props.isSelected ? 'selected-nav-tab' : ''}`}
                ref="categoryNavTab"
                onClick={this.handleClick}
            >
                {this.props.category}
            </div>
        )
    }
}

export default categoryNavTab
