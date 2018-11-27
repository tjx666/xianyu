import React from 'react';
import PropTypes from 'prop-types';
import './IconFont.scss';
import '../../common/js/iconFont';

const IconFont  = (props) => {
    return (
        <svg className={`icon ${props.className ? props.className : ''}`} onClick={props.onClick} aria-hidden="true">
            <use xlinkHref={props.iconType}></use>
        </svg>
    )
};
IconFont.propTypes = {
    className: PropTypes.string,
    iconType: PropTypes.string,
    onClick: PropTypes.func
}

export default IconFont;
