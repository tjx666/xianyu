import React, { Component } from 'react';
import CategoryNavTab from '../categoryNavTab/categoryNavTab';
import PropTypes from 'prop-types';
import './CategoryNavBar.scss'

export class CategoryNavBar extends Component {
    static propTypes = {

    }

    static updatePaths = {
        NO_UPDATE: Symbol('No update, default'),
        SELECT_CATEGORY: Symbol('select category ')
    }

    constructor(props) {
        super(props);

        this.state = {
            halfWindowWidth: document.body.clientWidth / 2 | 0,
            navbarPadding: 15,
            tabMarginX: 10,
            scrollLeft: 0,
            currentCategoryIndex: 0,
            updatePath: CategoryNavBar.updatePaths.NO_UPDATE,
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
        };
    }

    handleSelect = (category) => {
        let currentCategoryIndex = this.state.currentCategoryIndex;
        this.state.categoryTabs.forEach((tab, index) => {
            if (tab.isSelected && tab.category === category) return;
            if (tab.category === category) {
                tab.isSelected = true;
                currentCategoryIndex = index;
            } else {
                tab.isSelected = false;
            }
        })

        this.setState({
            updatePath: CategoryNavBar.updatePaths.SELECT_CATEGORY,
            categoryTabs: this.state.categoryTabs,
            currentCategoryIndex,
        });
    }

    componentDidUpdate() {
        if (this.state.updatePath === CategoryNavBar.updatePaths.SELECT_CATEGORY) {
            this.state.updatePath = CategoryNavBar.updatePaths.NO_UPDATE;
            const tabs = this.state.categoryTabs;
            const selectedTabIndex = this.state.currentCategoryIndex;
            const halfWindowWidth = this.state.halfWindowWidth;

            // 计算选中的标签中心距离类别导航栏最左边距离
            let categoryNavbarLeft = this.state.navbarPadding;
            for (let index = 0; index < selectedTabIndex; ++index) {
                categoryNavbarLeft += tabs[index].width;
                categoryNavbarLeft += this.state.tabMarginX * 2;
            }
            console.log({
                selectedTabIndex,
            });
            categoryNavbarLeft = categoryNavbarLeft + tabs[selectedTabIndex].width / 2 | 0;

            // 如果选中标签中心距离最导航栏最左侧大于一半屏幕宽度要将选中元素居中
            if (categoryNavbarLeft >  halfWindowWidth) {
                let scrollLeft = this.state.scrollLeft;
                scrollLeft = categoryNavbarLeft - this.state.halfWindowWidth - scrollLeft;
                this.refs.categoryNavBar.scrollLeft = scrollLeft;
            } else {
                this.refs.categoryNavBar.scrollLeft = 0;
            }
        }
    }

    setTabWidth = (category, width) => {
        this.state.categoryTabs.find(tab => tab.category === category).width = width;
    }

    _renderCategories = __ => this.state.categoryTabs.map(categoryTab => (
        <CategoryNavTab
            key={categoryTab.category}
            category={categoryTab.category}
            isSelected={categoryTab.isSelected}
            onSelect={this.handleSelect}
            setTabWidth={this.setTabWidth}
        />
    ))

    render() {
        return (
            <div
                ref="categoryNavBar"
                className="category-navbar"
                style={{
                    left: this.state.scrollLeft
                }}
            >
                {this._renderCategories()}
            </div>
        )
    }
}

export default CategoryNavBar
