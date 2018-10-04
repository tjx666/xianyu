import style from './Navbar.scss';


import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navTabs: [
                {
                    iconType: ''
                }
            ]
        }
    }



    _renderTabs = __ => (
        this.state.tabs.map()
    )

    render() {
        return (
            <div className={style.container}>
                这是导航栏
            </div>
        )
    }
}
