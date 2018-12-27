import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import IconFont from '../../components/iconFont/IconFont';
import './Login.scss';
import loginImageTitleSrc from '../../common/image/login-title.png';

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <img className="login-title" src={loginImageTitleSrc} alt="登入"/>
                <div className="input-container">
                    <IconFont
                        className="input-icon"
                        iconType="#icon-zhanghaoxinxi"
                    />
                    <input className="username" type="text" placeholder="用户名" />
                </div>
                <div className="input-container">
                    <IconFont
                        className="input-icon"
                        iconType="#icon-mima"
                    />
                    <input className="pwd" type="password" placeholder="密码" />
                </div>
                <div className="login-button">登入</div>
                <Link className="register-notice" to="/">注册新账号</Link>
            </div>
        )
    }
}

export default Login
