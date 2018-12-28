import React, { Component } from 'react';

import LoginCard from '../../components/loginCard/LoginCard';
import PersonInfo from '../../components/personalInfo/PersonalInfo';
import DivideLine from '../../components/divideLine/DivideLine';
import FeatureList from '../../components/featureList/FeatureList';
import { checkIfLogin } from '../../util/checkLogin';

import './Self.scss'

export class Self extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: checkIfLogin()
        }
    }

    handleLoginOut = __ => {
        localStorage.removeItem("isLogin");
        window.location.href = "http://localhost:3000/self";
    }

    render() {
        return (
            <div className="self">
                { this.state.isLogin ? <PersonInfo/> : <LoginCard/>}
                <DivideLine/>
                <FeatureList/>
                <div className="login-out" onClick={this.handleLoginOut}>退出登入</div>
            </div>
        )
    }
}

export default Self;
