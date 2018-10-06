import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavCard1Item extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        introduction: PropTypes.string,
        introductionBGC: PropTypes.string,
        subtitle: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="nav-card1-item">
                <div className="item1-left">
                    <div className="item1-title-container">
                        <h2 className="item1-title">{this.props.title}</h2>
                        <span className="item1-introduction" style={{ backgroundColor: this.props.introductionBGC}}>{this.props.introduction}</span>
                    </div>
                    <h3 className="item1-subtitle">{this.props.subtitle}</h3>
                </div>
                <img className="item1-right" src={this.props.imageSrc} alt={this.props.imageAlt} />
            </div>
        )
    }
}

export default NavCard1Item;
