import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ThemeTag.scss';

export class ThemeTag extends Component {
    static propTypes = {
        theme: PropTypes.string,
    }

    render() {
        return (
            <div className="theme-tag-container">
                <div className="tag-left"><span className="tag-sharp">#</span>&nbsp;{this.props.theme}</div>
                <div className="tag-right"></div>
                <div className="tag-right-bottom"></div>
            </div>
        )
    }
}

export default ThemeTag
