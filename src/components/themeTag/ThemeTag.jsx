import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ThemeTag.scss';

export class ThemeTag extends Component {
    static propTypes = {
        theme: PropTypes.string,
    }

    constructor(props) {
        super(props)

        this.state = {
            randomBGColor:  this._computeRandomColor()
        }
    }

    _computeRandomColor() {
        const randomColor = `#${ Array.from({ length: 3 }).map(__ => Math.random() > 0.5 ? "0" : "E").join('')}`;
        return randomColor === "#EEE" ? "#E0E" : randomColor;
    }

    render() {
        return (
            <div className="theme-tag-container">
                <div className="tag-left" style={{ backgroundColor: this.state.randomBGColor }}><span className="tag-sharp">#</span>&nbsp;{this.props.theme}</div>
                <div className="tag-right"></div>
                <div className="tag-right-bottom" style={{ backgroundColor: this.state.randomBGColor }}></div>
            </div>
        )
    }
}

export default ThemeTag
