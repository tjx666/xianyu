import React, { Component } from 'react';
import './navCard1.scss';

export class NavCard1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navItems: [
                {
                    title: '逛同城',
                    subtitle: '3533人在线',
                    imageSrc: '../..'
                }
            ]
        }
    }


    render() {
        return (
            <div className="nav-card1">

            </div>
        )
    }
}

export default NavCard1
