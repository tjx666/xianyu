import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import IconFont from '../../components/iconFont/IconFont';
import axios from 'axios';

import './Login.scss';
import loginImageTitleSrc from '../../common/image/login-title.png';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            password: '',
        }
    }

    handleInput = (name, event) => {
        // console.log(`${name} input! value: ${event.target.value}`);
        this.setState({
            ...this.state,
            [name]: event.target.value.trim()
        });
    };

    handleLogin = __ => {
        if (this.state.id.length === 0) {
            alert('账号不能为空');
            return;
        }
        if (this.state.password.length === 0) {
            alert('密码不能为空');
            return;
        }

        const postData = {
            id: this.state.id,
            password: this.state.password
        }

        axios
            .post('http://localhost:8080/login', postData)
            .then(function (response) {
                if (response.data.code === 1) {
                    localStorage.setItem("isLogin", true);
                    alert('登入成功');
                    window.location.href = "http://localhost:3000/index"
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="login">
                <img className="login-title" src={loginImageTitleSrc} alt="登入"/>
                <div className="input-container">
                    <IconFont
                        className="input-icon"
                        iconType="#icon-zhanghaoxinxi"
                    />
                    <input className="id" onChange={this.handleInput.bind(this, 'id')} value={this.state.id} type="text" placeholder="用户名" />
                </div>
                <div className="input-container">
                    <IconFont
                        className="input-icon"
                        iconType="#icon-mima"
                    />
                    <input className="pwd" onChange={this.handleInput.bind(this, 'password')} value={this.state.password} type="password" placeholder="密码" />
                </div>
                <div className="login-button" onClick={this.handleLogin}>登入</div>
                <Link className="register-notice" to="/register">注册新账号</Link>
            </div>
        )
    }
}

export default Login
