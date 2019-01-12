import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFont from '../iconFont/IconFont';
import './PoolSectionHeader.scss';

export class PoolSectionHeader extends Component {
    static propTypes = {
        iconType: PropTypes.string.isRequired,
        sectionTitle: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="pool-section-header">
                <span className="header-line">——&nbsp;</span>
                <IconFont className="section-icon" iconType={this.props.iconType}/>
                &nbsp;
                <span>{this.props.sectionTitle}</span>
                <span className="header-line">&nbsp;——</span>
            </div>
        );
    }
}

export default PoolSectionHeader;
