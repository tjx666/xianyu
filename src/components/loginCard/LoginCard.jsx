import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LoginCard.scss';
import imgSrc from '../../common/image/login.png';

export class LoginCard extends Component {
    render() {
        return (
            <div className="login-card">
                <span className="welcome">欢迎来到闲鱼</span>
                <div className="login-button">
                    <Link to="/login" className="login-link">
                        <span className="login-button-words">马上登入</span>
                    </Link>
                </div>
                <img className="login-animate" src={imgSrc} alt="动画" />
            </div>
        )
    }
}

export default LoginCard
