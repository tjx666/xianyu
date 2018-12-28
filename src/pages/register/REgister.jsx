import React, { Component } from 'react';
import axios from 'axios';

import './Register.scss'

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            username: '',
            password: '',
            repeatPassword: ''
        }
    }

    handleInput = (name, event) => {
        // console.log(`${name} input! value: ${event.target.value}`);
        this.setState({
            ...this.state,
            [name]: event.target.value.trim()
        });
    };

    handleSubmit = __ => {
        if (this.state.id.length === 0) {
            alert('账号不能为空');
            return;
        }
        if (this.state.username.length === 0) {
            alert('昵称不能为空');
            return;
        }
        if (this.state.password.length === 0) {
            alert('密码不能为空');
            return;
        }
        if (this.state.password !== this.state.repeatPassword) {
            alert('两次密码不一致');
            return;
        }

        const postData = {
            id: this.state.id,
            username: this.state.username,
            password: this.state.password
        };

        console.log(postData);

        axios
            .post('http://localhost:8080/users', postData)
            .then(function (response) {
                if (response.data.code === 1) {
                    localStorage.setItem("isLogin", true);
                    alert('注册成功');
                    window.location.href = "http://localhost:3000/index"
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="register">
                <div className="input-container">
                    <input className="id" onChange={this.handleInput.bind(this, 'id')} value={this.state.id} type="text" placeholder="自定义账号" />
                </div>
                <div className="input-container">
                    <input className="username" onChange={this.handleInput.bind(this, 'username')} value={this.state.username} type="text" placeholder="昵称" />
                </div>
                <div className="input-container">
                    <input className="password" onChange={this.handleInput.bind(this, 'password')} value={this.state.password} type="password" placeholder="密码" />
                </div>
                <div className="input-container">
                    <input className="repeat-password" onChange={this.handleInput.bind(this, 'repeatPassword')} value={this.state.repeatPassword} type="password" placeholder="重复一遍密码" />
                </div>
                <div className="register-button" onClick={this.handleSubmit}>注册</div>
            </div>
        )
    }
}

export default Register;
