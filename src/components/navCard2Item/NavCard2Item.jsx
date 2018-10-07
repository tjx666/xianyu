import React, { Component } from 'react';
import IconFont from '../iconFont/IconFont';
import PropTypes from 'prop-types'

export class NavCard2Item extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div className="nav-card2-item">
                <div className="item2-title-container">
                    <IconFont
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
