import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFont from '../iconFont/IconFont';
import './PoolSectionHeader.scss'

export class PoolSectionHeader extends Component {
    static propTypes = {
        iconType: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        iconColor: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="pool-section-header">
                <span>-</span>
                <IconFont className="section-icon" iconType={this.props.iconType}/>
                <span>{this.props.sectionTitle}</span>
                <span>-</span>
            </div>
        )
    }
}

export default PoolSectionHeader;
