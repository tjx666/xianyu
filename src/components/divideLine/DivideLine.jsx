import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DivideLine.scss';

export class DivideLine extends Component {
    static propTypes = {
    }

    render() {
        const style = {
            width: this.props.width || "100%",
            height: this.props.height || "12px",
            backgroundColor: this.props.backgroundColor || 'rgba(238, 232, 232, 0.411)',
        }
        return (
            <div
                className="divide-line"
                style={style}
            >
            </div>
        )
    }
}

export default DivideLine
