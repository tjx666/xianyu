import React, { Component } from 'react';
import './NavCard2.scss';

export class NavCard2 extends Component {   
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    
                }
            ]
        }
    }


    render() {
        return (
            <div className="nav-card2">
                <div className="card2-header">
                    <h2 className="card2-title">卖闲置能换钱</h2>
                    <span className="card2-introduction">最新发布<span className="latest-publish-count">85594</span>件闲置</span>
                </div>
            </div>
        )
    }
}

export default NavCard2
