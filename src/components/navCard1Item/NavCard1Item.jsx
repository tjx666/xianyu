import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavCard1Item.scss';


export class NavCard1Item extends Component {
    static propTypes = {
        isBottomBorder: PropTypes.bool.isRequired,
        isRightBorder: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        introduction: PropTypes.string,
        introductionStyle: PropTypes.object,
        subtitle: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
    }

    constructor(props) {
      super(props);
    
      this.state = {
         imageSrc: this.props.imageSrc
      };
    }
    
    
    render() {
        const imageSrc = require(`../../assets/image/${this.props.imageSrc}`);
        let borderStyle = {};
        if (this.props.isBottomBorder) {
            borderStyle.borderBottom= '1px solid #EEE';
        } else {
            borderStyle.borderTop= '1px solid #EEE';
        }
        if (this.props.isRightBorder) {
            borderStyle.borderRight= '1px solid #EEE';
        } else {
            borderStyle.borderLeft= '1px solid #EEE';
        }
        return (
            <div className="nav-card1-item" style={borderStyle}>
                <div className="item1-left">
                    <div className="item1-title-container">
                        <h2 className="item1-title">{this.props.title}</h2>
                        <span className="item1-introduction" style={this.props.introductionStyle}>{this.props.introduction}</span>
                    </div>
                    <h3 className="item1-subtitle">{this.props.subtitle}</h3>
                </div>
                <img className="item1-right" src={imageSrc} alt={this.props.imageAlt} />
            </div>
        );
    }
}

export default NavCard1Item;
