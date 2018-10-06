import React, { Component } from 'react';
import CategoryCardItem from '../../components/categoryCardItem/CategoryCardItem';
import './CategoryCard.scss';

export default class CategoryCard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         categoryItems: [
             {
                 iconType: '#icon-iphone',
                 category: '二手手机'
             },
             {
                iconType: '#icon-xiangji',
                category: '数码'
             },         
             {
                iconType: '#icon-youxi',
                category: '游戏交易'
             },         
             {
                iconType: '#icon-naiping',
                category: '母婴用品'
             },         
             {
                iconType: '#icon-xiyiji',
                category: '家居家电'
             },         
             {
                iconType: '#icon-yifu',
                category: '品牌服饰'
             },         
             {
                iconType: '#icon-huazhuangpin',
                category: '美妆闲置'
             },         
             {
                iconType: '#icon-car',
                category: '二手车'
             },         
             {
                iconType: '#icon-qunzi',
                category: '租衣服'
             },         
             {
                iconType: '#icon-fenleichakan',
                category: '全部分类'
             },         
        ]
      }
    }
    
    _renderCategoryList = __ => this.state.categoryItems.map(item => (
        <CategoryCardItem
            iconType={item.iconType}
            category={item.category}
        />
    ))
    
    render() {
        return (
            <div className="category-card">
                {this._renderCategoryList()}
            </div>
        )
    }
}
