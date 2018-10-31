import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DivideLine.scss';

export class DivideLine extends Component {
    static propTypes = {
        lineHeight: PropTypes.number.isRequired,
    }

    render() {
        return (
            <div className="divide-line" height={this.props.lineHeight}>
            </div>
        )
    }
}

export default DivideLine
