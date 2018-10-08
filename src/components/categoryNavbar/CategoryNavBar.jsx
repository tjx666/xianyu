import React, { Component } from 'react';
import CategoryNavTab from '../categoryNavTab/categoryNavTab';
import PropTypes from 'prop-types';
import './CategoryNavBar.scss'

export class CategoryNavBar extends Component {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {
            categoryTabs: [
                {
                    category: '新鲜',
                    isSelected: true
                },
                {
                    category: '附进',
                    isSelected: false,
                },
                {
                    category: '手机',
                    isSelected: false,
                },
                {
                    category: '数码',
                    isSelected: false
                },
                {
                    category: '租房',
                    isSelected: false
                },
                {
                    category: '服装',
                    isSelected: false
                },
                {
                    category: '居家',
                    isSelected: false
                },
                {
                    category: '美妆',
                    isSelected: false
                },
                {
                    category: '运动',
                    isSelected: false
                },
                {
                    category: '家电',
                    isSelected: false
                },
                {
                    category: '玩具乐器',
                    isSelected: false
                },
            ]
        }
    }

    handleSelect = (category, event) => {
        console.log({ selected: category })
        for (const tab of this.state.categoryTabs) {
            if (tab.isSelected && tab.category === category) return;
            if (tab.category === category) {
                tab.isSelected = true;
            } else {
                tab.isSelected = false;
            }
        }

        this.setState({
            categoryTabs: this.state.categoryTabs
        });
        console.log({ categoryTabs: this.state.categoryTabs});
    }
    
    _renderCategories = __ => this.state.categoryTabs.map(categoryTab => (
        <CategoryNavTab
            key={categoryTab.category}
            category={categoryTab.category}
            isSelected={categoryTab.isSelected}
            onSelect={this.handleSelect.bind(this, categoryTab.category)}
        />
    ))

    render() {
        return (
            <div className="category-navbar">
                {this._renderCategories()}
            </div>
        )
    }
}

export default CategoryNavBar
