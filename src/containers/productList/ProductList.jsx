import React, { Component } from 'react';
import Product from '../../components/product/Product';
import './ProductList.scss';

export class ProductList extends Component {
    static propTypes = {

    }

    constructor(props) {
        super(props);

        this.state = {
            leftProductList: [
                {
                    id: '1',
                    isVideo: false,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i4/TB27YVmtYsrBKNjSZFpXXcXhFXa_!!0-fleamarket.jpg_200x200.jpg',
                    introduce: '华为荣耀 畅玩7X 二手手机 4GB+32GB',
                    price: 300.00,
                    wantedCount: 20,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=tb96597642&width=30&height=30&type=sns',
                    username: 'tb96597642',
                    sesameCredit: '极好'
                },
                {
                    id: '2',
                    isVideo: false,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i3/TB2m3RylH3nBKNjSZFMXXaUSFXa_!!0-fleamarket.jpg_200x200.jpg',
                    introduce: '宏基 aspire one D270',
                    price: 400.00,
                    wantedCount: 10,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=century%CF%E9&width=30&height=30&type=sns',
                    username: 'century祥',
                    sesameCredit: '一般'
                },
                {
                    id: '3',
                    isVideo: true,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i4/TB1rmqINVXXXXXdaFXXrmJt.VXX_200x200.jpg',
                    introduce: '老式手动凤凰828n胶片相机',
                    price: 1200.00,
                    wantedCount: 60,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=chenguowen1912&width=30&height=30&type=sns',
                    username: 'chenguowen1912',
                    sesameCredit: '差'
                },
                {
                    id: '4',
                    isVideo: false,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i1/O1CN011jaoVKIgWQIHuq2_!!0-fleamarket.jpg_200x200.jpg',
                    introduce: '转让基本全新迪卡侬rr520山地车',
                    price: 900.00,
                    wantedCount: 10,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=ikeachen&width=30&height=30&type=sns',
                    username: 'ikeachen',
                    sesameCredit: '极好'
                },
                {
                    id: '5',
                    isVideo: false,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i4/TB2FNx9FA9WBuNjSspeXXaz5VXa_!!0-fleamarket.jpg_200x200.jpg',
                    introduce: 'PG1，41码，绝对正品，紫罗兰配色！耐克篮球鞋！',
                    price: 429.00,
                    wantedCount: 0,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=ikeachen&width=30&height=30&type=sns',
                    username: 'tb96597642',
                    sesameCredit: '极好'
                }
            ],
            rightProductList: [
                {
                    id: '6',
                    isVideo: true,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i1/O1CN011jaoVKIgWQIHuq2_!!0-fleamarket.jpg_200x200.jpg',
                    introduce: '转让基本全新迪卡侬rr520山地车',
                    price: 900.00,
                    wantedCount: 10,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=ikeachen&width=30&height=30&type=sns',
                    username: 'ikeachen',
                    sesameCredit: '极好'
                },
                {
                    id: '7',
                    isVideo: false,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i4/TB2FNx9FA9WBuNjSspeXXaz5VXa_!!0-fleamarket.jpg_200x200.jpg',
                    introduce: 'PG1，41码，绝对正品，紫罗兰配色！耐克篮球鞋！',
                    price: 429.00,
                    wantedCount: 0,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=ikeachen&width=30&height=30&type=sns',
                    username: '爱新觉罗',
                    sesameCredit: '极好'
                },
                {
                    id: '8',
                    isVideo: false,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i4/TB27YVmtYsrBKNjSZFpXXcXhFXa_!!0-fleamarket.jpg_200x200.jpg',
                    introduce: '华为荣耀 畅玩7X 二手手机 4GB+32GB',
                    price: 300.00,
                    wantedCount: 20,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=tb96597642&width=30&height=30&type=sns',
                    username: 'tb96597642',
                    sesameCredit: '极好'
                },
                {
                    id: '9',
                    isVideo: false,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i3/TB2m3RylH3nBKNjSZFMXXaUSFXa_!!0-fleamarket.jpg_200x200.jpg',
                    introduce: '宏基 aspire one D270',
                    price: 400.00,
                    wantedCount: 10,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=century%CF%E9&width=30&height=30&type=sns',
                    username: 'century祥',
                    sesameCredit: '一般'
                },
                {
                    id: '10',
                    isVideo: true,
                    imageSrc: 'https://img.alicdn.com/bao/uploaded/i4/TB1rmqINVXXXXXdaFXXrmJt.VXX_200x200.jpg',
                    introduce: '老式手动凤凰828n胶片相机',
                    price: 1200.00,
                    wantedCount: 60,
                    avatarSrc: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=chenguowen1912&width=30&height=30&type=sns',
                    username: 'chenguowen1912',
                    sesameCredit: '差'
                },
            ]
        };
    }

    _renderProductList =  productList => productList.map(product => (
        <Product
            key={product.id}
            isVideo={product.isVideo}
            imageSrc={product.imageSrc}
            introduce={product.introduce}
            price={product.price}
            wantedCount={product.wantedCount}
            avatarSrc={product.avatarSrc}
            username={product.username}
            sesameCredit={product.sesameCredit}
        />
    ))

    render() {
        return (
            <div className="product-list-container">
                <div className="left-product-list">{this._renderProductList(this.state.leftProductList)}</div>
                <div className="right-product-list">{this._renderProductList(this.state.rightProductList)}</div>
            </div>
        );
    }
}

export default ProductList;
