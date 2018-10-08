import React, { Component } from 'react';
import IconFont from '../iconFont/IconFont';
import PropTypes from 'prop-types';
import './navCard2Item.scss';

export class NavCard2Item extends Component {
    static propTypes = {
        iconType: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        titleColor: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="nav-card2-item">
                <div className="item2-title-container" style={{ color: this.props.titleColor }}>
                    <IconFont
                        className="item2-icon"
                        iconType={this.props.iconType}
                    />
                    <h2 className="item2-title">{this.props.title}</h2>
                </div>
                <span className="item2-subtitle">{this.props.subtitle}</span>
            </div>
        )
    }
}

export default NavCard2Item
