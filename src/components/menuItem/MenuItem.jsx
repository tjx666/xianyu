import './MenuItem.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconFont from '../iconFont/IconFont';
import { NavLink } from 'react-router-dom';

class MenuItem extends Component {
  static defaultPropTypes = {
  }

  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    iconType: PropTypes.string.isRequired,
    selectedIconType: PropTypes.string.isRequired,
    navText: PropTypes.string.isRequired,
    navLink: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
  }

  render() {
    return (
      <div className="nav-tab" onClick={this.props.onSelect.bind(null, this.props.navText)}>
        <NavLink className="nav-link" to={this.props.navLink} activeClassName="active-nav-tab">
          <IconFont
            className="nav-icon-font"
            iconType={`#icon-${this.props.isSelected ? this.props.selectedIconType : this.props.iconType}`}
          />
          <span className="nav-text">{this.props.navText}</span>
        </NavLink>
      </div>
    );
  }
}

export default MenuItem;