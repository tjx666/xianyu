import React from 'react';
import './IconFont.scss';
import '../../common/js/navTabIcon';

export default (props) => {
    return (
        <svg className={`icon ${props.className ? props.className : ''}`} onClick={props.onClick} aria-hidden="true">
            <use xlinkHref={props.iconType}></use>
        </svg>
    )
}
