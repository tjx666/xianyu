import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './SwitchTab.scss';

export default class SwitchTab extends Component {
    static defaultPropTypes = {
    }

    static propTypes = {
        iconType: PropTypes.string.isRequired,
        selectedIconType: PropTypes.string.isRequired,
        navText: PropTypes.string.isRequired,
        navLink: PropTypes.string.isRequired,
    }


    handleSwitchTab = event => {
        
    }

    render() {
        return (
            <div className={style.container} onClick={this.handleSwitchTab}>
                <NavLink to={this.props.navLink} activeClassName="active-nav-tab">
                    <svg class={`icon ${style['icon-font']} ${this.props.iconType}`} aria-hidden="true">
                        <use xlinkHref="#icon-xxx"></use>
                    </svg>
                </NavLink>
            </div>
        )
    }
}