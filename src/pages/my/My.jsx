import './My.scss';

import React, { Component } from 'react';

import Divider from '../../components/divider/Divider';
import FeatureList from '../../components/featureList/FeatureList';
import LoginCard from '../../components/loginCard/LoginCard';
import PersonInfo from '../../components/personalInfo/PersonalInfo';
import { checkIfLogin } from '../../util/checkLogin';

export class My extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: checkIfLogin()
    };
  }

  handleLoginOut = __ => {
    localStorage.removeItem('isLogin');
    window.location.href = 'http://localhost:3000/self';
  }

  render() {
    return (
      <div className="self">
        {this.state.isLogin ? <PersonInfo /> : <LoginCard />}
        <Divider />
        <FeatureList />
        <div className="login-out" onClick={this.handleLoginOut}>退出登入</div>
      </div>
    );
  }
}

export default My;
